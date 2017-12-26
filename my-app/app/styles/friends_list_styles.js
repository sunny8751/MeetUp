'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    friendSelectedTH: {
        backgroundColor: 'lightgrey',
        flex: 1
    },
    friendUnselectedTH: {
        backgroundColor: 'white',
        flex: 1
    },
    sendBar: {
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    sendBarIcon: {
        paddingRight: 5,
        paddingTop: 5
    }
});
