import * as types from '../actions/types';

import MC1 from '../../backend/apidata/genRequirements/MC1.json';
import MC2 from '../../backend/apidata/genRequirements/MC2.json';
import MDA from '../../backend/apidata/genRequirements/MDA.json';
import MDH from '../../backend/apidata/genRequirements/MDH.json';
import MDL from '../../backend/apidata/genRequirements/MDL.json';
// import MDP from '../../backend/apidata/genRequirements/MDP.json';
import MWC from '../../backend/apidata/genRequirements/MWC.json';
// import gen1 from '../../backend/apidata/genRequirements/MC1.json';


const initialState = [];

const classSearch = (state = initialState, action) => {
    const newState = state.slice();
    switch(action.type) {
        default:
            return state;
        case types.CROSS_CULTURAL_ANALYSIS:
            return MC1.Courses;
        case types.CULTURAL_DIVERSITY_IN_THE_US:
            return MC2.Courses;
        case types.HISTORY_AND_TRADITION:
            return MDH.Courses;
    }
};

export default classSearch;
