import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Whitespace extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <View style={{ height: this.props.height }} />;
    }
}
