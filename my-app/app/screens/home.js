import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Tabs from 'app/components/tabs';
import Settings from 'app/components/settings';
import Me from 'app/components/me';
import NewEvent from 'app/components/new_event';

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
                        <Me />
                    </View>
                    {/* Second tab */}
                    <View icon="plus" type="octicon" style={styles.content}>
                        <NewEvent />
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
