'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    // Component container
    container: {
        flex: 1 // Take up all available space
    },
    // Tabs row container
    tabsContainer: {
        flexDirection: 'row', // Arrange tabs in a row
        paddingTop: 5 // Top padding
    },
    // Individual tab container
    tabContainer: {
        flex: 1, // Take up equal amount of space for each tab
        paddingVertical: 15, // Vertical padding
        borderBottomWidth: 3, // Add thick border at the bottom
        borderBottomColor: 'transparent' // Transparent border for inactive tabs
    },
    // Active tab container
    tabContainerActive: {
        borderBottomColor: '#FFFFFF' // White bottom border for active tabs
    },
    // Tab text
    tabText: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    // Content container
    contentContainer: {
        flex: 1 // Take up all available space
    }
});
