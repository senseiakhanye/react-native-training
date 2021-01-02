import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CounterData from '../../Context/context';

const Counter = () => {
    const countInfo = useContext(CounterData);
    const [ counter, updateCounter ] = useState(countInfo.counterNum);

    const onPressedBtn = (increase) => {
        updateCounter(oldCounter => {
            const counterVal = (increase) ? oldCounter + 1: oldCounter - 1;
            countInfo.counterNum = counterVal;
            return counterVal;
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
    );
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

