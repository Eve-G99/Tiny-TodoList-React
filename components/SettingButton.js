import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import settingsIcon from '../assets/icon-settings.png';

const SettingButton = ({navigation}) => {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Settings')}
        >
            <Image source={settingsIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    )

};

export default SettingButton;

