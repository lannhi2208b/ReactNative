import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import images from "../Themes/images";
import styles from "./style";
export { styles, images };

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    render() {
        const { isActive } = this.state;

        return (
            <View style={styles.container}>
                <Text style={[
                    styles.header,
                    isActive ? styles.colorRed : styles.colorGreen,
                ]}>Home</Text>
                <Text style={styles.textAlignTitle}>Hello React Native!!</Text>
                <View>
                    <Image source={images.banner} resizeMode='stretch' style={styles.backgroundImage} />
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Profile')} 
                        style={styles.buttonProfile}>
                        <Text style={styles.textButton}>MY PROFILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Login')} 
                        style={styles.buttonSignIn}>
                        <Text style={styles.textButton}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={[styles.textSmall, styles.textAlignCenter]}>Don't have account? 
                        <Text 
                            onPress={() => this.props.navigation.navigate('Register')} 
                            style={styles.textColorBlue}> Create a new account
                        </Text>
                    </Text>
                </View> 
            </View>
        );
    }
}
