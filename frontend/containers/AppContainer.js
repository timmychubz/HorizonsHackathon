import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CalendarContainer from './CalendarContainer';
import ScheduleContainer from './ScheduleContainer';
import SearchContainer from './SearchContainer';
import CourseCardContainer from './CourseCardContainer';

const AppContainer = () => {
    return (
      <div>
        <div className='navBar'
          style={{'width':'100%', 'height': '100px'}}><span style={{'alignSelf':'center'}}>Schedulizer</span>
          <span style={{'alignSelf':'flexEnd', 'fontSize':'15px'}}>Hello Timmy!!<span style={{'textDecoration':'underline'}}>{'                '} Logout</span></span>
        </div>
        <div className="dashboarddiv">
          <div className="studentprofilediv">
                  <p className="selectmajorandminor">Select Major/Minor</p>
                  <div className="selectmajorandminorblockarraycontainer">
                  <p> Major</p>
                      <div className="selectmajorandminorblockarrayempty">
                      <div>Chemistry</div>
                      <div className="arrow-down"></div>
                  </div>
              </div>
              <div className="selectmajorandminorblockarraycontainer">
                  <p> Major</p>
                      <div className="selectmajorandminorblockarrayempty">
                      <div>Select</div>
                      <div className="arrow-down"></div>
                  </div>
              </div>
              <div className="selectmajorandminorblockarraycontainer">
                      <p>Minor</p>
                      <div className="selectmajorandminorblockarrayempty">
                      <div>Select</div>
                      <div className="arrow-down"></div>
                  </div>
              </div>
              <div className="selectmajorandminorblockdiv">
                  <div className="selectmajorandminorblockcontainer">
                      <p>Eligible Major Requirements</p>
                      <div className="selectmajorandminorblock"></div>
                      <div className="selectmajorandminorblock"></div>
                      <div className="selectmajorandminorblock"></div>
                  </div>
                  <div className="selectmajorandminorblockcontainer">
                      <p>Eligible Minor Requirements</p>
                      <div className="selectmajorandminorblock"></div>
                      <div className="selectmajorandminorblock"></div>
                  </div>
              </div>
          </div>
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
