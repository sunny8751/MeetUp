import React, { Component } from 'react';
import { Text, SectionList, View } from 'react-native';

var listStyles = require('app/styles/list_styles');

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SectionList
                sections={this.props.data}
                renderItem={item => this.props.renderItem(item)}
                renderSectionHeader={({ section }) =>
                    this.props.renderSectionHeader(section)
                }
                keyExtractor={(item, index) => index}
            />
        );
    }
}
