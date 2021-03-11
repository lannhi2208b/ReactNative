import { Button } from 'native-base';
import React, { Component } from 'react';
import { 
    Platform, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet
} from 'react-native';

import styles from "../Login/styles";
export { styles };

import { postRequest, showApiErrors } from '../Services/ApiWrapper'

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
        if (!this.state.fname.trim()) {
            messages.push('Please enter your first name.')
        }
        else if(!this.state.lname.trim()) {
            messages.push('Please enter your last name.')
        }
        else if(!this.state.email.trim()) {
            messages.push('Please enter your email.')
        }
        else if(!this.state.phone.trim()) {
            messages.push('Please enter your phone.')
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

    register = () => {
        let validation = this.validate();
        if(!validation) {
            postRequest('register', this.state.formData).then(res => {
                this.props.navigation.navigate('Profile');
            }).catch(error => {
                showApiErrors(error);
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

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.header, styles.textAlignCenter]}>Register</Text>
                    <View style={[styles.boxMainRegister, styles.boxWithShadow, styles.borderBox]}>
                        <TextInput placeholder="First Name *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(fname) => this.setState({fname: fname})}/>

                        <TextInput placeholder="Last Name *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(lname) => this.setState({lname: lname})}/>
                        
                        <TextInput placeholder="Email Address *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(email) => this.setState({email: email})}/>

                        <TextInput placeholder="Phone Number *" 
                            placeholderTextColor="gray" 
                            underlineColorAndroid="transparent"
                            style={styles.txtInput} onChangeText={(phone) => this.setState({phone: phone})}/>

                        <TextInput placeholder="Password *"
                            underlineColorAndroid="transparent"
                            placeholderTextColor="gray"
                            secureTextEntry={true}
                            style={styles.txtInput} onChangeText={(password) => this.setState({password: password})}/>

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