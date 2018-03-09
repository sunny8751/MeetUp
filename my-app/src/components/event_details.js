import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import NavigatorService from 'src/services/navigator';
import { GOING, MAYBE, NOT_GOING, getNavParams, navigate } from 'src/lib/lib';

var styles = require('src/styles/styles');

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = getNavParams(this.props).event;
    }

    render() {
        // TODO: pictures of people going
        people = '';
        for (const person in this.state.people) {
            people += people ? ', ' + person : person;
        }

        descriptionView = this.state.description ? (
            <Text style={eventDetailStyles.detailsLText}>
                {this.state.description}
            </Text>
        ) : (
            <View />
        );
        return (
            <View style={styles.pageContainer}>
                <ScrollView
                    contentContainerStyle={eventDetailStyles.container}
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode="on-drag"
                >
                    {/* Time */}
                    <View style={eventDetailStyles.horizontalView}>
                        <Icon
                            name="ios-time-outline"
                            type="ionicon"
                            size={22}
                        />
                        <Text style={eventDetailStyles.detailsText}>
                            {this.state.startTime
                                ? moment(this.state.startTime).format(
                                      'dddd, MMM D, YYYY [at] h:mm a'
                                  )
                                : 'Choose time'}
                        </Text>
                    </View>

                    {/* Location */}
                    <View style={eventDetailStyles.horizontalView}>
                        <Icon name="location-pin" type="entypo" size={22} />
                        <Text style={eventDetailStyles.detailsText}>
                            {this.state.location
                                ? this.state.location
                                : 'Choose location'}
                        </Text>
                    </View>

                    {/* Description */}
                    {descriptionView}

                    {/* People */}
                    <Text style={eventDetailStyles.detailsLText}>{people}</Text>
                </ScrollView>
            </View>
        );
    }
}

const eventDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    text: {
        fontSize: 22,
        alignSelf: 'center',
        padding: 10
    },
    detailsText: {
        fontSize: 16,
        alignSelf: 'center',
        padding: 10
    },
    detailsLText: {
        fontSize: 16,
        alignSelf: 'flex-start',
        padding: 10
    },
    horizontalView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    }
});
