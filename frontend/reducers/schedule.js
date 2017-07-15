import * as types from '../actions/types';

const initialState = [];

const schedule = (state = initialState, action) => {
    console.log('in schedule reducer', action);
    const newState = state.slice();
    console.log('newState is', newState);
    switch(action.type) {
        case types.ADD_CLASS:
            console.log('add_class in schedule red has action.classObj', action.classObj );
            newState.push(action.classObj);
            console.log('newState is now after', newState);
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
