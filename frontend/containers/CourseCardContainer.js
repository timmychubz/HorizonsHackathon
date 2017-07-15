import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

// converts 8.3 and 13 to 8:30 AM and 1:00 PM respectively
const dateNumToString = (dateNum) => {
    const suffix = dateNum >= 12 ? 'PM' : 'AM';
    const minute = Math.ceil(dateNum * 2) % 2 ? '30' : '00';
    const hour = Math.floor(dateNum) >= 12 ? Math.floor(dateNum) % 12 : Math.floor(dateNum);
    return hour + ':' + minute + ' ' + suffix;
};

// Actually the courseCard
const ScheduleContainer = ({ highlightedClass }) => {
    return highlightedClass ?
      (
        <div className="coursecard">
            <div className="courseidandtime">
                <div className="coursetime"><p>{highlightedClass.time.day} {dateNumToString(highlightedClass.time.start)} - {dateNumToString(highlightedClass.time.end)}</p></div>
                <div className="courseid"><p>{highlightedClass.info.department}{highlightedClass.info.courseNumber}</p></div>
            </div>
            <div className="coursename"><h1>{highlightedClass.courseName}</h1></div>
            <div className="professor"><p>Instructor: {highlightedClass.instructor}</p></div>
            <div className="descriptiontitle"><p>Course Description</p></div>
            <div className="description"><p>{highlightedClass.description}</p></div>
            <div className="recitation"><p>{highlightedClass.REC ?
                'Mandatory Recitation' :
                ''}</p></div>
            <div className="recitationsection"><p>
                {if (highlightedClass.REC){
                    highlightedClass.REC.map(function(x){return x.info.sectionNumber + " "})
                } else {
                    ''
                }
            </p></div>
            <div className="recitation"><p>{highlightedClass.LAB ?
                'Mandatory Laboratory' :
                ''}</p></div>
            <div className="recitationsection"><p>{highlightedClass.LAB ? highlightedClass.LAB.map(function(x){return x.info.sectionNumber + " "}) : ""}</p></div>
        </div>
      ) :
      (
        <div className="coursecard"></div>
      );
};

ScheduleContainer.propTypes = {
    highlightedClass: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        highlightedClass: state.highlightedClass,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScheduleContainer);
