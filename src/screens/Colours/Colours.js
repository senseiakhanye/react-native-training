import React, { useState, useContext } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import ButtonStyle from '../../UI/Buttons/Buttons';
import contextUseData from '../../Context/context';

const Colours = () => {
    const contextData = useContext(contextUseData);
    const [ colours , updateColours ] = useState(contextData.colours);
    
    const rgbColours = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    const generateColour = () => {
        const newColour = rgbColours();
        updateColours(oldColours => {
            const updatedColours = [ ...oldColours, {
                id: newColour,
                colour: newColour
            }];
            contextData.colours = [...updatedColours];
            return updatedColours;
        })
    }

    return (
        <View>
            <TouchableOpacity onPress={generateColour}>
                <Text style={ButtonStyle.textButton}>Add Colour</Text>
            </TouchableOpacity>
            <FlatList 
                data={colours}
                keyExtractor={(item) => item.id } 
                renderItem={({item}) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item.colour , marginVertical: 10}}/> }
                    }
                />
        </View>
    )
}

export default Colours;