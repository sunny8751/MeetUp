import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from 'app/services/navigator';
import Title from 'app/components/title';
import List from 'app/components/list';

var styles = require('app/styles/styles');

export default class EventScreen extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Title
                    text="Event Page"
                    createEvent={false}
                    backButton={true}
                />
                <View style={styles.pageContainer}>
                    <Text>content</Text>
                </View>
            </View>
        );
    }
}
