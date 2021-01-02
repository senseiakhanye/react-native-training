import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CustomImage = (props) => {
    return (
        <View style={styles.imageCentere}>
            <Image source={props.image} />
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageCentere: {
        alignItems: 'center',
        marginVertical: 15
    }
});

export default CustomImage;