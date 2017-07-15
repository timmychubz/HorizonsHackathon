import * as types from '../actions/types';

const initialState = [];

const dayToWeekday = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday'
}
for (let i = 0; i < 5; i++) {
    initialState[i] = {
        day: dayToWeekday[i],
        times: [],
    };
    for (let j = 0; j < 26; j++) {
        initialState[i].times[j] = {
            time: j,
            chosen: false,
            highlighted: false
        };
    }
}

const dayToIndex = {
    M: 0,
    T: 1,
    W: 2,
    R: 3,
    F: 4
};

const timeToIndex = (timeNum) => {
    return Math.ceil((timeNum - 8) * 2);
};

// converts MWF, 8.3, 9.3 to a usable array [{}]
// day is a string in the format 'MTWRF'
// start and end are numbers in the format 8.0 or 8.3
// we want to pass in classObj.time!!!

const dayTextToArray = ({ day, start, end }) => {
    const arrayOfTimeBlocks = [];
    const startIndex = timeToIndex(start);
    const endIndex = timeToIndex(end);

    day.split('').forEach((dayChar) => {
        for (var i = startIndex; i < endIndex; i++) {
            arrayOfTimeBlocks.push({
                dayIndex: dayToIndex[dayChar],
                timeIndex: i
            });
        }
    });

    return arrayOfTimeBlocks;
};

const calendarSchedule = (state = initialState, action) => {
    console.log('in calendarSchedule reducer', action);
    const timeBlocks = action.classObj ? dayTextToArray(action.classObj.time) : null;
    const newState = state.slice();

    switch(action.type) {
        case types.ADD_CLASS:
            timeBlocks.forEach((timeBlock) => {
                newState[timeBlock.dayIndex].times[timeBlock.timeIndex] = Object.assign({},
                    newState[timeBlock.dayIndex].times[timeBlock.timeIndex],
                    {chosen: true, highlighted: false}
                );
            });
            return newState;
        case types.DELETE_CLASS:
            timeBlocks.forEach((timeBlock) => {
                newState[timeBlock.dayIndex].times[timeBlock.timeIndex] = Object.assign({},
                    newState[timeBlock.dayIndex].times[timeBlock.timeIndex],
                    {chosen: false, highlighted: null}
                );
            });
            return newState;
        case types.HIGHLIGHT_CLASS:
            timeBlocks.forEach((timeBlock) => {
                newState[timeBlock.dayIndex].times[timeBlock.timeIndex] = Object.assign({},
                    newState[timeBlock.dayIndex].times[timeBlock.timeIndex],
                    {highlighted: true}
                );
            });
            return newState;
        case types.DEHIGHLIGHT_CLASS:
            timeBlocks.forEach((timeBlock) => {
                newState[timeBlock.dayIndex].times[timeBlock.timeIndex] = Object.assign({},
                    newState[timeBlock.dayIndex].times[timeBlock.timeIndex],
                    newState[timeBlock.dayIndex].times[timeBlock.timeIndex].chosen ?
                        {highlighted: false} :
                        {highlighted: null}
                );
            });
            return newState;
        default:
            return state;
    }
};

export default calendarSchedule;
