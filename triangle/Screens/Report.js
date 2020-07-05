import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
 
class Report extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>Here is Report!</Text>
            </View>
        );
    }
}
export default Report;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
