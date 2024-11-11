import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TextInput, 
    TouchableOpacity,
    Image
} from 'react-native';
import DoorG from '../assets/door_Gray.svg'
import DoorO from '../assets/door_Orange.svg'

export default function Footer(){
    return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <DoorO />
                    <Text style={styles.selectText}>정문</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.button}>
                <DoorG />
                <Text style={styles.text}>후문</Text>
                </View>
                </TouchableOpacity>
                
            </View>
    )
}

const styles =  StyleSheet.create({
    selectText:{
        fontSize:16,
        fontWeight:'600',
        color:'#F6C227',
        marginTop:5
    },
    text:{
        fontSize:16,
        fontWeight:'600',
        color:'gray',
        marginTop:5
    },  
    button:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    container:{
        backgroundColor:'white',
        width:'100%',
        position:'absolute',
        bottom:0,
        padding:15,
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-around'
    }
})