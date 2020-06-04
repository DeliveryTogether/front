import React from 'react'
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native'

import { TouchableHighlight } from "react-native-gesture-handler";



class MarkerInfo extends Component {
    render(){
        return(
            <View>
                <Text>{this.props.name}</Text>
                <Text></Text>
                <TouchableHighlight onPress={}></TouchableHighlight>
            </View>
        )
    }
}

export default MarkerInfo;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderRadius : 20, // 위에만 둥글게 설정하기 
    },

})