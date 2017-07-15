import * as types from '../actions/types';

const initialState = {
    index: 0,
    views: [
        'classSearch',
        'genedSearch',
        'electiveSearch'
    ]
};

const courseView = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_VIEW:
            return Object.assign({}, state, {index: action.index});
        default:
            return state;
    }
};

export default courseView;
