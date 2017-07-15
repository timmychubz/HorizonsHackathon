import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

// where deleteClass will actually be implemented
// also where all added classes will be displayed

const SearchContainer = ({ classSearch, addClass, deleteClass }) => {
    return (
        <div>
            <h3>Search for classes</h3>
            <div>
                {
                  classSearch.map((course) => (
                    <div>
                      <div className="courselistblock">
                        <h1>{course.LEC[0].info.department}{course.LEC[0].info.courseNumber}: {course.courseName}</h1>
                        <div>
                          <div>
                            <p>Difficulty: {course.difficultyRating}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                          <h3><strong>Sections</strong></h3>
                          {
                                course.LEC.map((section) => (
                                    <div><p><strong>{section.info.sectionNumber}</strong>, Instructor: {section.instructor}</p> <br />
                                    <p>{section.time.day} {section.time.start} - {section.time.end}</p>
                                    <button onClick={() => addClass(section)}>Add this class</button></div>
                                ))
                          }
                      </div>
                    </div>

                  ))
                }
            </div>
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
