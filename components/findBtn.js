import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TextInput, 
    TouchableOpacity ,
    Image
} from 'react-native';

import Search from '../assets/search.svg'
export default function FindBtn({onClick, name}){
    return(
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Text style={styles.BtnText}>{name}</Text>
            <Search width = {30}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:700,
        left:96,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#F6C227',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:5
    },
    BtnText:{
        color:'white',
        fontSize:16,
        fontWeight:'600',
        marginRight:4
    }
})