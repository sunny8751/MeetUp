import React, { Component } from 'react';
import NavigatorService from 'src/services/navigator';
import EventChatContainer from 'src/redux/containers/event_chat_container';
import { reset, navigate, resetToTab } from 'src/lib/lib';

export default class EventScreen extends Component {
    render() {
        return <EventChatContainer />;
    }
}
