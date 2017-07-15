import * as types from '../actions/types';

const initialState = [];

// we will store classes such that they contain the whole object in the format:
/*
    {
        ratings: ___
    }
*/
import biol101Classes from '../../backend/apidata/biol101';

const classSearch = (state = initialState, action) => {
    const newState = state.slice();

    switch(action.type) {
        default:
            return state;
    }
};

export default classSearch;
