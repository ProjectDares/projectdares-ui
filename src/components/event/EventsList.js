import React from 'react';
import PropTypes from 'prop-types';
import Event from "./Event";

const EventsList = ({events}) => {
    return (
        <div className="flex-row container border flex-fill">
            {events.map(event =>
                <Event key={event.id} type={event.type} name={event.name} info={event.info}/>
            )}
        </div>
    );
}

EventsList.propTypes = {
    events: PropTypes.array.isRequired
};

export default EventsList;
