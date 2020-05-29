import React, {useState} from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View, ScrollView, TextInput, Image, StatusBar, Linking} from 'react-native';
import Participation from './Participation';
import Payment from './Payment';
import Posting from './Posting';
import EndRecruit from './EndRecruit';
import ArrivalNotification from './ArrivalNotification';

export default class extends React.Component {

    render(){
        return <ArrivalNotification />;
    }
}
