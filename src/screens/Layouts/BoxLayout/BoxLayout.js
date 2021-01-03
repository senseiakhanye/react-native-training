import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxLayout = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black"
    },
    textStyle: {
        borderWidth: 5,
        borderColor: 'red',
        margin: 20,
        padding: 20,
    }
});

export default BoxLayout;

