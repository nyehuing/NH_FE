import { 
    StyleSheet, 
    Text, 
    View, 
    PanResponder, 
    Animated 
} from 'react-native';
import {useRef, useState} from 'react';



export default function Map({data}){

    const scale = useRef(new Animated.Value(1)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
  
    const [lastScale, setLastScale] = useState(1);
    const [lastOffset, setLastOffset] = useState({ x: 0, y: 0 });
  
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
          return gestureState.numberActiveTouches > 0; // 드래그 시작
        },
        onPanResponderGrant: (evt, gestureState) => {
          // 현재 위치 저장
          translateX.setOffset(lastOffset.x);
          translateY.setOffset(lastOffset.y);
        },
        onPanResponderMove: (evt, gestureState) => {
          // 드래그 위치 업데이트
          translateX.setValue(gestureState.dx);
          translateY.setValue(gestureState.dy);
        },
        onPanResponderRelease: (evt, gestureState) => {
          // 드래그 종료 시 위치 저장
          translateX.flattenOffset();
          translateY.flattenOffset();
          setLastOffset({ x: lastOffset.x + gestureState.dx, y: lastOffset.y + gestureState.dy });
        },
      })
    ).current;

    const handlePinch = (event) => {
        if (event.nativeEvent.touches.length > 1) {
          const distance = Math.sqrt(
            Math.pow(event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX, 2) +
            Math.pow(event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY, 2)
          );
    
          // 확대/축소 비율 계산
          const newScale = distance / 200; // 조정할 기본 거리
          Animated.spring(scale, {
            toValue: newScale,
            useNativeDriver: true,
          }).start();
        }
      };
    const number = [
        {id:1, status:false, jang:false, king:false, Eg:false, small:false},
        {id:2, status:false, jang:false, king:false, Eg:false, small:false},
        {id:3, status:false, jang:false, king:false, Eg:false, small:false},
        {id:4, status:false, jang:false, king:false, Eg:false, small:false},
        {id:5, status:false, jang:false, king:false, Eg:false, small:false},
        {id:6, status:false, jang:false, king:false, Eg:false, small:false},
        {id:7, status:false, jang:false, king:false, Eg:false, small:false},
        {id:8, status:false, jang:false, king:false, Eg:false, small:false},
        {id:9, status:false, jang:false, king:false, Eg:false, small:false},
        {id:10, status:false, jang:false, king:false, Eg:false, small:false},
        {id:11, status:false, jang:false, king:false, Eg:false, small:false},
        {id:12, status:false, jang:false, king:false, Eg:false, small:false},
        {id:13, status:false, jang:false, king:false, Eg:false, small:false},
        {id:14, status:false, jang:false, king:false, Eg:false, small:false},
        {id:15, status:false, jang:false, king:false, Eg:false, small:false},
        {id:16, status:false, jang:false, king:false, Eg:false, small:false},
        {id:17, status:false, jang:false, king:false, Eg:false, small:false},
        {id:18, status:false, jang:false, king:false, Eg:false, small:false},
        {id:19, status:false, jang:false, king:false, Eg:false, small:false},
        {id:20, status:false, jang:false, king:false, Eg:false, small:false},
        {id:21, status:false, jang:false, king:false, Eg:false, small:false},
        {id:22, status:false, jang:false, king:false, Eg:false, small:false},
        {id:23, status:false, jang:false, king:false, Eg:false, small:false},
        {id:24, status:false, jang:false, king:false, Eg:false, small:false},
        {id:25, status:false, jang:false, king:false, Eg:false, small:false},
        {id:26, status:false, jang:false, king:false, Eg:false, small:false},
        {id:27, status:false, jang:false, king:false, Eg:false, small:false},
        {id:28, status:false, jang:false, king:false, Eg:false, small:false},
        {id:29, status:false, jang:false, king:false, Eg:false, small:false},
        {id:30, status:false, jang:false, king:false, Eg:false, small:false},
        {id:31, status:false, jang:false, king:false, Eg:false, small:false},
        {id:32, status:false, jang:false, king:false, Eg:false, small:false},
        {id:33, status:false, jang:false, king:false, Eg:false, small:false},
        {id:34, status:false, jang:false, king:false, Eg:false, small:false},
        {id:35, status:false, jang:false, king:false, Eg:false, small:false},
        {id:36, status:false, jang:false, king:false, Eg:false, small:false},
        {id:37, status:false, jang:false, king:false, Eg:false, small:false},
        {id:38, status:false, jang:false, king:false, Eg:false, small:false},
        {id:39, status:false, jang:false, king:false, Eg:false, small:false},
        {id:40, status:false, jang:false, king:false, Eg:false, small:false},
        {id:41, status:false, jang:false, king:false, Eg:false, small:false},
        {id:42, status:false, jang:false, king:false, Eg:false, small:false},
        {id:43, status:false, jang:false, king:false, Eg:false, small:false},
        {id:44, status:false, jang:false, king:false, Eg:false, small:false},
        {id:45, status:false, jang:false, king:false, Eg:false, small:false},
        {id:46, status:false, jang:false, king:false, Eg:false, small:false},
        {id:47, status:false, jang:false, king:false, Eg:false, small:false},
        {id:48, status:false, jang:false, king:false, Eg:false, small:false},
    ]
    return(
        <View style={styles.container}>
            {/* <View style={styles.schoolMain}>
                <Text style={styles.SText}>학교 본관</Text>
            </View> */}
            <Animated.View
        style={{
          transform: [
            { scale },
            { translateX },
            { translateY },
          ],
        }}
        {...panResponder.panHandlers}
        onTouchMove={handlePinch}
      >
        <View  style={styles.garo}>
                <Text style={styles.text}>1</Text>
            </View>
      </Animated.View>
            
            <View style={styles.oneBlock}>
                {data.slice(1, 12).map((item, index)=>{
                    return (
                        <View key={index} style={[styles.garo, {backgroundColor:item ? "#FF2C2C" : "#53F657"}]}>
                            <Text style={styles.text}>{index+1}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.twoBlock}>
                {data.slice(12, 22).map((item, index)=>{
                    return(
                        <View key={index} style={[styles.garo, {backgroundColor:item ? "#FF2C2C" : "#53F657"}]}>
                            <Text style={styles.text}>{index+12}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.threeBlock}>
            {data.slice(22, 32).map((item, index)=>{
                    return(
                        <View key={index} style={[styles.garo, {backgroundColor:item ? "#FF2C2C" : "#53F657"}]}>
                            <Text style={styles.text}>{index+22}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.forBlock}>
            {data.slice(32, 41).map((item, index)=>{
                    return(
                        <View key={index} style={[styles.garo, {backgroundColor:item ? "#FF2C2C" : "#53F657"}]}>
                            <Text style={styles.text}>{index+32}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.fiveBlock}>
                {data.slice(41, 49).map((item, index)=>{
                    return(
                        <View key={index} style={[styles.sero, {backgroundColor:item ? "#FF2C2C" : "#53F657"}]}>
                            <Text  style={styles.text}>{index+41}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        backgroundColor:'red',
        padding:10,
        top:90,
        left:20,
        flex:1,
    },
    text:{
        fontSize:16,
        textAlign:'center'
    },
    schoolMain:{
        position:'absolute',
        top:-30,
        backgroundColor:'#858585',
        width:340,
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    SText:{
        color:'white',
        fontSize:16,
        fontWeight:'600',
        width:61,
    },
    garo:{
        backgroundColor:'#53F657',
        width:70,
        paddingVertical:5,
        borderWidth: 1,
        borderColor: 'black',  
        borderStyle: 'solid',
        display:'flex',
    },
    sero:{
        backgroundColor:'#53F657',
        height:70,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: 'black',  
        borderStyle: 'solid',
        display:'flex',
        justifyContent:'center'
    },
    oneBlock:{
        position:'absolute',
        top:50,
        flex:1,
        display:'flex',
        flexDirection:'column'
    },
    twoBlock:{
        position:'absolute',
        top:50,
        left:100,
        flex:1,
        display:'flex',
        flexDirection:'column'
    },
    threeBlock:{
        position:'absolute',
        top:50,
        left:170,
        flex:1,
        display:'flex',
        flexDirection:'column'
    },
    forBlock:{
        position:'absolute',
        top:50,
        left:270,
        flex:1,
        display:'flex',
        flexDirection:'column'
    },
    fiveBlock:{
        position:'absolute',
        top:430,
        left:30,
        flex:1,
        display:'flex',
        flexDirection:'row'
    }
})