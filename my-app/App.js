import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import NavigatorService from 'app/services/navigator';

import HomeScreen from 'app/screens/home';
import EventFriendsScreen from 'app/screens/event_friends';
import EventScreen from 'app/screens/event';

export const App = StackNavigator(
    {
        Home: { screen: HomeScreen },
        EventFriends: { screen: EventFriendsScreen },
        Event: { screen: EventScreen }
    },
    {
        headerMode: 'none'
    }
);

export default class MeetUpApp extends Component {
    render() {
        return (
            <App
                ref={navigatorRef => {
                    NavigatorService.setContainer(navigatorRef);
                }}
            />
        );
    }
}
