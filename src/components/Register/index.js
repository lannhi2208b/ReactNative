import { Button } from 'native-base';
import React, { Component } from 'react';
import { 
    View, Text, TextInput, TouchableOpacity, Alert
} from 'react-native';

import styles from "../Login/styles";
export { styles };

import AppConfig from '../Config/AppConfig';
import axios from 'axios';
// axios.defaults.baseURL = AppConfig.apiEndPoint;

import ForgotPassword from '../Login/forgot';
import Login from '../Login/login';
export { Login, ForgotPassword };

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                fname: "",
                lname: "",
                email: "",
                phone: "",
                password: "",
            }
        }
    }
    
    validate = () => {
        let messages = []
        let textMessages = ''
        if (!this.state.formData.fname.trim()) {
            messages.push('Please enter your first name.')
        }
        else if(!this.state.formData.lname.trim()) {
            messages.push('Please enter your last name.')
        }
        else if(!this.state.formData.email.trim()) {
            messages.push('Please enter your email.')
        }
        else if(!this.state.formData.phone.trim()) {
            messages.push('Please enter your phone.')
        }
        else if(!this.state.formData.password.trim()) {
            messages.push('Please enter your password.')
        }
        messages.forEach((msg, index) => {
            if (index + 1 == messages.length) {
                textMessages += msg
            }
        })
        return textMessages
    }

    register = () => {
        let validation = this.validate();
        if(!validation) {
            const formData = this.state.formData;

            axios.post('/register', { formData }).then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            })
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

    changeFormData = (value) => {
        let formData = this.state.formData;
        this.setState({ formData: { ...formData, ...value } });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.header, styles.textAlignCenter]}>Register</Text>
                    <View style={[styles.boxMainRegister, styles.boxWithShadow, styles.borderBox]}>
                        <TextInput placeholder="First Name *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(fname) => this.changeFormData({fname})}/>

                        <TextInput placeholder="Last Name *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(lname) => this.changeFormData({lname})}/>
                        
                        <TextInput placeholder="Email Address *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(email) => this.changeFormData({email})}/>

                        <TextInput placeholder="Phone Number *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(phone) => this.changeFormData({phone})}/>

                        <TextInput placeholder="Password *"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            secureTextEntry={true}
                            style={styles.txtInput} onChangeText={(password) => this.changeFormData({password})}/>

                        <Text 
                            onPress={() => this.props.navigation.navigate('Forgot Password')} 
                            style={[styles.textSmall, styles.textColorBlue, styles.textAlignRight]}>Forgot Password?</Text>

                        <TouchableOpacity onPress={this.register} style={styles.button}>
                            <Text style={styles.txtButton}>REGISTER</Text>
                        </TouchableOpacity>

                        <Text style={[styles.textSmall, styles.textAlignCenter]}>Already have an account? 
                            <Text 
                                onPress={() => this.props.navigation.navigate('Login')} 
                                style={styles.textColorBlue}> Login</Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

// Alert.alert(
//     "Successful!",
//     "Welcome to React Native!",
//     [
//         { 
//             text: "Ok",
//             onPress: () => console.log("Ok Pressed"),
//         },
//         {
//             text: "Cancel",
//             onPress: () => console.log("Cancel Pressed"),
//             style: "cancel",
//         }
//     ],
//     { cancelable: false }
// );