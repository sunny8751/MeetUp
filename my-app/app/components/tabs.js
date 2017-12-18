import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        // first tab is active by default
        this.state = { activeTab: 0 };
    }

    // Pull children out of props passed from App component
    render({ children } = this.props) {
        return (
            <View style={styles.container}>
                {/* Content */}
                <View style={styles.contentContainer}>
                    {children[this.state.activeTab]}
                </View>
                {/* Tabs row */}
                <View style={styles.tabsContainer}>
                    {/* Pull props out of children, and pull title out of props */}
                    {children.map(({ props: { icon, type } }, index) => (
                        <TouchableOpacity
                            style={[
                                // Default style for every tab
                                styles.tabContainer,
                                // Merge default style with styles.tabContainerActive for active tab
                                index === this.state.activeTab
                                    ? styles.tabContainerActive
                                    : []
                            ]}
                            // Change active tab
                            onPress={() => this.setState({ activeTab: index })}
                            // Required key prop for components generated returned by map iterator
                            key={index}
                        >
                            <Icon name={icon} type={type} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
