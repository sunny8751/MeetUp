import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from 'app/components/title';
import List from 'app/components/list';

var styles = require('app/styles/styles');
var listStyles = require('app/styles/list_styles');
var meStyles = require('app/styles/me_styles');
var dateLib = require('app/lib/date_lib');

export default class Me extends Component {
    constructor(props) {
        super(props);
        var events = [
            {
                name: 'Skii trip',
                startTime: new Date(),
                endTime: new Date(),
                people: {
                    going: ['Jackson', 'James', 'Jillian', 'Jimmy'],
                    maybe: ['flakers'],
                    cant_go: ['rahul', 'sharon', 'john']
                },
                location: 'university house',
                description: 'skiing with the boys'
            },
            {
                name: 'Cabin trip',
                startTime: new Date(),
                endTime: new Date(),
                people: {
                    going: ['Jackson', 'James', 'Jillian', 'Jimmy'],
                    maybe: ['flakers'],
                    cant_go: ['rahul', 'sharon', 'john']
                },
                location: 'university house',
                description: 'skiing with the boys'
            }
        ];

        var myEvents = [];
        var current = null;
        for (var i = 0; i < events.length; i++) {
            let event = events[i];
            if (!current) {
                // create new list for day's events
                current = {
                    day: dateLib.getDayString(event.startTime),
                    data: [event]
                };
            } else {
                // check if date is the same
                if (dateLib.getDayString(event.startTime) == current.day) {
                    // add to current events
                    current.data.push(event);
                } else {
                    myEvents.push(current);
                    current = null;
                }
            }
        }
        if (current) {
            myEvents.push(current);
        }
        this.state = {
            myEvents: myEvents
        };
    }

    _renderSectionHeader(section) {
        return <Text style={listStyles.sectionHeader}>{section.day}</Text>;
    }

    _renderItem(item) {
        return (
            <View style={[listStyles.itemContainer, { flexDirection: 'row' }]}>
                <View style={meStyles.itemView}>
                    <Text>{dateLib.getTimeString(item.item.startTime)}</Text>
                    <Text style={{ color: 'darkgrey' }}>
                        {dateLib.getTimeString(item.item.endTime)}
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
                        data={this.state.myEvents}
                    />
                </View>
            </View>
        );
    }
}
