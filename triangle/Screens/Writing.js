import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button,
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
                        <View>
                            <Button onPress = {() => alert('작성중인 회고가 임시 저장되었습니다.')} title='저장' color='#1e22af' />
                        </View>
                        <View>
                            <Button onPress = {() => alert('회고 작성이 완료되었습니다.')} title='완료' color='#1e22af' />
                        </View>
                    </View>
                </View>
                <View style={style.motto}>
                    <Text style={style.mottoText}>사람의 마음을 울리는 컨텐츠 크리에이터가 되자 ✨ </Text>
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
        marginTop : 24,
        height : 35,
    },
    actions: {
        flexDirection : 'row',
        justifyContent: "flex-end",
    },
    motto: {
        height : 36,
        justifyContent: "center",
        backgroundColor : "white", //배경색 설정 안해주면 뷰 내부 텍스트에 그림자가 생기므로, 뷰 그림자를 만드려면 배경색을 지적해줘야한다.
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 0.08,
                shadowRadius: 5,
                shadowOffset: {
                    height: 6
                }
            },
            android: {
                elevation: 5,
            }
        })
    },
    mottoText: {
        paddingLeft : 15,
        fontSize : 14,
        fontWeight : 'bold',
    }

})
