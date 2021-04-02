import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Select2 from 'react-native-select-two';

import styles from './styles';
export { styles };

const Language = [
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
                            <Select2
                                isSelectSingle
                                style={styles.boxSelect2}
                                selectedTitleStyle={{ textAlign: "right" }}
                                colorTheme={'#4ca5b3'}
                                popupTitle='Select Language'
                                title='Select Language'
                                showSearchBox={false}
                                searchPlaceHolderText='Enter Keywords..'
                                listEmptyTitle='Can Not Find a Suitable Option'
                                selectButtonText='Choose'
                                cancelButtonText='Cancel'
                                data={Language}
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