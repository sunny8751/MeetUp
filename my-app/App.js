import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tabs from './tabs';
import Settings from './settings';
import Me from './me';
import Friends from './friends';
import { StackNavigator } from 'react-navigation';
import NavigatorService from './services/navigator';

var s = require('./styles');

class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={s.container}>
                <Tabs>
                    {/* First tab */}
                    <View icon="calendar" type="font-awesome" style={s.content}>
                        <Me />
                    </View>
                    {/* Second tab */}
                    <View
                        icon="earth"
                        type="material-community"
                        style={s.content}
                    >
                        <Friends />
                    </View>
                    {/* Third tab */}
                    <View icon="settings" type="material" style={s.content}>
                        <Settings />
                    </View>
                </Tabs>
            </View>
        );
    }
}

class CreateEvent extends Component {
    render() {
        // const { params } = this.props.navigation.state;
        return <Text>Hi</Text>;
    }
}

export const App = StackNavigator(
    {
        Home: { screen: HomeScreen },
        CreateEvent: { screen: CreateEvent }
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
