import * as types from '../actions/types';

import biol101Classes from '../../backend/apidata/biol101.json';


const initialState = [
    biol101Classes
];

// we will store classes such that they contain the whole object in the format:
/*
    {
        ratings: ___
    }
*/

const classSearch = (state = initialState, action) => {
    const newState = state.slice();
    switch(action.type) {
        default:
            return state;
    }
};

export default classSearch;
