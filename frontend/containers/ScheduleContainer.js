import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


const ScheduleContainer = () => {
    return (
        <div>
            hello
        </div>
    );
};

ScheduleContainer.propTypes = {
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
)(ScheduleContainer);
