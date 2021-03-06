import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import moment from 'moment';
import List from 'src/components/list';
import { navigate } from 'src/lib/lib';

var styles = require('src/styles/styles');
var listStyles = require('src/styles/list_styles');
var myEventsStyles = require('src/styles/my_events_styles');

export default class MyEvents extends Component {
    constructor(props) {
        super(props);
    }

    _renderSectionHeader(section) {
        return <Text style={listStyles.sectionHeader}>{section.day}</Text>;
    }

    _onPress(event) {
        // const event = this.props.events[index];
        // console.log(event);
        navigate(this.props.dispatch, 'EventChat', { event });
    }

    _renderItem(item) {
        return (
            <TouchableHighlight
                underlayColor="skyblue"
                onPress={() => this._onPress(item.item)}
            >
                <View
                    style={[listStyles.itemContainer, { flexDirection: 'row' }]}
                >
                    <View style={myEventsStyles.itemView}>
                        <Text style={myEventsStyles.itemTimeText}>
                            {moment(item.item.startTime).format('h:mm a')}
                        </Text>
                    </View>
                    <Text style={listStyles.item}>{item.item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.pageContainer}>
                <List
                    renderItem={item => this._renderItem(item)}
                    renderSectionHeader={section =>
                        this._renderSectionHeader(section)
                    }
                    data={this.props.events}
                />
            </View>
        );
    }
}
