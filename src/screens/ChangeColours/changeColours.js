import React, { useState } from 'react';
import ChangeColour from './ChangeColour/changeColour';
import { View } from 'react-native';

const ChangeColours = () => {
    const [ colour, updateColour ] = useState({
        red: 0,
        green: 0,
        blue: 0
    });

    return (
        <View>
            <ChangeColour colour="Red" val={colour.red} update={updateColour} />
            <ChangeColour colour="Green" val={colour.green} update={updateColour} />
            <ChangeColour colour="Blue" val={colour.blue} update={updateColour} />
            <View style={{
                    height: 100,
                    width: 100, 
                    backgroundColor: `rgb(${colour.red}, ${colour.green}, ${colour.blue})`, 
                    marginLeft: 'auto', 
                    marginRight: 'auto', 
                    marginTop: 100,
                    borderColor: 'black',
                    borderRadius: 15}}/>
        </View>
    );
}

export default ChangeColours;