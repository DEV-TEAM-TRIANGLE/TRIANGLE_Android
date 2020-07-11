import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button,
    TouchableOpacity,
    Switch,
    } from 'react-native';
const {width, height} = Dimensions.get("window");

export default class Writing extends Component{
    state = {
        isEnabled: false,
        setIsEnabled: false
    }
    render(){    
        const {isEnabled, setIsEnabled} = this.state;
        return (
            <View style={style.container}>
                <View style={style.bar}>
                    <View>
                    </View>
                    <View style={style.actions}>
                        <View style = {{marginLeft : 270}}>
                            <Button onPress = {() => alert('작성중인 회고가 임시 저장되었습니다.')} title='저장' color='#1e22af' />
                        </View>
                        <View style = {{paddingRight : 15}}>
                            <Button onPress = {() => alert('회고 작성이 완료되었습니다.')} title='완료' color='#1e22af' />
                        </View>
                    </View>
                </View>
                <View style={style.motto}>
                    <Text style={style.mottoText}>사람의 마음을 울리는 컨텐츠 크리에이터가 되자 ✨ </Text>
                </View>
                <View style = {style.secret}>
                    <View>
                        <Text style ={style.secretText}>비밀글 설정</Text>
                    </View>
                    <View style = {{width : 47}}>
                        <Switch
                            style = {{marginLeft : 10, marginVertical : 3}}
                            trackColor={{ false: "#d3d3d3", true: "#1e22af" }}
                            thumbColor={isEnabled ? "white" : "white"}
                            ios_backgroundColor="#d3d3d3"
                            onValueChange={this._toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View> 
            </View>
        );
    }
    _toggleSwitch = () => {    // 비밀글 스위치 누르면 상태 변경하는 함수
        this.setState(prevState => {
            return{
                setIsEnabled: !prevState.setIsEnabled,
                isEnabled: !prevState.isEnabled
            }
        })
    };
}

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
    },
    motto: {
        height : 36,
        justifyContent: "center",
        backgroundColor : "white", //배경색 설정 안해주면 뷰 내부 텍스트에 그림자가 생기므로, 뷰 그림자를 만드려면 배경색을 지적해줘야한다.
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 0.08,
                shadowRadius: 3,
                shadowOffset: {
                    height: 4
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
    },
    secret: {
        height : 36, 
        flexDirection: 'row', 
        justifyContent : "center",
    },
    secretText: {
        fontSize : 12, 
        color : '#505050',
        paddingLeft : 237,
        paddingVertical : 11, //제플린과 다름
    }

})
