'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    itemView: {
        flexDirection: 'column',
        paddingRight: 15,
        paddingTop: 5,
        paddingLeft: 10,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: 'skyblue'
    }
});
