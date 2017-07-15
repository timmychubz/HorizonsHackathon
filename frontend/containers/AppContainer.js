import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CalendarContainer from './CalendarContainer';
import ScheduleContainer from './ScheduleContainer';
import SearchContainer from './SearchContainer';
import CourseCardContainer from './CourseCardContainer';

const AppContainer = () => {
    return (
      <div className="dashboarddiv">
        <div className="studentprofilediv"></div>
        <div className="schedulerdiv">
          <div className="courseselectordiv">
            <div className="searchcontainerdiv">
              <SearchContainer />
            </div>
            <div className="schedulecontainerdiv">
              <ScheduleContainer />
            </div>
          </div>
          <div className="coursedetaildiv">
            <div className="coursecardcontainerdiv">
              <CourseCardContainer />
            </div>
            <div className="calendarcontainerdiv">
              <CalendarContainer />
            </div>
          </div>
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
