import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
} from 'react-native';

export default function Footer(props){
    return(
            <View style={styles.container}>
                <TouchableOpacity onPress={props.on}>
                    <View style={props.front ? styles.selectButton : styles.Button}>
                    <Text style={props.front ? styles.selectText : styles.text}>정문</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={props.off}>
                    <View style={props.back ? styles.selectButton  : styles.Button}>
                        <Text style={props.back ? styles.selectText : styles.text}>후문</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
    )
}

const styles =  StyleSheet.create({
    selectText:{
        fontSize:16,
        fontWeight:'600',
        color:'white',
    },
    text:{
        fontSize:16,
        fontWeight:'600',
        color:'#F6C227',
    },  
    selectButton:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#F6C227',
        padding:5,
        paddingLeft:18,
        paddingRight:18,
        borderRadius:20
    },
    Button:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        padding:5,
        paddingLeft:18,
        paddingRight:18,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#F6C227'
    },
    container:{
        width:'40%',
        position:'absolute',
        top:60,
        padding:15,
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-around'
    }
})