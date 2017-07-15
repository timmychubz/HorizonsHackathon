import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

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
        addClass: (classObj) => dispatch(actions.addClass(classObj)),
        deleteClass: (classObj) => dispatch(actions.deleteClass(classObj)),
        highlightClass: (classObj) => dispatch(actions.highlightClass(classObj)),
        dehighlightClass: (classObj) => dispatch(actions.dehighlightClass(classObj))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarContainer);
