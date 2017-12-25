import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

var tabsStyles = require('app/styles/tabs_styles');

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        // first tab is active by default
        this.state = { activeTab: 1 };
    }

    // Pull children out of props passed from App component
    render({ children } = this.props) {
        return (
            <View style={tabsStyles.container}>
                {/* Content */}
                <View style={tabsStyles.contentContainer}>
                    {children[this.state.activeTab]}
                </View>
                {/* Tabs row */}
                <View style={tabsStyles.tabsContainer}>
                    {/* Pull props out of children, and pull title out of props */}
                    {children.map(({ props: { icon, type } }, index) => (
                        <TouchableOpacity
                            style={[
                                // Default style for every tab
                                tabsStyles.tabContainer,
                                // Merge default style with styles.tabContainerActive for active tab
                                index === this.state.activeTab
                                    ? tabsStyles.tabContainerActive
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
