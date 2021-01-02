import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = () => {
    const [ counter, updateCounter ] = useState(0);

    const onPressedBtn = (increase) => {
        // counter = (increase) ? counter + 1 : counter - 1;
        updateCounter(oldCounter => {
            return (increase) ? oldCounter + 1 : oldCounter - 1;
        })
    }

    return (
        <View>
            <TouchableOpacity onPress={() => onPressedBtn(true)}>
                <Text style={styles.textButton}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressedBtn(false)}>
                <Text style={styles.textButton}>Decrease</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>Current Count:</Text>
            <Text style={styles.counterText}>{counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textButton: {
        textAlign: 'center',
        marginVertical: 15,
        backgroundColor: 'blue',
        color: 'white',
        marginHorizontal: 20,
        padding: 20
    },
    counterText: {
        textAlign: 'center'
    }
})

export default Counter;

