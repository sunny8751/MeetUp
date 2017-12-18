'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    // App container
    container: {
        flex: 1, // Take up all screen
        backgroundColor: 'skyblue' // Background color
    },
    // Tab content container
    content: {
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        backgroundColor: 'white' // Darker background for content area
    },
    // Content header
    header: {
        margin: 10, // Add margin
        color: 'black',
        fontFamily: 'Avenir', // Change font family
        fontSize: 26 // Bigger font size
    },
    // Content text
    text: {
        marginHorizontal: 20, // Add horizontal margin
        color: 'rgba(0, 0, 0, 0.75)', // Semi-transparent text
        textAlign: 'center', // Center
        fontFamily: 'Avenir',
        fontSize: 18
    },

    pageContainer: {
        flex: 1,
        alignSelf: 'stretch'
    }
});
