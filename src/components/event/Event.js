import React from 'react';
import PropTypes from 'prop-types';

const Event = ({type, name, info, participants}) => {
    return (
        <div className="card mb-3 mt-3 box-shadow">
            <div className="card-header d-lg-flex flex-row justify-content-between">
                <h5>{type}: {name}</h5>
                <button className="btn-link border-0 align-self-start">Join</button>
            </div>
            <div className="card-body">
                <div className="mb-4 mt-3">{info}</div>
                <ul className="list-group list-group-flush">
                    {participants.map(p => <li key={p} className="list-group-item">{p}</li>)}
                </ul>
            </div>
        </div>
    );
}

Event.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    participants: PropTypes.array.isRequired
};

export default Event;
