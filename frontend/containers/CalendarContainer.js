import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

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
// meetingDays is a string in the format 'MTWRF'
// startTime and endTime are numbers in the format 8.0 or 8.3
const dateTextToArray = (meetingDays, startTime, endTime) => {
    const arrayOfTimeBlocks = [];
    const startIndex = timeToIndex(startTime);
    const endIndex = timeToIndex(endTime);

    meetingDays.split('').forEach((dayChar) => {
        for (var i = startIndex; i < endIndex; i++) {
            arrayOfTimeBlocks.push({
                dayIndex: dayToIndex[dayChar],
                timeIndex: i
            });
        }
    });

    return arrayOfTimeBlocks;
};

const CalendarContainer = ({ calendarSchedule, addClass, deleteClass, highlightClass, dehighlightClass }) => {
    return (
        <div>
            <ul>
                {
                    calendarSchedule.map((daySchedule) => (
                        <li>
                            <strong>{daySchedule.day}</strong>
                            <ul>

                                {
                                    daySchedule.times.map((time) => (
                                        <li>{time.time}, {time.chosen + ''}, {time.highlighted + ''}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => addClass('id', dateTextToArray('F', 8, 21))}>Add a class on F 8:00 AM - 9:00 PM</button>
            <button onClick={() => deleteClass('id', dateTextToArray('F', 19, 21))}>Delete a class on F 7:00 PM - 9 PM </button>
            <button onClick={() => highlightClass('id', dateTextToArray('F', 18, 20))}>Highlight a class on F 6:00-8:00 PM</button>
            <button onClick={() => dehighlightClass('id', dateTextToArray('F', 18, 20))}>Dehighlight a class on MWF 6:00-7:00 PM</button>
        </div>
    );
};

CalendarContainer.propTypes = {
    calendarSchedule: PropTypes.array,
    addClass: PropTypes.func,
    deleteClass: PropTypes.func,
    highlightClass: PropTypes.func,
    dehighlightClass: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        calendarSchedule: state.calendarSchedule
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addClass: (classObj, time) => dispatch(actions.addClass(classObj, time)),
        deleteClass: (classObj, time) => dispatch(actions.deleteClass(classObj, time)),
        highlightClass: (classObj, time) => dispatch(actions.highlightClass(classObj, time)),
        dehighlightClass: (classObj, time) => dispatch(actions.dehighlightClass(classObj, time))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarContainer);