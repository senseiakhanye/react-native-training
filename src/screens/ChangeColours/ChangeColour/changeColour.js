import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonStyle from '../../../UI/Buttons/Buttons';

const ChangeColour = ({colour, update, val}) => {
    const pressed = (up) => {
        update(oldRgb => {
            const updatedRgb = { ...oldRgb };
            if ((oldRgb[colour.toLowerCase()] < 255 && up) || (oldRgb[colour.toLowerCase()] > 0 && !up)) {
                updatedRgb[colour.toLowerCase()] = (up) ? oldRgb[colour.toLowerCase()] + 5 : oldRgb[colour.toLowerCase()] - 5;
            }
            return updatedRgb;
        })
    }

    return (
        <View style={styles.row}>
            <Text style={styles.colourname}>{colour} : ({val})</Text>
            <TouchableOpacity 
                style={styles.buttons}
                onPress={() => pressed(true)}>
                <Text style={ButtonStyle.textButton}>Inc</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttons}
                onPress={() => pressed(false)}>
                <Text style={ButtonStyle.textButton}>Dec</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',        
        flexDirection: 'row'
    },
    colourname: {
        width: '40%',
        color: 'black',
        alignSelf: 'center',
        marginLeft: 20
    },
    buttons: {
        width: '25%'
    }
});

export default ChangeColour;