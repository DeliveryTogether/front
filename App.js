import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import rootReducer from './src/reducers';
import {createStore} from 'redux';

import MappingTab from './pages/MappingTab';
import FindingPost from './pages/FindingPost';
import PostingTab from './pages/PostingTab';
import DeliveryPosting from './pages/DeliveryPosting';
import ListTab from './pages/ListTab'; 
import DetailPost from './pages/DetailPost';
import MyPageTab from './pages/MyPageTab';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


//Redux store 선언
const store = createStore(rootReducer)

//MappingTab Stack Navigation 
const MappingTabStack = createStackNavigator(
  {
    MappingTab : {
      screen : MappingTab,
      navigationOptions: {
        headerTitle : false,
        headerStyle : {
          headerTitleStyle : {display : 'none'},
        },
      },
    },
    FindingPost : {
      screen : FindingPost,
      navigationOptions : ({navigation}) => ({
        headerLeft: () => (
          <HeaderBackButton
            onPress={async () => {
              navigation.goBack();
            }}
          />
        ),
        headerStyle: {
          //backgroundColor : 
          //headerTintColor :
          //headerTitleStyle: { display: 'none' },
        },
      }),
    },
  },
  {
    initialRouteName : 'MappingTab',
  },
);

//PostingTab Stack Navigation 
const PostingTab = createStackNavigator(
  {
    PostingTab : {
      screen: PostingTab,
      navigationOptions : {
        headerTitle : false,
        headerStyle : {
          headerTitleStyle : {display : 'none'},
        },
      },
    },
    DeliveryPosting : {
      screen : DeliveryPosting,
      navigationOptions : ({navigation}) => ({
        headerLeft: () => (
          <HeaderBackButton
            onPress={async () => {
              navigation.goBack();
            }}
          />
        ),
        headerStyle: {
          //backgroundColor : 
          //headerTintColor :
          //headerTitleStyle: { display: 'none' },
        },
      }),
    },
  },{
    initialRouteName : 'PostingTab',
  },
);

//ListTab Stack Navigation 
const ListTab = createStackNavigator(
  {
    ListTab : {
      screen: ListTab,
      navigationOptions : {
        headerTitle : false,
        headerStyle : {
          headerTitleStyle : {display : 'none'},
        },
      },
    },
    DetailPost : {
      screen : DetailPost,
      navigationOptions : ({navigation}) => ({
        headerLeft: () => (
          <HeaderBackButton
            onPress={async () => {
              navigation.goBack();
            }}
          />
        ),
        headerStyle: {
          //backgroundColor : 
          //headerTintColor :
          //headerTitleStyle: { display: 'none' },
        },
      }),
    },
  },{
    initialRouteName : 'ListTab',
  },
);

//MyPageTab Stack Navigation 
const MyPageTab = createStackNavigator(
  {
    MyPageTab : {
      screen: MyPageTab,
      navigationOptions : {
        headerTitle : false,
        headerStyle : {
          headerTitleStyle : {display : 'none'},
        },
      },
    },
    ChangeNickname : {
      screen : ChangeNickname,
      navigationOptions : ({navigation}) => ({
        headerLeft: () => (
          <HeaderBackButton
            onPress={async () => {
              navigation.goBack();
            }}
          />
        ),
        headerStyle: {
          //backgroundColor : 
          //headerTintColor :
          //headerTitleStyle: { display: 'none' },
        },
      }),
    },
  },{
    initialRouteName : 'MyPageTab',
  },
);

//AuthStack 
const AuthStack = createStackNavigator(
  {
    Login :{
      screen : Login,
      navigationOptions: () => ({
        headerShown : false,
      })
    },
    SignUp:{
      screen : SignUp, 
    }
  },
  {
    initialRouteName: Login,
    defaultNavigationOptions: {
      headerTitle: false,
    },
  },
)


//Main Tab 
const MainTab = createBottomTabNavigator();

<NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          //하단 탭 네이케이터 지원 옵션 
          //screen component에서 options prop을 사용하는 것으로 대처 가능 
          tabBarIcon: ({focused,color,size})=>{
            let iconName;

            if(route.name === 'Mapping'){
              iconName = 'search'; 
            } else if(route.name ==='Posting'){
              iconName = 'pencil';
            } else if(route.name ==='List'){
              iconName = 'th-list';
            } else if(route.name ==='Settings'){
              iconName = 'user';
            } 

            return <FontAwesome name ={iconName} size ={size} color={color}/>;
          },
        })}
        
        tabBarOptions={{
          style : {
            height : 70,
            backgroundColor:'#5F454E',
          },
          activeTintColor: '#E5A663',
          inactiveTintColor:'white',
          showLabel : false,
        }}
        >
        <Tab.Screen name="Mapping" component={MappingScreen} />
        <Tab.Screen name="Posting" component={PostingScreen} />
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

/*
const MainTabs = createBottomTabNavigator(
  {
    MappingStack,
    AddPost,
    List,
    MyPageStack,
  },
  {
    initialRouteName : 'MappingStack',
    defaultNavigationOptions: {
      /*
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        if (navigation.state.key === 'AddCatTab') {
          navigation.navigate('AddCatModal');
        } else {
          defaultHandler();
        }
      },
    }
  }
)
*/

//시작 Navigator
const RootNavigator = createSwitchNavigator(
  {
    //AuthLoadingScreen에서 토큰 있는지 확인 후 없다면 Auth 있다면 Main 
    AuthLoading: AuthLoadingScreen,
    Auth : AuthStack,
    Main : MainTab,
  },
  { initialRouteName: 'AuthLoading'},
)


const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component{
  render() {
    return (
      <Provider store = {store}>
        <AppContainer/>
      </Provider>
    );
  }
}
