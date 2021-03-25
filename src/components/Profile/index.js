import React, { Component } from 'react';
import { Button, Icon, Right, Left } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Platform, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import images from "../Themes/images";
import styles from "./styles";
export { styles, images };

export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View>
                    <Text style={[styles.header, styles.textAlignCenter]}>My Profile</Text>
                    <View style={[styles.boxProfileHeader, styles.borderBox]}>
                        <View style={styles.boxLeft}>
                            <Image source={images.avatar} resizeMode='stretch' style={styles.imgAvatar} />
                        </View>
                        <View style={[styles.boxRight]}>
                            <Text style={styles.txtProfileName}>Ktla Lan Nhi</Text>
                            <Text style={styles.txtProfileGray}>
                                +84 336153031
                            </Text>
                            <Text style={styles.txtProfileGray}>
                                Lannhi2208b@gmail.com
                            </Text>
                            <Text style={styles.txtProfileGray}>
                                Hai Ba Trung, Ha noi
                            </Text>
                        </View>
                    </View>
                    <View style={styles.boxProfileContent}>
                        <View style={[styles.txtProfileList, styles.borderBottom]}>
                            <Icon reverseColor name='user-edit' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <TouchableOpacity 
                                style={styles.boxRightButton}
                                onPress={() => this.props.navigation.navigate('EditProfile')}>
                                <Text style={styles.textIcon}>Edit Profile</Text>
                                <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.txtProfileList, styles.borderBottom]}>
                            <Icon reverseColor name='star' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <TouchableOpacity 
                                style={styles.boxRightButton}>
                                <Text style={styles.textIcon}>Rate Us</Text>
                                <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.txtProfileList, styles.borderBottom]}>
                            <Icon reverseColor name='cog' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <TouchableOpacity 
                                style={styles.boxRightButton}
                                onPress={() => this.props.navigation.navigate('Settings')}>
                                <Text style={styles.textIcon}>Settings</Text>
                                <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.txtProfileList, styles.borderBottom]}>
                            <Icon reverseColor name='sign-out-alt' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <TouchableOpacity 
                                style={styles.boxRightButton}>
                                <Text style={styles.textIcon}>Sign Out</Text>
                                <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}