import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import createIcon from '../assets/icon-create.png';

const CreateButton = ({navigation}) => {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('CreateTask')}
        >
            <Image source={createIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    )

};

export default CreateButton;

