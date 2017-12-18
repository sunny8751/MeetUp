import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import NavigatorService from 'app/services/navigator';

import CreateEventScreen from 'app/screens/create-event';
import HomeScreen from 'app/screens/home';

export const App = StackNavigator(
    {
        Home: { screen: HomeScreen },
        CreateEvent: { screen: CreateEventScreen }
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
