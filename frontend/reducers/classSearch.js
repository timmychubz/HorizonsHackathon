import * as types from '../actions/types';

import biol101Classes from '../../backend/apidata/MajorRequirements/biol101.json';
import math104Classes from '../../backend/apidata/MajorRequirements/math104.json';
import math114Classes from '../../backend/apidata/MajorRequirements/math114.json';
import phys101Classes from '../../backend/apidata/MajorRequirements/phys101.json';
import chem101Classes from '../../backend/apidata/MajorRequirements/chem101.json';
import engl072Classes from '../../backend/apidata/MajorRequirements/engl072.json';
// import gen1 from '../../backend/apidata/genRequirements/MC1.json';

const initialState = [
    biol101Classes, chem101Classes
];

const classSearch = (state = initialState, action) => {
    const newState = state.slice();
    switch(action.type) {
        default:
            return state;
        case types.BIO_MAJOR:
            return [biol101Classes, math114Classes, phys101Classes];
        case types.CHEM_MAJOR:
            return [chem101Classes, math114Classes, math104Classes];
        case types.GENERAL:
            return [engl072Classes, math104Classes]
    }
};

export default classSearch;
