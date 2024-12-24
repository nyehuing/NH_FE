import { 
    StyleSheet, 
    Text, 
    View,
} from 'react-native';


export default function Map({data}){
    return(
        <View style={styles.container}>
           
           <View style={styles.aouditorium}>
            <Text style={[{ color:'white'}]}>강당</Text>
           </View>
            <View style={styles.oneBlock}>
                {data.slice(48, 60).map((item, index)=>{
                    return (
                        <View key={index} style={[styles.garo, {backgroundColor:item ? "#FF2C2C" : "#53F657"}]}>
                            <Text style={styles.text}>{index+1}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.src}>
                <Text style={[{ color:'white'}, {marginLeft:2}]}>SRC관</Text>
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
    oneBlock:{
        position:'absolute',
        top:80,
        flex:1,
        left:100,
        display:'flex',
        flexDirection:'column'
    },
    aouditorium:{
        position:'absolute',
        left:-50,
       top:30,
        width:100,
        backgroundColor:'#858585',
        height:500,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    src:{
        position:'absolute',
        right:-50,
        top:30,
        width:100,
        backgroundColor:'#858585',
        height:500,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})