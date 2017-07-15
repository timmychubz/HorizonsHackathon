import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const timeBoxInline = (time)=> {
  var color = 'white';
  if(time.highlighted) {
    color = '#FFB793'
  } else if (time.chosen) {
    color = '#D8D8D8'
  }
  return ({
      "height": "18px",
      "flex": "1",
      "backgroundColor": color,
      "borderTopStyle": time.time % 2 ? 'none' : 'solid',
      'borderWidth': '1px'
  })
};


const CalendarContainer = ({ calendarSchedule, addClass, deleteClass, highlightClass, dehighlightClass }) => {
    console.log(calendarSchedule);
    const initialHour = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
    return (
        <div>
          <div className="calendarContainer">
            <div className="calendarColumn showHour">
              <div>{initialHour.map((hour)=> (<div className="theHour">{hour}</div>))}</div>
            </div>
            { calendarSchedule.map((daySchedule) => (
                    <div className="calendarColumn"><span style={{'marginBottom':'5px'}}>{daySchedule.day}</span>
                    {daySchedule.times.map((time) =>
                    (<div style={timeBoxInline(time)}></div>)
                    )}</div>
                )
              )
            }
          </div>
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
