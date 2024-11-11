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
    const [selectNum, setSelectNum] = useState();

    const modalToggle = ()=>{
        setIsModalVisible(!isModalVisible);
        console.log(isModalVisible);
    }
    const search = async ()=>{
        try{
            const response = await axios.post('/api//witch', {
                carNumber:carNum
            });
            setSelectNum(response.data.parkingWitch);
        }catch(error){
            console.log(error);
        }
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
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>차량 검색하기</Text>
                <TextInput 
                value={carNum}
                onChange={(e)=>setCarNum(e.target.value)}
                style={styles.input}
                placeholder="차량번호를 입력해주세요 ex : 123가4567"
                 />
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
                    <Map />
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
        width: '80%',
        display: 'flex',
        height:200,
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        borderRadius: 10,
        padding:15,
      },
      modalTitle:{
        fontSize:24,
        fontWeight:'700'
      },
      input:{
        padding: 10,
        fontSize:15,
        borderWidth: 1,        
        borderColor: 'black',  
        borderStyle: 'solid',
        borderRadius:5
      },
      searchBtn:{
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
    }
})