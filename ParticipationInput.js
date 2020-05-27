import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class participationInput extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#e5a663',
    titleColor: '#fff',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
        <View>
            <View style={styles.input}>
                <Text>메뉴</Text>
                <TextInput style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}} placeholder="메뉴 이름을 입력하세요." placeholderTextColor="grey"/>
            </View>
            <View style={styles.input}>
                <Text>입금액</Text>
                <TextInput style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}} placeholder="입금액을 입력하세요." placeholderTextColor="grey"/>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    input:{
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        //backgroundColor: '#80ee8a',
  },
});
