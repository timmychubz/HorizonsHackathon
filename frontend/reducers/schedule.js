import * as types from '../actions/types';

const initialState = [];

const schedule = (state = initialState, action) => {
    const newState = state.slice();
    switch(action.type) {
        case types.ADD_CLASS:
            newState.push(action.classObj);
            return newState;
        case types.DELETE_CLASS:
            let index;
            newState.forEach((classObj, indToDelete) => {
                index = classObj.id === action.classObj.id ? indToDelete : index;
            });
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
};

export default schedule;
