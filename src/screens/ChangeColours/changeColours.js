import React, { useState, useReducer } from 'react';
import ChangeColour from './ChangeColour/changeColour';
import { View } from 'react-native';

const initialValue = {
    red: 0,
    green: 0,
    blue: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementColour':
            const increaseColour = { ...state };
            increaseColour[action.colour] = state[action.colour] < 255 ? state[action.colour] + 5 : 255;
            return increaseColour;
        case 'decrementColour':
            const decreaseColour = { ...state };
            decreaseColour[action.colour] = state[action.colour] > 0 ? state[action.colour] -5 : 0;
            return decreaseColour;
        default:
            return state;
    }
}

const ChangeColours = () => {
    const [ colour, dispatch ] = useReducer(reducer, initialValue);
    // const [ colour, updateColour ] = useState({
    //     red: 0,
    //     green: 0,
    //     blue: 0
    // });

    return (
        <View>
            <ChangeColour colour="Red" val={colour.red} update={dispatch} />
            <ChangeColour colour="Green" val={colour.green} update={dispatch} />
            <ChangeColour colour="Blue" val={colour.blue} update={dispatch} />
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