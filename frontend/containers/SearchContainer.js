import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

// where deleteClass will actually be implemented
// also where all added classes will be displayed

const SearchContainer = ({ classSearch, addClass, deleteClass }) => {
    console.log(classSearch.map((course, index) => (course.LEC[0].info.department)));
    return (
        <div>
            <h3>Search for classes</h3>
            <ul>
                {
                  classSearch.map((course, index) => (
                      <li key={"selectedClass" + index}>
                          {course.LEC[0].info.department}-{course.LEC[0].info.courseNumber}
                          <ul>
                              {
                                  course.LEC.map((section, ind) => (
                                      <li>
                                          Section <strong>{section.info.sectionNumber}</strong>, Instructor: {section.instructor} <br />
                                          {section.time.day} {section.time.start} - {section.time.end}
                                          <button onClick={() => addClass(section)}>Add this class</button>
                                      </li>
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

SearchContainer.propTypes = {
    classSearch: PropTypes.array,
    addClass: PropTypes.func,
    deleteClass: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        classSearch: state.classSearch
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
)(SearchContainer);
