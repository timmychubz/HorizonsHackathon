import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import schedule from './schedule';
import calendarSchedule from './calendarSchedule';
import classSearch from './classSearch';
import name from './name';

const rootReducer = combineReducers({
    classSearch,
    calendarSchedule,
    schedule,
    name,
    routing
});

export default rootReducer;
