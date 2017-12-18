import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from './services/navigator';

var s = require('./styles');

export default class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        // create a new event
        // Alert.alert('You tapped the button!');
        NavigatorService.navigate('CreateEvent');
    };

    render() {
        if (this.props.createEvent === true) {
            return (
                <View style={styles.header}>
                    <View style={styles.whitespace} />
                    <View style={styles.headerText}>
                        <Text style={styles.title}>{this.props.text}</Text>
                    </View>
                    <TouchableHighlight
                        style={styles.createEvent}
                        onPress={this.onPress}
                        underlayColor="white"
                    >
                        <View style={styles.iconView}>
                            <Icon
                                size={30}
                                name="ios-create-outline"
                                type="ionicon"
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            );
        } else {
            return (
                <View style={styles.header}>
                    <View style={styles.whitespace} />
                    <View style={styles.headerText}>
                        <Text style={styles.title}>{this.props.text}</Text>
                    </View>
                    <View style={styles.whitespace} />
                </View>
            );
        }
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
        fontFamily: 'Avenir', // Change font family
        fontSize: 26 // Bigger font size
    },

    createEvent: {
        flex: 1,
        alignSelf: 'center'
    },

    whitespace: {
        flex: 1
    },

    iconView: {
        alignSelf: 'flex-end',
        paddingRight: 10
    }
});
