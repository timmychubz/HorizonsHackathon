import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import CalendarContainer from './CalendarContainer';
import ScheduleContainer from './ScheduleContainer';
import SearchContainer from './SearchContainer';
import CourseCardContainer from './CourseCardContainer';

const AppContainer = ({ name }) => {
    return (
      <div>
        <Title name={name} />
        <div style={{'display':'flex', 'height': 50%}}>
          <SearchContainer style={{'flex':'1', 'overflow':'auto'}}/>
          <ScheduleContainer style={{'flex':'.8'}}/>
        </div>
        <div style={{'display':'flex'}}>
          <CourseCardContainer style={{'flex':'1'}}/>
          <CalendarContainer style={{'flex':'1.5'}}/>
        </div>
      </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
