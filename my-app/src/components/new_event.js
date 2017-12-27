import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    DatePickerIOS,
    FlatList,
    Alert,
    Keyboard
} from 'react-native';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import Whitespace from 'src/components/whitespace';
import { GOING, navigate } from 'src/lib/lib';

var styles = require('src/styles/styles');

export default class NewEvent extends Component {
    constructor(props) {
        super(props);
        // get date plus 30 minutes to the nearest 15 minutes
        start = moment();
        closestDate = start.add(15 - start.minute() % 15, 'minutes');
        this.state = {
            name: '',
            location: '',
            // a js date object
            date: closestDate.toDate(),
            description: '',
            // if the date picker is shown or not
            focus: ''
        };
    }

    onSubmit = () => {
        // close date picker
        this.setState({ focus: '' });

        event = {
            name: this.state.name,
            status: GOING,
            location: this.state.location,
            startTime: this.state.date,
            people: {},
            host: this.props.username,
            description: this.state.description
        };

        navigate(this.props.navigation.dispatch, 'FriendsList', { event });
    };

    /*
    component: what to test this.state.focus against. ex: 'name'
    data: the array of suggestions to display in the flat list
*/
    getSuggestionsComponent = (component, data, onItemPress) => {
        if (this.state.focus == component) {
            return (
                <View style={newEventStyles.suggestionsView}>
                    <FlatList
                        keyboardShouldPersistTaps="always"
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableHighlight
                                underlayColor="skyblue"
                                onPress={() => {
                                    // write the selected item to the state,
                                    // and thus the textedit
                                    this.setState({ [component]: item });
                                    Keyboard.dismiss();
                                    this.setState({ focus: '' });
                                }}
                                style={newEventStyles.suggestionsItem}
                            >
                                <Text style={newEventStyles.text}>{item}</Text>
                            </TouchableHighlight>
                        )}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            );
        } else {
            return <View />;
        }
    };

    /*
        component: what to test this.state.focus against. ex: 'name'
    */
    getCloseIcon = component => {
        textState = this.state[component];
        if (textState) {
            return (
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({ [component]: '', focus: component });
                        this.refs[
                            component.charAt(0).toUpperCase() +
                                component.slice(1) +
                                'TextInput'
                        ].focus();
                    }}
                >
                    <View style={newEventStyles.closeTWF}>
                        <Icon
                            name="ios-close-circle"
                            type="ionicon"
                            size={30}
                        />
                    </View>
                </TouchableWithoutFeedback>
            );
        } else {
            return <View />;
        }
    };

    // events: prop passed in from redux store
    // category: what to give suggestions on ex. 'name' or 'location'
    getSuggestions = (events, category) => {
        counts = {};
        for (var i = 0; i < events.length; i++) {
            const event = events[i];
            counts[event[category]] = (counts[event[category]] || 0) + 1;
        }
        let sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
        let top3 = sorted.slice(0, 3);
        return top3;
    };

    inputIsValid() {
        // name is not empty
        var nameIsValid = this.state.name != '';
        // if date chosen is not in the past
        var dateIsValid = moment(this.state.date).isAfter(moment());
        return nameIsValid && dateIsValid;
    }

    render() {
        // close icon
        closeNameIcon = this.getCloseIcon('name');
        closeLocationIcon = this.getCloseIcon('location');
        // name selector
        nameSuggestions = this.getSuggestionsComponent(
            'name',
            this.getSuggestions(this.props.events, 'name')
        );
        locationSuggestions = this.getSuggestionsComponent(
            'location',
            this.getSuggestions(this.props.events, 'location')
        );
        // date picker
        datePicker =
            this.state.focus == 'date' ? (
                <DatePickerIOS
                    date={this.state.date}
                    onDateChange={newDate => this.setState({ date: newDate })}
                    minuteInterval={5}
                />
            ) : (
                <Text style={newEventStyles.dateText}>
                    {moment(this.state.date).format('ddd  MMM D') +
                        ', ' +
                        moment(this.state.date).format('h:mm a')}
                </Text>
            );
        // invalid date text
        var dateError = moment().isAfter(moment(this.state.date));
        dateErrorText = dateError ? (
            <Text style={newEventStyles.errorText}>
                Error: Date is in the past
            </Text>
        ) : (
            <View />
        );
        // submit button
        submitTH = !this.inputIsValid() ? (
            <View />
        ) : (
            <TouchableOpacity
                style={newEventStyles.submit}
                onPress={this.onSubmit}
                underlayColor="white"
            >
                <View style={newEventStyles.iconView}>
                    <Icon name="ios-arrow-forward" type="ionicon" size={50} />
                </View>
            </TouchableOpacity>
        );
        return (
            <View style={styles.pageContainer}>
                <ScrollView
                    contentContainerStyle={newEventStyles.container}
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode="on-drag"
                >
                    {/* Event Name */}
                    <View style={newEventStyles.horizontalView}>
                        <TextInput
                            ref="NameTextInput"
                            style={newEventStyles.textInput}
                            placeholder="What do you want to do?"
                            value={this.state.name}
                            onChangeText={text => this.setState({ name: text })}
                            onFocus={() => {
                                // close date picker
                                this.setState({ focus: 'name' });
                            }}
                            onEndEditing={() => this.setState({ focus: '' })}
                        />
                        {closeNameIcon}
                    </View>
                    {nameSuggestions}
                    <Whitespace height={20} />
                    {/* Event Location */}
                    <View style={newEventStyles.horizontalView}>
                        <TextInput
                            ref="LocationTextInput"
                            style={newEventStyles.textInput}
                            placeholder="Where?"
                            value={this.state.location}
                            onChangeText={text =>
                                this.setState({ location: text })
                            }
                            onFocus={() => this.setState({ focus: 'location' })}
                            onEndEditing={() => this.setState({ focus: '' })}
                        />
                        {closeLocationIcon}
                    </View>
                    {locationSuggestions}
                    <Whitespace height={20} />
                    {/* Event Date */}
                    {dateErrorText}
                    <TouchableHighlight
                        style={[
                            newEventStyles.dateTH,
                            dateError ? newEventStyles.dateError : []
                        ]}
                        underlayColor="skyblue"
                        onPress={() => {
                            this.setState({
                                focus: 'date'
                            });
                            Keyboard.dismiss();
                        }}
                    >
                        {datePicker}
                    </TouchableHighlight>
                    <Whitespace height={20} />
                    {/* Event Description */}
                    <View style={newEventStyles.horizontalView}>
                        <TextInput
                            style={newEventStyles.descriptionTextInput}
                            placeholder="Additional Details"
                            value={this.state.description}
                            onChangeText={text =>
                                this.setState({ description: text })
                            }
                            onFocus={() => {
                                // close date picker
                                this.setState({ focus: 'description' });
                            }}
                            onEndEditing={() => this.setState({ focus: '' })}
                        />
                    </View>
                    {/* Submit the event */}
                    {submitTH}
                </ScrollView>
            </View>
        );
    }
}

const newEventStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    text: {
        fontSize: 22,
        alignSelf: 'center',
        padding: 10
    },
    errorText: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    },
    textInput: {
        fontSize: 30,
        padding: 10,
        flex: 1
    },
    descriptionTextInput: {
        fontSize: 20,
        padding: 10,
        flex: 1
    },
    dateText: {
        padding: 10,
        fontSize: 30
    },
    dateTH: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'skyblue'
    },
    dateError: {
        borderColor: 'red'
    },
    iconView: {
        padding: 10
    },
    submit: {
        backgroundColor: 'skyblue',
        marginRight: 10,
        alignSelf: 'flex-end',
        width: 50,
        height: 50,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 10
    },
    suggestionsView: {
        flex: 0,
        backgroundColor: 'lightgrey'
    },
    suggestionsItem: {
        borderWidth: 1,
        borderColor: 'black'
    },
    horizontalView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'skyblue'
    },
    closeTWF: {
        paddingRight: 10
    }
});
