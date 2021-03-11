import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
export { styles };

export default class SettingsPage extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            isOn1: true,
            isOn2: false,
            isOn3: true,
        }
    }
    
    toggleHandle1 = () => {
        this.setState({ isOn1: !this.state.isOn1 });
    }
    toggleHandle2 = () => {
        this.setState({ isOn2: !this.state.isOn2 });
    }
    toggleHandle3 = () => {
        this.setState({ isOn3: !this.state.isOn3 });
    }

    render() {
        const { isOn1 } = this.state;
        const { isOn2 } = this.state;
        const { isOn3 } = this.state;

        return (
            <View style={styles.mainContainer} >
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
                                onPress={this.toggleHandle1}
                                style={[
                                    styles.buttonCheckbox,
                                    isOn1 ? styles.btnColorGreen : styles.btnColorGray,
                                ]}>
                                <View style={[
                                    styles.viewCheckbox,
                                    {transform: [{
                                        translateX: isOn1 ? 27 : 0,
                                    }]}
                                ]} />
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
                            <Text>VietNam</Text>
                            <Icon reverseColor name='chevron-right' type='FontAwesome5' style={styles.rightIcon}/>
                        </View>
                    </View>
                    <View style={styles.boxItem}>
                        <View style={styles.boxTextLeft}>
                            <Icon reverseColor name='globe' type='FontAwesome5' style={styles.boxLeftIcon}/>
                            <Text style={styles.boxTitle}>Language</Text>
                        </View>
                        <View style={styles.boxTextRight}>
                            <Text>Vietnamese</Text>
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
                                onPress={this.toggleHandle2}
                                style={[
                                    styles.buttonCheckbox,
                                    isOn2 ? styles.btnColorGreen : styles.btnColorGray,
                                ]}>
                                <View style={[
                                    styles.viewCheckbox,
                                    {transform: [{
                                        translateX: isOn2 ? 27 : 0,
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
                                onPress={this.toggleHandle3}
                                style={[
                                    styles.buttonCheckbox,
                                    isOn3 ? styles.btnColorGreen : styles.btnColorGray,
                                ]}>
                                <View style={[
                                    styles.viewCheckbox,
                                    {transform: [{
                                        translateX: isOn3 ? 27 : 0,
                                    }]}
                                ]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}