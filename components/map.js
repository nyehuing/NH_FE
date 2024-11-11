import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TextInput, 
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';



export default function Map(){
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
            <View style={styles.oneBlock}>
                {number.slice(0, 11).map((item)=>{
                    return (
                        <View style={styles.garo}>
                            <Text style={styles.text}>{item.id}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.twoBlock}>
                {number.slice(11, 21).map((item)=>{
                    return(
                        <View style={styles.garo}>
                            <Text style={styles.text}>{item.id}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.threeBlock}>
            {number.slice(21, 31).map((item)=>{
                    return(
                        <View style={styles.garo}>
                            <Text style={styles.text}>{item.id}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.forBlock}>
            {number.slice(31, 40).map((item)=>{
                    return(
                        <View style={styles.garo}>
                            <Text style={styles.text}>{item.id}</Text>
                        </View>
                    )
                })}
            </View>
            <View style={styles.fiveBlock}>
                {number.slice(40, 48).map((item)=>{
                    return(
                        <View style={styles.sero}>
                            <Text>{item.id}</Text>
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
        top:100,
        flex:1
    },
    text:{
        fontSize:16,
        textAlign:'center'
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