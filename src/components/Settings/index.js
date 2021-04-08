import { Icon } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import React, { Component } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Select2 from 'react-native-select-two';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
export { styles };

const animateIn = () => {
    Animated.timing(animatePress, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true,
    }).start();
}

const language = [
    { id: 1, name: 'Vietnamese', checked: true },
    { id: 2, name: 'English' },
    { id: 4, name: 'Russian' },
    { id: 3, name: 'French' },
    { id: 5, name: 'Philippines' },
];
export default class SettingsPage extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            isOn: true,
            isLoading: false,
            token: '',
            notification: '',
            facebook: '',
            instagram: '',
            register: '',
            countries: [],
        }
    }

    componentDidMount() {
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }

        AsyncStorage.getItem('ReactNativeStore:token')
        .then(token => {
            headers = {...headers, ...{ Authorization: `Bearer ${token}`}}
            axios.get('http://192.168.92.2:8080/api/setting', { headers: headers })
            .then(res => {
                this.setState({ 
                    register: res.data.register,
                    countries: res.data.countries,
                    notification: res.data.register.notification,
                    facebook: res.data.register.facebook,
                    instagram: res.data.register.instagram,
                });
            })
            .catch(error => console.log(error))

            // Save token to State
            this.setState({ token: token });
        })
    }
    
    // toggleHandle = () => {
    //     this.setState({ isOn: !this.state.isOn });
    // }

    toggleHandle = (value, key) => {
        let result = (value == 0) ? 1 : 0;
        if(key == 'notification')
            this.setState({ notification: result });
        else if(key == 'facebook')
            this.setState({ facebook: result });
        else
            this.setState({ instagram: result });
    }

    changeFormData = (item) => {
        let formData = this.state.formData;
        this.setState({ formData: { ...formData, ...item } });
    }

    saveSetting = () => {
        let token = this.state.token;
        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }

        const formData = {
            notification: this.state.notification,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
        };

        if(token) {
            this.setState({ isLoading: true })
            headers = {...headers, ...{ Authorization: `Bearer ${token}`}}
            this.setState({ isLoading: true })
            axios.post('http://192.168.92.2:8080/api/setting/update', formData, { 
                headers: headers 
            })
            .then(res => {
                this.setState({ isLoading: false })
                Alert.alert(
                    "Error!", 
                    res.data.msg,
                    [{ 
                        text: "Ok",
                        onPress: () => console.log("Ok Pressed"),
                    }], 
                    { cancelable: false }
                );
            })
            .catch(error => {
                console.log(error)
                this.setState({ isLoading: false })
            })
        } 
        else {
            Alert.alert(
               "Error!", 
                "Sorry! Cannot update something is wrong.",
                [{ 
                    text: "Ok",
                    onPress: () => console.log("Ok Pressed"),
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                }],
                { cancelable: false }
            );
        }
    }

    render() {
        const { isLoading, countries, notification, facebook, instagram } = this.state;

        return (
            <View style={styles.mainContainer} >
                <Spinner visible={isLoading} />
                <View style={styles.boxMainSetting}>
                    <Text style={styles.txtOption}> Option </Text>
                    <View style={styles.boxItem}>
                        <View style={styles.boxTextLeft}>
                            <Icon reverseColor name='bell' 
                                type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <Text style={styles.boxTitle}>Notification</Text>
                        </View>
                        <View style={styles.boxTextRight}>
                            <TouchableOpacity 
                                activeOpacity={0.5} 
                                onPress={() => this.toggleHandle(notification, 'notification')}
                                style={[
                                    styles.buttonCheckbox,
                                    (notification == 1) ? styles.btnColorGreen : styles.btnColorGray,
                                ]}>
                                <View style={[
                                    styles.viewCheckbox,
                                    {transform: [{
                                        translateX: (notification == 1) ? 27 : 0,
                                    }]}
                                ]}>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.boxMainSetting}>
                    <Text style={styles.txtOption}> Account </Text>
                    <View style={styles.boxItem}>
                        <View style={styles.boxTextLeft}>
                            <Icon reverseColor name='user' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <Text style={styles.boxTitle}>Personal Information</Text>
                        </View>
                        <View style={styles.boxTextRight}>
                            <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                        </View>
                    </View>
                    <View style={styles.boxItem}>
                        <View style={styles.boxTextLeft}>
                            <Icon reverseColor name='flag' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <Text style={styles.boxTitle}>Country</Text>
                        </View>
                        <View style={styles.boxTextRight}>
                            <Select2
                                isSelectSingle
                                style={styles.boxSelect2}
                                selectedTitleStyle={{ textAlign: "right" }}
                                colorTheme={'#4ca5b3'}
                                popupTitle='Select Country'
                                title='Select Country'
                                showSearchBox={true}
                                searchPlaceHolderText='Enter Keywords..'
                                listEmptyTitle='Can Not Find a Suitable Option'
                                selectButtonText='Choose'
                                cancelButtonText='Cancel'
                                data={countries}
                                onSelect={data => {
                                    this.setState({ data });
                                }}
                                onRemoveItem={data => {
                                    this.setState({ data });
                                }} 
                            />
                            <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                        </View>
                    </View>
                    <View style={styles.boxItem}>
                        <View style={styles.boxTextLeft}>
                            <Icon reverseColor name='globe' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <Text style={styles.boxTitle}>Language</Text>
                        </View>
                        <View style={styles.boxTextRight}>
                            <Select2
                                isSelectSingle
                                style={styles.boxSelect2}
                                selectedTitleStyle={{ textAlign: "right" }}
                                colorTheme={'#4ca5b3'}
                                popupTitle='Select Language'
                                title='Select Language'
                                showSearchBox={true}
                                searchPlaceHolderText='Enter Keywords..'
                                listEmptyTitle='Can Not Find a Suitable Option'
                                selectButtonText='Choose'
                                cancelButtonText='Cancel'
                                data={language}
                                onSelect={data => {
                                    this.setState({ data });
                                }}
                                onRemoveItem={data => {
                                    this.setState({ data });
                                }} 
                            />
                            <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                        </View>
                    </View>
                </View>
                <View style={styles.boxMainSetting}>
                    <Text style={styles.txtOption}> Social </Text>
                    <View style={styles.boxItem}>
                        <View style={styles.boxTextLeft}>
                            <Icon reverseColor name='facebook' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <Text style={styles.boxTitle}>FaceBook</Text>
                        </View>
                        <View style={styles.boxTextRight}>
                            <TouchableOpacity 
                                activeOpacity={0.5} 
                                onPress={() => this.toggleHandle(facebook, 'facebook')}
                                style={[
                                    styles.buttonCheckbox,
                                    (facebook == 1) ? styles.btnColorGreen : styles.btnColorGray,
                                ]}>
                                <View style={[
                                    styles.viewCheckbox,
                                    {transform: [{
                                        translateX: (facebook == 1) ? 27 : 0,
                                    }]}
                                ]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxItem}>
                        <View style={styles.boxTextLeft}>
                            <Icon reverseColor name='instagram' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <Text style={styles.boxTitle}>Instagram</Text>
                        </View>
                        <View style={styles.boxTextRight}>
                            <TouchableOpacity 
                                activeOpacity={0.5} 
                                onPress={() => this.toggleHandle(instagram, 'instagram')}
                                style={[
                                    styles.buttonCheckbox,
                                    (instagram == 1) ? styles.btnColorGreen : styles.btnColorGray,
                                ]}>
                                <View style={[
                                    styles.viewCheckbox,
                                    {transform: [{
                                        translateX: (instagram == 1) ? 27 : 0,
                                    }]}
                                ]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this.saveSetting} style={styles.button}>
                    <Text style={styles.txtButton}>SAVE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}