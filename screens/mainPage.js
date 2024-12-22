import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TextInput, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import Footer from '../components/footer';
import FindBtn from '../components/findBtn';
import axios from "axios";
import Map from '../components/map'
import {IPContext} from '../context.js';

export default function MainPage(){
    const navigate = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [carNum, setCarNum] = useState('');
    const [carNumConst, setCarNumConst] = useState();
    const [selectNum, setSelectNum] = useState(null);
    const [data , setData] = useState({parking : []});
    const [isLoading, setIsLoading] = useState(false);
    const {ip} = useContext(IPContext);

    const modalToggle = ()=>{
        if(carNum !== ''){
          setCarNum('');
          setSelectNum(null);
        }
        setIsModalVisible(!isModalVisible);
    }
    const search = async ()=>{
        try{
            const response = await axios.get(`http://${ip}/api/witch?carNumber=${carNum}`);
            setSelectNum(response.data.parkingWitch);
            setCarNumConst(carNum);
        }catch(error){
            console.log(error); 
        }
    }
    const getData = async ()=>{
      try{ 
        const response = await axios.get(`http://${ip}/api/show`);
        if(response.status === 200) setData(response.data); 
        else console.log(response.status);

      }catch(error){
        console.log("차량 정보가져오는데 에러떳다", error);
      }finally{
        setIsLoading(false);
      }
    }
    useEffect(()=>{
      getData();
    }, []) 
    if(isLoading){
      return( 
        <View style={styles.containerLoading}>
          <View style={styles.megaBox}>
          <Image source = {require('../assets/logo.png')}  />
          <Text style={styles.loadingText}>자동차 주차 공간 확인할땐?</Text>
          </View>
         
        </View>
      )
    }
    return(
        <View style={{flex:1}}>
            {isModalVisible ? (<Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={modalToggle}
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={modalToggle}>
          <View style={styles.darkOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.modalContent, {height:selectNum ? 280 : 230}]}>
                <Text style={styles.modalTitle}>차량 검색하기</Text>
                <TextInput 
                    value={carNum}
                    onChangeText={(text) => {
                        setCarNum(text);
                    }}
                    style={styles.input}
                    placeholder="차량번호를 입력해주세요 ex : 123가4567"
                />

                 {selectNum ?
                 <View style={styles.result}>
                  <Text style={styles.resultText}>위치 : {selectNum}</Text> 
                  <Text style={styles.resultText}>번호판 : {carNumConst}</Text>
                  </View>
                  : null}
                 <TouchableOpacity onPress={search} style={styles.searchBtn}>
                <Text style={styles.BtnText}>검색하기</Text>
              </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>) : (null)}
            <View style={styles.container}>
                <View style={styles.main}>
                  <Map data = {data.parking}/>
                </View>
                <FindBtn onClick={modalToggle}  name={'차량 번호 검색하기'}/>
                <Footer front = {true} back = {false} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  megaBox:{
    flex:1,
    display:'flex', 
    alignItems:'center',
    justifyContent:'center'

  },
    container:{
        display:'flex',
        backgroundColor:'#757575',
        flex: 1,
        position:'relative'
    },
    containerLoading:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F6C227',
      flex: 1,
      position:'relative'
    },
    darkOverlay: {
        width:'100%',
        height:'100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: '#fff',
        width: '85%',
        display: 'flex',
        height:230,
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        borderRadius: 10,
        padding:20,
      },
      modalTitle:{
        width:'auto',
        fontSize:24,
        fontWeight:'700',
      marginBottom:5,
      },
      input:{
      marginBottom:5,
        width:'100%',
        padding: 10,
        fontSize:15,
        borderWidth: 1,        
        borderColor: 'black',  
        borderStyle: 'solid',
        borderRadius:5
      },
      searchBtn:{
        marginTop:5,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#F6C227',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:40,
        paddingVertical:8
      },
      BtnText:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    result:{
      width:'90%',
    },
    resultText:{
      marginTop:5,
      marginBottom:5,
      fontSize:16,
      fontWeight:'700'
    },
    loadingText:{
      marginTop:20,
      fontSize:24,
      fontWeight:'600',
      textAlign:'center'
    }
})