import React from 'react';
import PropTypes from 'prop-types';

const Event = ({type, name, info}) => {
    return (
        <div className="border-bottom card">
            <div className="card-header">{type}</div>
            <div className="card-title">{name}</div>
            <div className="card-subtitle">{info}</div>
        </div>
    );
}

Event.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
};

export default Event;
