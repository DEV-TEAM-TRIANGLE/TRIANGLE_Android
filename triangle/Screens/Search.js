import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
 
class Search extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>Here is Search!</Text>
            </View>
        );
    }
}
export default Search;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
