import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    Alert
} from 'react-native';

const forgetPassword = () => {
    Alert.alert('请到前台办理手续');
}

export default class Login extends Component {
    constructor(props){
        super(props);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }
    usernameChange(text){
        this.setState({
            username: text
        })
    }
    passwordChange(text){
        this.setState({
            password: text
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={require('../images/hotelMaster.png')} style={styles.img} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={(text) => {this.usernameChange(text)}}
                        placeholder="请输入手机号"
                        maxLength={11}
                        keyboardType='numeric'
                        style={styles.inputStyle}
                     />
                    <TextInput
                        onChangeText={(text) => {this.passwordChange(text)}}
                        placeholder="请输入密码"
                        password={true}
                        style={styles.inputStyle}
                     />
                </View>
                <View style={styles.forgetPasswordContainer}>
                    <Button
                        onPress={forgetPassword}
                        title="忘记密码"
                    />
                </View>
                <View style={styles.loginBtnContainer}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>登录</Text>    
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imgContainer: {
        marginTop: 95,
        textAlign: 'center',
        height: 40
    },
    img: {
        flex: 1,
        width: 200
    },
    inputContainer: {
        width: '100%',
        marginTop: 41,
        padding: 0,
        paddingLeft: 30,
        paddingRight: 30
    },
    inputStyle: {
        height: 49,
        marginTop: 20,
        borderWidth: 0,
        borderBottomWidth: 0.7,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(0,0,0,.12)',
        fontSize: 18
    },
    forgetPasswordContainer: {
        width: '100%',
        marginTop: 15,
        marginLeft: 30,
        textAlign: 'left'
    },
    loginBtnContainer: {
        width: '100%',
        marginTop: 40,
        padding: 0,
        paddingLeft: 30,
        paddingRight: 30,
    },
    loginBtn: {
        height: 44,
        borderWidth: 0,
        borderRadius: 6,
        backgroundColor: '#25c0b1'
    },
    loginBtnText: {
        lineHeight: 44,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
})
