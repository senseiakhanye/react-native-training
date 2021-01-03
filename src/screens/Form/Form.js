import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormContact = () => {
    const [ txt, updateText ] = useState("");

    return (
        <View>
            <Text>Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => updateText(text)}
                value={txt} />
            <Text>You entered:</Text>
            <Text>{txt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default FormContact;