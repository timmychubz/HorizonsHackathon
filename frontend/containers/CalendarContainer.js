import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const CalendarContainer = ({ calendarSchedule, addClass, deleteClass, highlightClass, dehighlightClass }) => {
    console.log(calendarSchedule);
    return (
        <div>
          <div className="calendarContainer">
            {
                calendarSchedule.map((daySchedule) => (
                    <div className="calendarColumn">{daySchedule.day}
                    {daySchedule.times.map((time) =>
                     (<div>{time.time}</div>)
                    )}</div>
                )
              )
            }
          </div>

            <ul className="calendarBox">
                {
                    calendarSchedule.map((daySchedule) => (
                        <li>
                            <strong>{daySchedule.day} </strong>
                            <ul>
                                {
                                    daySchedule.times.map((time) => (
                                        <li> {time.time}, {time.chosen + ''}, {time.highlighted + ''}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
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
