import { Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from "./styles";
export { styles };

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            checkLogin: 0,
        }
    }
    
    _onSubmit = () => { 
        return fetch('http://192.168.92.101/user/login', {
            method: "POST",
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({checkLogin: responseJson.success});
            if(this.state.checkLogin > 0) {
                console.warn(responseJson);
                Alert.alert("Success!");
            }
            else {
                console.warn(responseJson);
                Alert.alert("Error!");
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }

    validate = () => {
        let messages = []
        let textMessages = ''
        if (!this.state.email.trim()) {
            messages.push('Please enter your email.')
        }
        else if(!this.state.password.trim()) {
            messages.push('Please enter your password.')
        }
        messages.forEach((msg, index) => {
            if (index + 1 == messages.length) {
                textMessages += msg
            }
        })
        return textMessages
    }

    login = () => {
        let validation = this.validate();
        if(!validation) {
            Alert.alert(
                "Successful!",
                "Welcome to React Native!",
                [
                    { 
                        text: "Ok",
                        onPress: () => console.log("Ok Pressed"),
                    },
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    }
                ],
                { cancelable: false }
            );
        } 
        else {
            Alert.alert(
               "Error!", 
                validation,
                [
                    { 
                        text: "Ok",
                        onPress: () => console.log("Ok Pressed"),
                    },
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    }
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.header, styles.textAlignCenter]}>Login</Text>
                    <View style={[styles.boxMainLogin, styles.boxWithShadow, styles.borderBox]}>
                        <TextInput placeholder="Email" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(email) => this.setState({email:email})}/>

                        <TextInput placeholder="Password"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            secureTextEntry={true}
                            style={styles.txtInput} onChangeText={(password) => this.setState({password:password})}/>

                        <Text 
                            onPress={() => this.props.navigation.navigate('Forgot Password')} 
                            style={[styles.textSmall, styles.textColorBlue, styles.textAlignRight]}>Forgot Password?</Text>

                        <TouchableOpacity onPress={this.login} style={styles.button}>
                            <Text style={styles.txtButton}>LOGIN</Text>
                        </TouchableOpacity>

                        <Text style={[styles.textSmall, styles.textAlignCenter]}>Don't have account? 
                            <Text 
                                onPress={() => this.props.navigation.navigate('Register')} 
                                style={styles.textColorBlue}> Create a new account</Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}