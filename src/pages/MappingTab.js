import React, { Component } from 'react';
import { ImageBackground,TouchableHighlight, Modal,View, Text, StyleSheet,TextInput,TouchableOpacity,Dimensions} from 'react-native';
import {Container, Header, Left, Right, Body} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {connect} from 'react-redux';
import {FETCH_MARKER} from './store/actions/index';


const initialState = {
    name : '',
    money : ''
}

class MappingTab extends Component {
    state = initialState;

    FETCH_MARKER = () =>{
        this.props.dispatchLoadMarker(this.state)
        this.setState(initialState)
    }
    //마커 클릭시 modalFilter 
    onMarkerPressed = (location) => {

    } 
    render(){
        const {markers} = this.props;

        return(
            <View style={styles.container}>
                <Header style={styles.header}>
                        <Left></Left>
                        <Body><Text>경기도 용인시 수지구 죽전로 144번길 13</Text></Body>
                        <Right></Right>
                </Header>
                    <Container>
                        <MapView style={styles.mapStyle}
                            initialRegion={{
                            latitude: 37.320917,
                            longitude: 127.125908,
                            latitudeDelta: 0.0055,
                            longitudeDelta: 0.0055,
                            }}>
                         {
                             markers.map((marker)=>(
                                <Marker
                                    coordinate={{latitude: `${marker.latitude}`, longitude: `${marker.longitude}` }
                                    onPress = {() => {this.toggleModal(true)} }
                                />
                             ))
                         }
                         
                         
                        </MapView>
                        
                    </Container>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    },
    header: {
        backgroundColor: '#496FC2',
    },
    text2:{
        color:'#FFFFFF',
        fontSize:20,
    },
    content:{
        paddingTop: 480,
        justifyContent: 'center',
        flexDirection: 'row',

    },
    search:{
        paddingLeft:10,
        paddingTop:10,
        width:"100%",
        alignContent:"center",
        flexDirection: 'row',
    },
    button:{
        padding:40,
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   },
   bgImage: {display:"flex",width: '100%', height: '100%'},

});

//mapDiapatchToProps 객체 생성
//리듀서에게 전달하게 될 액션을 컴포넌트의 props에 매핑 
//리덕스 리듀서에서 액션을 인식하려면 에액션을 mapDispatchToProps 객체에 선언해야함
const mapDispatchToProps = {
    dispatchLoadMarker : (marker) => FETCH_MARKER(maker)
}
//mapStateToProps : 리덕스의 전역 상태(state)를 두 번째 인수인 컴포넌트 속성props에 매핑  
//리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환. 
// 이 키는 books 배열을 포함하고 있다. 
const mapStateToProps = (state) =>({
    markers: state.MakerReduver.makers;
})