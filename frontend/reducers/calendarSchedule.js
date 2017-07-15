import * as types from '../actions/types';

const initialState = [];

for (let i = 0; i < 5; i++) {
    initialState[i] = {
        day: i,
        times: [],
    };
    for (let j = 0; j < 26; j++) {
        initialState[i].times[j] = {
            time: j,
            chosen: false,
            highlighted: null
        };
    }
}

const calendarSchedule = (state = initialState, action) => {
    const timeBlocks = action.classObj.time;
    console.log(timeBlocks);
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
