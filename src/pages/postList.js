import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight, ActivityIndicator, FlatList, Modal, Picker} from 'react-native'
import _ from lodash 
import Container from './Container'
import {fetchPostList} from './store/actions/index'

export default class Post extends Component {
    /*
    //tab 헤더의 제목과 스타일 지정 
    static navigationOptions = {
        headerTitle: 'Post',
        headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#ffe81f',
            backgroundColor: 'black'
         },
        pressColorAndroid: 'white', //버튼을 눌렀을때 material ripple 애니메이션 적용되도록 color 지정 
        headerTintColor: '#ffe81f'
    }
    */
   state = {
       data:[]
   }

   componentDidMount(){
       fetch('url/post/u_id')
        .then(res=>res.json())
        .then(json=> this.setState({data:json.results}))
        .catch((err) => console.log('err:', err))
   }

   renderItem = ({item}) =>{
       return(
           <View>
               <TouchableHighlight onPress={()=>this.DetailPost(item.post)}>
                    <Text>{item.name}</Text>
                    <Text>{item.번호}</Text>
                    <Text>{item.금액}</Text>
               </TouchableHighlight>
           </View>
       )
   }

   render(){
       let {data} = this.state
       return (
           <Container>
               <FlatList
                    data = {data}
                    keyExtractor = {(item) => item.name}
                    renderItem = {this.renderItem}
               />
           </Container>
       )
   }
}


const style =  StyleSheet.create({

})