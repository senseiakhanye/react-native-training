import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexLayouts = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        // alignItems: 'center',
        // flexDirection: 'row',
        height: 500,
        // justifyContent: 'flex-end'

    },
    textOneStyle: {
        borderWidth: 2,
        borderColor: 'red',
        // padding: 20,
        // margin: 5
    },
    textTwoStyle: {
        borderWidth: 2,
        borderColor: 'red',
        // margin: 5,
        flex: 1,
        alignSelf: 'center'
    },
    textThreeStyle: {
        borderWidth: 2,
        borderColor: 'red',
        flex: 1
        // padding: 20,
        // margin: 5
    }
});

export default FlexLayouts;