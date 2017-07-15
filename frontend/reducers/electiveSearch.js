import * as types from '../actions/types';

import musc030 from '../../backend/apidata/MajorRequirements/musc030.json';
// import gen1 from '../../backend/apidata/genRequirements/MC1.json';

const initialState = musc030;

const classSearch = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default classSearch;
