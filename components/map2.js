import { 
    StyleSheet, 
    Text, 
    View,
} from 'react-native';


export default function Map({data}){

    return(
        <View style={styles.container}>
           
           <View>
            
           </View>
            <View style={styles.oneBlock}>
                {data.slice(48, 59).map((item, index)=>{
                    return (
                        <View key={index} style={[styles.garo, {backgroundColor:item ? "#FF2C2C" : "#53F657"}]}>
                            <Text style={styles.text}>{index-48}</Text>
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
        width:'90%',
        height:600,
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
        right:0,
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