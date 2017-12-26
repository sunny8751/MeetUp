import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import NavigatorService from 'app/services/navigator';

import configureStore from 'app/redux/stores/store_index';
import HomeScreen from 'app/screens/home';
import EventFriendsScreen from 'app/screens/event_friends';
import EventScreen from 'app/screens/event';

const store = configureStore();

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
            <Provider store={store}>
                <App
                    ref={navigatorRef => {
                        NavigatorService.setContainer(navigatorRef);
                    }}
                />
            </Provider>
        );
    }
}
