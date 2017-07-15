import * as types from '../actions/types';

import biol101Classes from '../../backend/apidata/MajorRequirements/biol101.json';


const initialState = [
    biol101Classes
];

const classSearch = (state = initialState, action) => {
    const newState = state.slice();
    switch(action.type) {
        default:
            return state;
    }
};

export default classSearch;
