import React, { Component } from 'react';
import NavigatorService from 'app/services/navigator';
import EventDetailsContainer from 'app/redux/containers/event_details_container';

export default class EventScreen extends Component {
    render() {
        return <EventDetailsContainer />;
    }
}
