import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const SaveButton = ({ handleSave }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button: {
        width: '20%',
        height: 40,
        marginTop: 20,
        marginHorizontal: '40%',
        backgroundColor: '#000',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default SaveButton;
