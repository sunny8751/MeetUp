import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from 'app/components/title';
import List from 'app/components/list';

var styles = require('app/styles/styles');
var listStyles = require('app/styles/list_styles');

function getDayString(date) {
    // Thu  Dec 14
    var day = date.getDay();
    if (day == 0) {
        day = 'Sun';
    } else if (day == 1) {
        day = 'Mon';
    } else if (day == 2) {
        day = 'Tue';
    } else if (day == 3) {
        day = 'Wed';
    } else if (day == 4) {
        day = 'Thu';
    } else if (day == 5) {
        day = 'Fri';
    } else if (day == 6) {
        day = 'Sat';
    }
    var month = date.getMonth();
    if (month == 0) {
        month = 'Jan';
    } else if (month == 1) {
        month = 'Feb';
    } else if (month == 2) {
        month = 'Mar';
    } else if (month == 3) {
        month = 'Apr';
    } else if (month == 4) {
        month = 'May';
    } else if (month == 5) {
        month = 'Jun';
    } else if (month == 6) {
        month = 'Jul';
    } else if (month == 7) {
        month = 'Aug';
    } else if (month == 8) {
        month = 'Sept';
    } else if (month == 9) {
        month = 'Oct';
    } else if (month == 10) {
        month = 'Nov';
    } else if (month == 11) {
        month = 'Dec';
    }
    return day + '  ' + month + ' ' + date.getDate();
}

function getTime(date) {
    // 9:15 PM
    var hours = date.getHours();
    var meridian = 'AM';
    if (hours >= 12) {
        meridian = 'PM';
    }
    hours = hours % 12;
    if (hours == 0) {
        hours = 12;
    }
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : '' + minutes;
    return hours + ':' + minutes + ' ' + meridian;
}

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
                    day: getDayString(event.startTime),
                    data: [event]
                };
            } else {
                // check if date is the same
                if (getDayString(event.startTime) == current.day) {
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
                <View
                    style={{
                        flexDirection: 'column',
                        paddingRight: 15,
                        paddingTop: 5,
                        paddingLeft: 10,
                        borderRightWidth: StyleSheet.hairlineWidth,
                        borderRightColor: 'skyblue'
                    }}
                >
                    <Text>{getTime(item.item.startTime)}</Text>
                    <Text style={{ color: 'darkgrey' }}>
                        {getTime(item.item.endTime)}
                    </Text>
                </View>
                <Text style={listStyles.item}>{item.item.name}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.pageContainer}>
                <Title text="My Events" createEvent={true} backButton={false} />
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
