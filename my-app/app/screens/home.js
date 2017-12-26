import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Tabs from 'app/components/tabs';
import Settings from 'app/components/settings';
import MyEventsContainer from 'app/redux/containers/my_events_container';
import NewEventContainer from 'app/redux/containers/new_event_container';

var styles = require('app/styles/styles');

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Tabs>
                    {/* First tab */}
                    <View
                        icon="calendar"
                        type="font-awesome"
                        style={styles.content}
                    >
                        <MyEventsContainer />
                    </View>
                    {/* Second tab */}
                    <View icon="plus" type="octicon" style={styles.content}>
                        <NewEventContainer />
                    </View>
                    {/* Third tab */}
                    <View
                        icon="settings"
                        type="material"
                        style={styles.content}
                    >
                        <Settings />
                    </View>
                </Tabs>
            </View>
        );
    }
}
