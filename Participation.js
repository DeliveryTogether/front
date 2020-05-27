import React, {useState} from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, ScrollView, TextInput, Image, StatusBar, Linking} from 'react-native';
import CustomButton from './CustomButton';

export default function Participation(){

    const masterData = [
        {"name": "민뎡", "store": "신전떡볶이보정점" },
        {"name": "수진", "store": "동대문엽기떡볶이" },
        {"name": "ARIM", "store": "응급실국물떡볶이" },
    ];
    const Information = [
        {"link": "https://baemin.me/4HffkGl6X", "loc": "단국대학교 죽전캠퍼스 제 2공학관 524호", "delivery": 1000},
        {"link": "https://baemin.me/4HffkGl6X", "loc": "도서관 1층", "delivery": 1500},
        {"link": "https://baemin.me/4HffkGl6X", "loc": "경기도 용인시 수지구 죽전로 152 소프트웨어ICT관 B105호", "delivery": 0},
    ];

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
            에서</Text>
            <Text style={styles.titleText}>같이 시키실 분 구해요!</Text>

        </View>

        <View style={styles.image}>
            <Image
               style={{height:'100%',width:'100%',resizeMode:'contain'}}
               source={require('./떡볶이.png')}/>
        </View>

        <View style={styles.rate}>
            <Text>현재 달성액!</Text>
            <View style={styles.rateBox}>
                <View style={styles.currentRate}></View>
            </View>

        </View>

        <View style={styles.content}>
            <Text style={styles.text}>
                {Information[2].loc}
                <Text style={{fontSize:16, fontWeight:'normal',color:'#605c59'}}> 에서 만나요!</Text>
            </Text>
            <Text style={styles.text}>
                배달비는 <Text style={styles.text}>{Information[1].delivery}원 입니다.</Text>
            </Text>
        </View>

        <View style={styles.button}>
        <CustomButton
            title={'참여하기'}
            onPress={() => alert('참여하기 버튼')}/>
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
        //backgroundColor: '#9aa9ff',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: "#5e464d8c",
        //borderRadius: 15,
        marginBottom:15,
    },
    titleText: {
        fontWeight: "bold",
        fontSize:24,
        color:'#5e464d',
        lineHeight:40,
    },
    image:{
        height:150,
        width:150,
        marginBottom:15,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'lightgreen',
    },
    rate:{
        width: '100%',
        margin: 10,
        alignItems: 'center',
        //backgroundColor:'pink',
    },
    rateBox:{
        width:'65%',
        height:45,
        borderWidth: 5,
        borderColor: '#5e464d',
        borderRadius: 15,
        //justifyContent: 'center',
        flexDirection: 'row',
    },
    currentRate:{
        flex: 0.8,   //currentrate
        height:'100%',
        backgroundColor: '#e5a663',
        borderRadius: 8,
    },
    content: {
        flex: 1,
        width: '80%',
        //margin: 15,
        //padding: 10,
        justifyContent: 'center',
    },
    text: {
        marginTop: 5,
        marginBottom: 10,
        fontSize:20,
        color: '#5e464d',
        fontWeight: 'bold',
        lineHeight:35,
    },
    button:{
        width:'100%',
        height:'9%',
    }
});
