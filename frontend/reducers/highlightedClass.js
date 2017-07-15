import * as types from '../actions/types';

const initialState = null;

const highlightedClass = (state = initialState, action) => {
    console.log('action inside highlightedClass reducer', action);
    switch(action.type) {
        case types.HIGHLIGHT_CLASS:
            return Object.assign(
              {}, action.classObj,
              {description: action.description}
            );
        case types.DEHIGHLIGHT_CLASS:
            return null;
        default:
            return state;
    }
};

export default highlightedClass;
