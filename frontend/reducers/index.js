import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import schedule from './schedule';
import calendarSchedule from './calendarSchedule';

import highlightedClass from './highlightedClass';

import courseView from './courseView';
import classSearch from './classSearch';
import genedSearch from './genedSearch';
import electiveSearch from './electiveSearch';

import name from './name';

const rootReducer = combineReducers({
    courseView,
    classSearch,
    genedSearch,
    electiveSearch,
    calendarSchedule,
    schedule,
    highlightedClass,
    name,
    routing
});

export default rootReducer;
