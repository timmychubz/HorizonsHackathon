import * as types from '../actions/types';

const initialState = [
    index: 0;
    views: [
        'classSearch',
        'genedSearch',
        'electiveSearch'
    ]
]

const courseView = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_CLASS:
            for (var i = 0; i < newState.length + 1; i++) {
                if(!newState[i]) {
                    newState[i] = action.classObj;
                    break;
                }
            }
            return newState;
        case types.DELETE_CLASS:
            let index;
            console.log('enter here now');
            newState.forEach((classObj, indToDelete) => {
                index = classObj && classObj.id === action.classObj.id ? indToDelete : index;
            });
            newState.splice(index, 1, null);
            return newState;
        default:
            return state;
    }
};

export default courseView;
