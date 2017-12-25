import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import Title from 'app/components/title';

var styles = require('app/styles/styles');
var listStyles = require('app/styles/list_styles');

export default class CreateEventScreen extends Component {
    render() {
        // const { params } = this.props.navigation.state;
        return (
            <View style={styles.content}>
                <Title
                    text="Create Event"
                    createEvent={false}
                    backButton={true}
                />
                <View
                    style={[
                        styles.content,
                        {
                            backgroundColor: 'lightgrey',
                            justifyContent: 'flex-start'
                        }
                    ]}
                >
                    {/* event name */}
                    <View
                        style={[
                            createEventStyles.sectionView,
                            {
                                flexDirection: 'row'
                            }
                        ]}
                    >
                        <TextInput
                            style={[
                                createEventStyles.textInput,
                                { flex: 1, fontSize: 20, height: 50 }
                            ]}
                            placeholder="Event Title"
                            onTextChange={text => console.log(text)}
                        />
                        <Icon name="photo" type="font-awesome" size={30} />
                    </View>
                    {/* more event info */}
                    <View style={createEventStyles.whitespace} />
                    <View style={createEventStyles.sectionView}>
                        <TextInput
                            style={createEventStyles.textInput}
                            placeholder="Time"
                            onTextChange={text => console.log(text)}
                        />
                        <TextInput
                            style={createEventStyles.textInput}
                            placeholder="Location"
                            onTextChange={text => console.log(text)}
                        />
                        <TextInput
                            style={[
                                createEventStyles.textInput,
                                { height: 80, backgroundColor: 'blue' }
                            ]}
                            placeholder="More Info"
                            onTextChange={text => console.log(text)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const createEventStyles = StyleSheet.create({
    sectionView: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        flex: 0
    },

    textInput: {
        flex: 0,
        padding: 10,
        fontSize: 14,
        // fontFamily: 'Avenir',
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },

    whitespace: { height: 20 }
});
