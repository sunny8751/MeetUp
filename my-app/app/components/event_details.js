import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';
import Title from 'app/components/title';
import List from 'app/components/list';
import NavigatorService from 'app/services/navigator';
import { GOING, MAYBE, NOT_GOING } from 'app/lib/defines';

var styles = require('app/styles/styles');
var listStyles = require('app/styles/list_styles');
var meStyles = require('app/styles/my_events_styles');
var friendsListStyles = require('app/styles/friends_list_styles');

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.event);
    }
    render() {
        return (
            <View style={styles.content}>
                <Title
                    text={this.props.event.name}
                    createEvent={false}
                    backButton={true}
                />
                <View style={styles.pageContainer}>
                    <Text>Location: {this.props.event.location}</Text>
                </View>
            </View>
        );
    }
}
