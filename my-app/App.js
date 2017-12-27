import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import {
    StackNavigator,
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import NavigatorService from 'src/services/navigator';
import configureStore from 'src/redux/stores/store_index';
import HomeNavigator from 'src/redux/navigators/home';
import FriendsListContainer from 'src/redux/containers/friends_list_container';
import EventChatContainer from 'src/redux/containers/event_chat_container';
import EventDetailsContainer from 'src/redux/containers/event_details_container';
import Settings from 'src/components/settings';

var styles = require('src/styles/styles');

export const AppNavigator = StackNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                headerBackTitle: null,
                headerTintColor: 'black'
            }
        },
        FriendsList: {
            screen: FriendsListContainer,
            navigationOptions: {
                title: 'Send to...',
                headerBackTitle: null,
                headerTintColor: 'black'
            }
        },
        EventChat: {
            screen: EventChatContainer
            // navigation options are in event_chat.js
        },
        EventDetails: {
            screen: EventDetailsContainer,
            navigationOptions: ({ navigation }) => ({
                title: 'Details',
                headerBackTitle: null,
                headerTintColor: 'black'
            })
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                title: 'Settings',
                headerBackTitle: null,
                headerTintColor: 'black'
            }
        }
    }
    // {
    //     transitionConfig: () => ({
    //         screenInterpolator: sceneProps => {
    //             return CardStackStyleInterpolator.forVertical(sceneProps);
    //         }
    //     })
    // }
);

const initialNavState = AppNavigator.router.getStateForAction(
    NavigationActions.init()
);

const navReducer = (state = initialNavState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const store = configureStore(navReducer);

// NAVIGATOR

class App extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class MeetUpApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
