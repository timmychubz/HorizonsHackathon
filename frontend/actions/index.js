// Action Creators
import * as types from './types';

// time is an array of time objects that contains the key dayIndex with value (0 - 4 represent M - F)
// and the key timeIndex with value (0-25 represent [8:00-8:30 AM] - [8:30 - 9:00 PM])

const addClass = (classObj, time) => ({
    type: types.ADD_CLASS,
    classObj,
    time
});

const deleteClass = (classObj, time) => ({
    type: types.DELETE_CLASS,
    classObj,
    time
});

const highlightClass = (classObj, time) => ({
    type: types.HIGHLIGHT_CLASS,
    classObj,
    time
});

const dehighlightClass = (classObj, time) => ({
    type: types.DEHIGHLIGHT_CLASS,
    classObj,
    time
});

export { addClass, highlightClass, deleteClass, dehighlightClass };
