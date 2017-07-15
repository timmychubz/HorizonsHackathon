import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

// where deleteClass will actually be implemented
// also where all added classes will be displayed

const SearchContainer = ({ classSearch, genedSearch, electiveSearch, courseView, changeView, addClass, deleteClass, highlightClass, dehighlightClass }) => {
    const views = {
        classSearch,
        genedSearch,
        electiveSearch
    };

    const mainView = !!(views[courseView.views[courseView.index]][0]) ? views[courseView.views[courseView.index]] : [views[courseView.views[courseView.index]]];


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
                  mainView.map((course) => {
                      const sectionHtml = course.LEC.map((section) => (
                        <div className="coursesectionlistblock"
                            onMouseOver={() => highlightClass(section, course.courseDescription)}
                            onMouseOut={() => dehighlightClass(section)}
                            onClick={()=> addClass(section, course.courseDescription)}>
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
                {
                    courseView.views.map((view, index) => (
                        courseView.index === index ?
                            <div className="circle1"></div> :
                            <div
                                className="circle0"
                                onClick={() => changeView(index)}></div>
                    ))
                }
            </div>
        </div>
    );
};

SearchContainer.propTypes = {
    classSearch: PropTypes.array,
    genedSearch: PropTypes.array,
    electiveSearch: PropTypes.array,
    courseView: PropTypes.object,
    addClass: PropTypes.func,
    deleteClass: PropTypes.func,
    dehighlightClass: PropTypes.func,
    highlightClass: PropTypes.func,
    changeView: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        classSearch: state.classSearch,
        genedSearch: state.genedSearch,
        electiveSearch: state.electiveSearch,
        courseView: state.courseView
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addClass: (classObj) => dispatch(actions.addClass(classObj)),
        deleteClass: (classObj) => dispatch(actions.deleteClass(classObj)),
        highlightClass: (classObj, description) => dispatch(actions.highlightClass(classObj, description)),
        dehighlightClass: (classObj) => dispatch(actions.dehighlightClass(classObj)),
        changeView: (index) => dispatch(actions.changeView(index))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer);
