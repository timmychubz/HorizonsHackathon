import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

// where deleteClass will actually be implemented
// also where all added classes will be displayed

const ScheduleContainer = ({ schedule, addClass, deleteClass }) => {
    return (
        <div className="selectedcourseblockcontainer">
            {
              schedule.map((section) => (
                  section ?
                  <div className="selectedcourseblock" onClick={()=>deleteClass(section)}>
                      <h1>{section.info.department} {section.info.courseNumber} {section.info.sectionNumber}</h1>
                  </div> :
                  <div className="emptyselectedcourseblock"></div>
              ))
            }
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
        addClass: (classObj) => dispatch(actions.addClass(classObj)),
        deleteClass: (classObj) => dispatch(actions.deleteClass(classObj))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleContainer);
