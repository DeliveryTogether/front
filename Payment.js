import React from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, ScrollView, TextInput, Image, StatusBar, Linking} from 'react-native';
import CustomButton from './CustomButton';
import CountDown from 'react-native-countdown-component';

export default function Payment(){

    const userData = [
        {"name": "민뎡", "store": "신전떡볶이보정점","pay":"10,000" },
        {"name": "수진", "store": "동대문엽기떡볶이","pay":"12,500" },
        {"name": "ARIM", "store": "응급실국물떡볶이","pay":"18,900" },
    ];

    return(
        <View style={styles.container}>
            <View>
                <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            </View>
            <View style={styles.back}>
                <TouchableOpacity style={[styles.backbutton]}>
                  <Text style={{fontSize:20,color:'white'}}>←</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{fontWeight: "bold", fontSize:24, color:'#5e464d', lineHeight:38}}>
                    <Text style={{color:'#e5a663'}}>{userData[0].name}</Text>님이{'\n'}
                    <Text style={{color:'#e5a663'}}>{userData[0].store}</Text>에서{'\n'}
                    주문한 금액은 <Text style={{color:'#e5a663'}}>{userData[0].pay}</Text>원 입니다.
                </Text>
            </View>

            <View style={styles.content}>
                <Text style={{color:'#5e464d', fontSize:20}}>10분안에 결제해 주세요!</Text>
                <Text style={{color:'#5e464d'}}>미결제시 매칭이 끊깁니다.</Text>

                <CountDown
                size={38}
                until={600}
                onFinish={() => alert('Finished')}
                digitStyle={{backgroundColor: null}}
                digitTxtStyle={{color: '#e5a663'}}
                //timeLabelStyle={{color: '#5e464d', fontWeight: 'bold'}}
                separatorStyle={{color: '#e5a663'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                />
            </View>

            <View style={styles.more}>
                <Text style={{color: '#5e464d'}}
                    onPress={() => Linking.openURL()}>주문 상세 보기</Text>
            </View>


            <View style={styles.button}>
            <CustomButton
                title={'결제하기'}
                onPress={() => alert('결제하기 버튼')}/>
            </View>


        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:'center',
    },
    back: {
        //paddingHorizontal:0,
        width:'100%',
        height:'9%',
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#5e464d',
    },
    backbutton: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
    title: {
        //flex: 1,
        width:'100%',
        height:'18%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#9aa9ff',
    },
    content:{
        padding: 90,
        width: '100%',
        flex:1,
        alignItems: 'center',
        //backgroundColor: '#90af23'
    },
    more:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        width: '100%',
        //backgroundColor: '#89abe0'
    },
    button:{
        width:'100%',
        height:'11%',
        //backgroundColor: '#5ae472'
    },

});
