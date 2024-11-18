import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Modal, 
    TextInput, 
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

import Footer from '../components/footer';
import FindBtn from '../components/findBtn';
import axios from "axios";
import Map from '../components/map'

export default function MainPage(){
    const navigate = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [carNum, setCarNum] = useState('');
    const [carNumConst, setCarNumConst] = useState();
    const [selectNum, setSelectNum] = useState(null);
    const [data , setData] = useState({ parking: [] });

    const modalToggle = ()=>{
        if(carNum !== ''){
          setCarNum('');
          setSelectNum(null);
        }
        setIsModalVisible(!isModalVisible);
    }
    const search = async ()=>{
        try{
            const response = await axios.get(`http://10.150.150.105:3000/api/witch?carNumber=${carNum}`);
            setSelectNum(response.data.parkingWitch);
            setCarNumConst(carNum);
        }catch(error){
            console.log(error); 
        }
    }
    const getData = async ()=>{
      try{ 
        const response = await axios.get('http://10.150.150.105:3000/api/show');
        if(response.status === 200){
          console.log("차량데이터가 왔습니다.", response.data);
          setData(response.data);  
        }
        else{
          console.log(response.status);
        } 
      }catch(error){
        console.log("차량 정보가져오는데 에러떳다", error);
      }
    }
    useEffect(()=>{
      getData();
    }, [])
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
                <Footer />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#757575',
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
    }
})