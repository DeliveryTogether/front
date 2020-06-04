import React from react 
import {StyleSheet, View} from react-native

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : white
    },
})

const Container = ({children}) =>(
    <View style = {Styles.container}>
        {children}
    </View>
)

export default Container