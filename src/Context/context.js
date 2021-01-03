import { createContext } from 'react';

const Counter = createContext({
    counterNum: 0,
    colours: []
});

export const defaultColour = createContext({
    red: 0,
    green: 0,
    blue: 0
})

export const changeColourReducer = (state, action) => {
    switch (action.type) {
        case "incrementColour":
            const increaseColour = { ...state };
            increaseColour[action.colour] = state[action.colour] < 255 ? state[action.colour] + 5 : 255;
            defaultColour._currentValue[action.colour] = increaseColour[action.colour];
            return increaseColour;
        case "decrementColour":
            const decreaseColour = { ...state };
            decreaseColour[action.colour] = state[action.colour] > 0 ? state[action.colour] -5 : 0;
            defaultColour._currentValue[action.colour] = decreaseColour[action.colour];
            return decreaseColour;
        default:
            return state;
    }
}


export default Counter;