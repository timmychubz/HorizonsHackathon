import * as types from '../actions/types';

import bibb080 from '../../backend/apidata/MajorRequirements/bibb080.json';
import engl072 from '../../backend/apidata/MajorRequirements/engl072.json';
import musc030 from '../../backend/apidata/MajorRequirements/musc030.json';
// import gen1 from '../../backend/apidata/genRequirements/MC1.json';


const initialState = bibb080;

const classSearch = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
        case types.CROSS_CULTURAL_ANALYSIS:
            return bibb080;
        case types.CULTURAL_DIVERSITY_IN_THE_US:
            return engl072;
        case types.HISTORY_AND_TRADITION:
            return musc030;
    }
};

export default classSearch;
