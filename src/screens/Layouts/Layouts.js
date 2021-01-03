import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ButtonStyle from '../../UI/Buttons/Buttons';

const Layouts = (props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('BoxLayout') }>
                <Text style={ButtonStyle.textButton}>Box Layout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('FlexLayout') }>
                <Text style={ButtonStyle.textButton}>Flex Layout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('PositionLayout') }>
                <Text style={ButtonStyle.textButton}>Position Layout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Layouts;