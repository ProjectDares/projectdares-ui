import React from 'react';
import UserDetails from "./UserDetails";
import EventsList from "./event/EventsList";

const App = () => {

    let events = [
        {id: 1, type: 'Football', name: 'Epic match', info: 'Feb 19, 8:30, Lviv'},
        {id: 2, type: 'Basketball', name: 'Street fight', info: 'Mar 28, 18:30, Miami'}
    ]
    return (
        <div className="jumbotron">
            <div className="d-flex flex-row justify-content-lg-center">
                <div className="p-10 align-self-start"><UserDetails/></div>
                <div className="align-self-lg-stretch col-md-6">
                    <EventsList events={events}/>
                </div>
            </div>
        </div>
    );
}

export default App;
