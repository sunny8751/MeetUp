import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import Title from 'app/components/title';
import List from 'app/components/list';

var styles = require('app/styles/styles');
var listStyles = require('app/styles/list_styles');
var myEventsStyles = require('app/styles/my_events_styles');

export default class MyEvents extends Component {
    constructor(props) {
        super(props);
    }

    _renderSectionHeader(section) {
        return <Text style={listStyles.sectionHeader}>{section.day}</Text>;
    }

    _renderItem(item) {
        return (
            <View style={[listStyles.itemContainer, { flexDirection: 'row' }]}>
                <View style={myEventsStyles.itemView}>
                    <Text style={myEventsStyles.itemTimeText}>
                        {moment(item.item.startTime).format('h:mm a')}
                    </Text>
                </View>
                <Text style={listStyles.item}>{item.item.name}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.pageContainer}>
                <Title
                    text="My Events"
                    createEvent={false}
                    backButton={false}
                />
                <View style={styles.pageContainer}>
                    <List
                        renderItem={item => this._renderItem(item)}
                        renderSectionHeader={section =>
                            this._renderSectionHeader(section)
                        }
                        data={this.props.events}
                    />
                </View>
            </View>
        );
    }
}
