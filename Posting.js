import React, {Component} from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, TextInput, StatusBar,} from 'react-native';
import CustomButton from './CustomButton';

class Posting extends Component {
    state = {
        store: "",
        minOrder: "",
        Delivery: "",
        link: "",
        loc: "",
        MasterMenu: "",
        MasterPay: "",
    };
    handleStore = text => {
        this.setState({ store: text });
    };
    handleMinOrder = text => {
        this.setState({ minOrder: text });
    };
    handleDelivery = text => {
        this.setState({ Delivery: text });
    };
    handleLink = text => {
        this.setState({ link: text });
    };
    handleLocation = text => {
        this.setState({ loc: text });
    };
    handleMasterMenu = text => {
        this.setState({ MasterMenu: text });
    };
    handleMasterPay = text => {
        this.setState({ MasterPay: text });
    };

    Posting = (store,minOrder,Delivery,link,loc,MasterMenu,MasterPay) => {
        alert("업체 :" + store + "\n" + "최소주문액 :" + minOrder);
    };

    render(){
        return (
           <View style={styles.container}>
               <View>
                   <StatusBar barStyle="light-content" backgroundColor={'#5e464d8c'} translucent={true} />
               </View>
               <View style={styles.back}>
                   <TouchableOpacity style={[styles.backbutton]}>
                     <Text style={{fontSize:20,color:'#5e464d',fontWeight:'bold'}}>←   배달메이트 구하기</Text>
                   </TouchableOpacity>
               </View>


               <View style={styles.content}>
                   <View style={styles.input}>
                       <Text>업체</Text>
                       <TextInput
                       style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
                       placeholder="주문하실 업체 이름을 입력하세요."
                       placeholderTextColor="grey"
                       onChangeText={this.handleStore}/>
                   </View>
                   <View style={styles.input}>
                       <Text>최소주문액</Text>
                       <TextInput
                       style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
                       placeholder="최소주문액을 입력하세요."
                       placeholderTextColor="grey"
                       onChangeText={this.handleMinOrder}/>
                   </View>
                   <View style={styles.input}>
                       <Text>배달비</Text>
                       <TextInput
                       style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
                       placeholder="배달비를 입력하세요."
                       placeholderTextColor="grey"
                       onChangeText={this.handleDelivery}/>
                   </View>
                   <View style={styles.input}>
                       <Text>링크</Text>
                       <TextInput
                       style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
                       placeholder="배달 어플의 링크를 입력하세요."
                       placeholderTextColor="grey"
                       onChangeText={this.handleLink}/>
                   </View>
                   <View style={styles.input}>
                       <Text>전달위치</Text>
                       <TextInput
                       style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
                       placeholder="전달 위치를 입력하세요."
                       placeholderTextColor="grey"
                       onChangeText={this.handleLocation}/>
                   </View>
                   <View style={styles.input}>
                       <Text>메뉴</Text>
                       <TextInput
                       style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
                       placeholder="방장이 선택한 메뉴 이름을 입력하세요."
                       placeholderTextColor="grey"
                       onChangeText={this.handleMasterMenu}/>
                   </View>
                   <View style={styles.input}>
                       <Text>입금액</Text>
                       <TextInput
                       style={{borderColor: '#aaa', width:'75%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}
                       placeholder="방장의 입금액을 입력하세요."
                       placeholderTextColor="grey"
                       onChangeText={this.handleMasterPay}/>
                   </View>
               </View>


               <View style={styles.button}>
               <CustomButton
                   title={'참여하기'}
                   onPress={() =>this.Posting(this.state.store, this.state.minOrder, this.state.Delivery, this.state.link, this.state.loc, this.state.MasterMenu, this.state.MasterPay)}/>
               </View>

           </View>

         );
    }
}

   export default Posting;

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

       content: {
           flex: 1,
           width: '80%',
           //margin: 15,
           //padding: 10,
           justifyContent: 'center',
          // backgroundColor: '#3289ef'
       },
       input:{
           paddingTop: 10,
           paddingBottom: 10,
           flexDirection:'row',
           justifyContent:'space-between',
           alignItems:'center',
           //backgroundColor: '#80ee8a',
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
