import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
 
class Writing extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>Here is Writing!</Text>
            </View>
        );
    }
}
export default Writing;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
