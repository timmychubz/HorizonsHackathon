import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

// where deleteClass will actually be implemented
// also where all added classes will be displayed

const SearchContainer = ({ classSearch, addClass, deleteClass, highlightClass, dehighlightClass }) => {
    return (
        <div className="genedrequirementscontainer">
            <div className="filtercontrols">
                <div className="instructortoggle">
                    <div className="instructor"><p>Instructor</p></div>
                </div>
                <div className="difficultytoggle">
                    <div className="coursedifficulty"><p>Difficulty</p></div>
                </div>
                <div className="fulfillsrequirementdropdown">
                    <div>Writing Requirement</div>
                    <div className="arrow-down"></div>
                </div>
            </div>
            <div className="courselistdiv">
                {
                  classSearch.map((course) => {
                      const sectionHtml = course.LEC.map((section) => (
                        <div className="coursesectionlistblock"
                            onMouseOver={() => highlightClass(section, course.courseDescription)}
                            onMouseOut={() => dehighlightClass(section)}
                            onClick={()=>addClass(section)}>
                            <h1>Section {section.info.sectionNumber} {section.instructor}</h1>
                            <div>
                              <div><p>Instructor: {section.instructorRating}</p></div>
                            </div>
                        </div>
                      ));
                      return (
                        <div className="courselistblockdiv">
                          <div className="courselistblock">
                              <h1>{course.LEC[0].info.department}{course.LEC[0].info.courseNumber}: {course.courseName}</h1>
                                <div>
                                  <p>Difficulty: {course.difficultyRating}</p>
                                </div>
                          </div>
                          {sectionHtml}
                        </div>
                      );
                  })
                }
            </div>
            <div className="scrollviewdiv">
              <div className="circle0"></div>
              <div className="circle1"></div>
              <div className="circle0"></div>
            </div>
        </div>
    );
};

SearchContainer.propTypes = {
    classSearch: PropTypes.array,
    addClass: PropTypes.func,
    deleteClass: PropTypes.func,
    dehighlightClass: PropTypes.func,
    highlightClass: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        classSearch: state.classSearch
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addClass: (classObj, time) => dispatch(actions.addClass(classObj, time)),
        deleteClass: (classObj, time) => dispatch(actions.deleteClass(classObj, time)),
        highlightClass: (classObj, time) => dispatch(actions.highlightClass(classObj, time)),
        dehighlightClass: (classObj) => dispatch(actions.dehighlightClass(classObj))

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer);
