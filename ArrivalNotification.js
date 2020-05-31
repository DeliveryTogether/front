import React from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, ScrollView, TextInput, Image, StatusBar, Linking} from 'react-native';
import CustomButton from './CustomButton';

export default function ArrivalNotification(){

    const store = [
        {"store": "신전떡볶이보정점" },
        {"store": "동대문엽기떡볶이" },
        {"store": "응급실국물떡볶이" },
    ];

    const Personnel = 3;

 return (
    <View style={styles.container}>
        <View>
            <StatusBar barStyle="light-content" backgroundColor={'#5e464d8c'} translucent={true} />
        </View>
        <View style={styles.back}>
            <TouchableOpacity style={[styles.backbutton]}>
              <Text style={{fontSize:20,color:'#5e464d',fontWeight:'bold'}}>←   입금현황</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.content}>
            <View style={styles.member}>
                <Text> </Text>
            </View>
            <View style={styles.member}>
                <Text> </Text>
            </View>
            <View style={styles.member}>
                <Text> </Text>
            </View>
        </View>

        <View style={styles.button}>
        <CustomButton
            title={'도착알림 보내기'}
            onPress={() => alert('도착알림 보내기 버튼')}/>
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
    content:{
        flex:1,
        width:'100%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        paddingTop: 10,
    },
    member:{
        //flex:1,
        width: '80%',
        height: 80,
        margin:15,
        backgroundColor: '#987aef'
    },
    button:{
        width:'100%',
        height:'9%',
    }
});
