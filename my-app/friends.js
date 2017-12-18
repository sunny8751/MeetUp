import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from './title';

var s = require('./styles');

export default class Friends extends Component {
    render() {
        return (
            <View style={s.pageContainer}>
                <Title text="Nearby Events" createEvent={true} />
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
