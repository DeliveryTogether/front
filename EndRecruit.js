import React, {useState} from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, ScrollView, TextInput, Image, StatusBar, Linking} from 'react-native';
import CustomButton from './CustomButton';

export default function EndRecruit(){

    const masterData = [
        {"store": "신전떡볶이보정점" },
        {"store": "동대문엽기떡볶이" },
        {"store": "응급실국물떡볶이" },
    ];
    const Information = [
        {"link": "https://baemin.me/4HffkGl6X", "loc": "단국대학교 죽전캠퍼스 제 2공학관 524호", "delivery": 1000},
        {"link": "https://baemin.me/4HffkGl6X", "loc": "도서관 1층", "delivery": 1500},
        {"link": "https://baemin.me/4HffkGl6X", "loc": "경기도 용인시 수지구 죽전로 152 소프트웨어ICT관 B105호", "delivery": 0},
    ];
    const Personnel = 3;

 return (
    <View style={styles.container}>
        <View>
            <StatusBar barStyle="light-content" backgroundColor={'#5e464d8c'} translucent={true} />
        </View>
        <View style={styles.back}>
            <TouchableOpacity style={[styles.backbutton]}>
              <Text style={{fontSize:25,color:'#5e464d'}}>←</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.title}>
            <Text style={styles.titleText}>
                <Text style={{color:'#e5a663'}} onPress={() => Linking.openURL(Information[0].link)}>{masterData[0].store}</Text>
            의</Text>
            <Text style={styles.titleText}>배달 메이트 모집이 완료되었어요!</Text>

        </View>

        <View style={styles.rate}>
            <View style={styles.rateBox}>
                <View style={styles.currentRate}>
                    <Text style={styles.completed}>모집완료!</Text>
                </View>
            </View>
        </View>

        <View style={styles.content}>
            <Text style={styles.text}>
                {Information[2].loc}에서 만나요!
            </Text>
            <Text style={styles.text}>
                {Personnel}명이 모였어요~!~
            </Text>
        </View>

        <View style={styles.button}>
        <CustomButton
            title={'방 마감하기'}
            onPress={() => alert('방 마감하기 버튼')}/>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        //paddingHorizontal:10,
        width:'100%',
        height:'10%',
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#fff',
        //borderBottomWidth:1,
    },
    backbutton: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: '5%',
    },
    title: {
        //flex: 1,
        width:'80%',
        height:'18%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#5e464d8c",
        //borderRadius: 15,
        marginBottom:15,
        //backgroundColor: '#9aa9ff',
    },
    titleText: {
        fontWeight: "bold",
        fontSize:24,
        color:'#5e464d',
        lineHeight:40,
    },
    rate:{
        width: '100%',
        margin: 70,
        alignItems: 'center',
        //backgroundColor:'pink',
    },
    rateBox:{
        width:'65%',
        height:45,
        borderWidth: 5,
        borderColor: '#5e464d',
        borderRadius: 15,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    currentRate:{
        flex: 1,   //currentrate
        height:'100%',
        backgroundColor: '#e5a663',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    completed:{
        fontSize:24,
        fontWeight:'bold',
        color:'#5e464d',
    },
    content: {
        flex: 1,
        width: '80%',
        //margin: 15,
        //padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#3fa021'
    },
    text: {
        fontSize:20,
        color: '#5e464d',
        fontWeight: 'bold',
        lineHeight:40,
    },
    button:{
        width:'100%',
        height:'9%',
    }
});
