import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import CalendarContainer from './CalendarContainer';
import ScheduleContainer from './ScheduleContainer';
import SearchContainer from './SearchContainer';

const AppContainer = ({ name }) => {
    return (
        <div>
            <Title name={name} />
            <SearchContainer />
            <ScheduleContainer />
            <CalendarContainer />
        
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
