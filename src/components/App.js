import React from 'react';
import UserDetails from "./user/UserDetails";
import EventsList from "./event/EventsList";
import Header from "./common/Header"

const App = () => {

    let events = [
        {id: 1, type: 'Football', name: 'Epic match', info: 'Feb 19, 8:30, Lviv', participants: ["Kaka", "Beckham"]},
        {id: 2, type: 'Basketball', name: 'Street fight', info: 'Mar 28, 18:30, Miami', participants: ["Lebron"]}
    ]
    return (
        <div className="content">
            <Header />
            <div className="main-container">
                <div className="d-flex flex-row justify-content-lg-center">
                    <div className="p-10 align-self-start"><UserDetails/></div>
                    <div className="align-self-lg-stretch col-md-6 events-list">
                        <EventsList events={events}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
