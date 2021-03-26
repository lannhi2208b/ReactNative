import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Platform, View, Text, TextInput, TouchableOpacity, Alert, Image, SafeAreaView, FlatList } from 'react-native';
import images from "../Themes/images";
import styles from "./styles";
export { styles, images };

import axios from 'axios';
export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: [],
        }
    }

    componentDidMount() {
        axios.get('http://192.168.92.2:8080/api/profile/edit/69')
        .then(response => {
            this.setState({ register: response.data });
        })
        .catch(error => console.log(error))
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

    saveProfile = () => {
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
        const { register } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <Text style={[styles.header, styles.textAlignCenter]}>Edit Profile</Text>
                        <View style={styles.boxAvatar}>
                            <Image source={images.avatar} resizeMode='stretch' style={styles.imgAvatar} />
                            <Image source={images.camera} resizeMode='stretch' style={styles.imgCamera} />
                        </View>
                        <View>
                            <Text style={styles.txtTittle}>First Name</Text>
                            <TextInput underlineColorAndroid="transparent"
                                style={styles.txtInputProfile} value={register.fname} 
                                onChangeText={(fname) => this.setState({fname:fname})}/>

                            <Text style={styles.txtTittle}>Last Name</Text>
                            <TextInput underlineColorAndroid="transparent"
                                style={styles.txtInputProfile} value={register.lname} 
                                onChangeText={(lname) => this.setState({lname:lname})}/>

                            <Text style={styles.txtTittle}>Email Address</Text>
                            <TextInput underlineColorAndroid="transparent"
                                style={styles.txtInputProfile} value={register.email}  
                                onChangeText={(email) => this.setState({email:email})}/>

                            <Text style={styles.txtTittle}>Phone Number</Text>
                            <TextInput underlineColorAndroid="transparent"
                                style={styles.txtInputProfile} value={register.phone} 
                                onChangeText={(phone) => this.setState({phone:phone})}/>

                            <Text style={styles.txtTittle}>Address</Text>
                            <TextInput underlineColorAndroid="transparent"
                                style={styles.txtInputProfile} value={register.address}  
                                onChangeText={(address) => this.setState({address:address})}/>

                            <TouchableOpacity onPress={this.saveProfile} style={styles.button}>
                                <Text style={styles.txtButton}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}