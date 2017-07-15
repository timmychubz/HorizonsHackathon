import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

// where deleteClass will actually be implemented
// also where all added classes will be displayed

const ScheduleContainer = ({ schedule, addClass, deleteClass }) => {
    console.log('in ScheduleContainer schedule is', schedule);
    return (
        <div>
            <h3>Currently selected classes</h3>
            <ul>
                {
                  schedule.map((section, index) => (
                      <li key={"selectedClass" + index}>
                          {section.info.department}-{section.info.courseNumber}-{section.info.sectionNumber}
                          <button onClick={() => deleteClass(section)}>Delete this course</button>
                      </li>
                  ))
                }
            </ul>
        </div>
    );
};

ScheduleContainer.propTypes = {
    schedule: PropTypes.array,
    addClass: PropTypes.func,
    deleteClass: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        schedule: state.schedule
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addClass: (classObj, time) => dispatch(actions.addClass(classObj, time)),
        deleteClass: (classObj, time) => dispatch(actions.deleteClass(classObj, time))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleContainer);
