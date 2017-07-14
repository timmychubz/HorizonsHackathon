import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import schedule from './schedule';
import calendarSchedule from './calendarSchedule';
import name from './name';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    calendarSchedule,
    schedule,
    name,
    routing
});

export default rootReducer;
