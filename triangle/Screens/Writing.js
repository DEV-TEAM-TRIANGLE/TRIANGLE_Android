import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button
    } from 'react-native';

const {width, height} = Dimensions.get("window");

class Writing extends Component{
    render(){
        return (
            <View style={style.container}>
                <View style={style.bar}>
                    <View>
                    </View>
                    <View style={style.actions}>
                        <View >
                            <Button onPress = {() => alert('작성중인 회고가 임시 저장되었습니다.')} title='저장' color='#1e22af'/>
                        </View>
                        <View>
                            <Button onPress = {() => alert('회고 작성이 완료되었습니다.')} title='완료' color='#1e22af' />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default Writing;

const style = StyleSheet.create({
    container: {
        flex: 1, //flex item이 빈 공간을 채우도록 한다.
        backgroundColor: 'white',

    },
    bar: {
        backgroundColor: 'white',
        marginTop : 24,
    },
    actions: {
        flexDirection : 'row',
        justifyContent: "flex-end"
    }

})
