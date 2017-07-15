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

const ScheduleContainer = ({ highlightedClass }) => {
    return highlightedClass ?
      (
        <div className="coursecard">
            <div className="courseidandtime">
                <div className="coursetime"><p>{highlightedClass.time.day} {dateNumToString(highlightedClass.time.start)} - {dateNumToString(highlightedClass.time.end)}</p></div>
                <div className="courseid"><p>Chem 241</p></div>
            </div>
            <div className="coursename"><h1>Organic Chemistry 1</h1></div>
            <div className="professor"><p>Instructor: Gary A. Molander</p></div>
            <div className="descriptiontitle"><p>Course Description</p></div>
            <div className="description"><p>Fundamental course in organic chemistry based upon the modern concepts of structure and mechanism of reactions.</p></div>
            <div className="recitation"><p>Mandatory Reciatation</p></div>
            <div className="recitationsection"><p>Section 101</p></div>
        </div>
      ) :
      (
        <div className="coursecard"></div>
      );
};

ScheduleContainer.propTypes = {
    highlightedClass: PropTypes.array,
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
