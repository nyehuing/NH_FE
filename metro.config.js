const { getDefaultConfig } = require("expo/metro-config");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  // SVG Transformer 설정
  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  // 프록시 설정
  config.server = {
    enhanceMiddleware: (middleware) => {
      // 프록시 미들웨어 생성
      const apiProxy = createProxyMiddleware({
        target: "http://10.150.150.105:3000",
        changeOrigin: true,
      });

      return (req, res, next) => {
        if (req.url.startsWith("/api")) {
          return apiProxy(req, res, next);
        }
        return middleware(req, res, next);
      };
    },
  };

  return config;
})();
