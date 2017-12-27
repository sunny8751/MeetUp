'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        // fontFamily: 'Avenir',
        backgroundColor: 'rgba(247,247,247,1.0)'
    },
    item: {
        padding: 10,
        fontSize: 22,
        height: 44
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderColor: 'rgba(247,247,247,1.0)'
    }
});
