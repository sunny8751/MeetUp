import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from 'app/components/title';

var s = require('app/styles/styles');

export default class Friends extends Component {
    render() {
        return (
            <View style={s.pageContainer}>
                <Title
                    text="Nearby Events"
                    createEvent={true}
                    backButton={false}
                />
                <View>
                    <Text style={s.header}>Truly Native</Text>
                    <Text style={s.text}>
                        Components you define will end up rendering as native
                        platform widgets
                    </Text>
                </View>
            </View>
        );
    }
}
