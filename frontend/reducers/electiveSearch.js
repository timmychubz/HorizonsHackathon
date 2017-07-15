import * as types from '../actions/types';

import MFR from '../../backend/apidata/genRequirements/MFR';
import MQS from '../../backend/apidata/genRequirements/MQS';
import MDO from '../../backend/apidata/genRequirements/MDO,MDB';
// import gen1 from '../../backend/apidata/genRequirements/MC1.json';

const initialState = MFR.Courses.concat(
    MQS.Courses, MDO.Courses
);

const classSearch = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default classSearch;
