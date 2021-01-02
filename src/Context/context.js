import { createContext } from 'react';

const Counter = createContext({
    counterNum: 0,
    colours: []
});

export default Counter;