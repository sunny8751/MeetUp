import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from 'app/services/navigator';

var s = require('app/styles/styles');

class CreateEventComponent extends Component {
    // for the create event button on title

    onPress = () => {
        // create a new event
        // Alert.alert('You tapped the button!');
        NavigatorService.navigate('CreateEvent');
    };

    render() {
        if (this.props.createEvent === true) {
            return (
                <TouchableHighlight
                    style={styles.createEvent}
                    onPress={this.onPress}
                    underlayColor="white"
                >
                    <View style={styles.iconRightView}>
                        <Icon
                            size={30}
                            name="ios-create-outline"
                            type="ionicon"
                        />
                    </View>
                </TouchableHighlight>
            );
        } else {
            return <View style={styles.whitespace} />;
        }
    }
}

class BackButtonComponent extends Component {
    onPress = () => {
        // create a new event
        // Alert.alert('You tapped the button!');
        NavigatorService.reset('Home');
    };
    render() {
        if (this.props.backButton === true) {
            return (
                <TouchableHighlight
                    style={styles.createEvent}
                    onPress={this.onPress}
                    underlayColor="white"
                >
                    <View style={styles.iconLeftView}>
                        <Icon size={30} name="ios-arrow-back" type="ionicon" />
                    </View>
                </TouchableHighlight>
            );
        } else {
            return <View style={styles.whitespace} />;
        }
    }
}

export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <BackButtonComponent backButton={this.props.backButton} />
                <View style={styles.headerText}>
                    <Text style={styles.title}>{this.props.text}</Text>
                </View>
                <CreateEventComponent createEvent={this.props.createEvent} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', // Arrange tabs in a row
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 1
    },

    headerText: {
        flex: 3,
        alignSelf: 'center'
    },

    title: {
        textAlign: 'center',
        color: 'black',
        // fontFamily: 'Avenir', // Change font family
        fontSize: 26 // Bigger font size
    },

    createEvent: {
        flex: 1,
        alignSelf: 'center'
    },

    whitespace: {
        flex: 1
    },

    iconRightView: {
        alignSelf: 'flex-end',
        paddingRight: 10
    },

    iconLeftView: {
        alignSelf: 'flex-start',
        paddingLeft: 10
    }
});
