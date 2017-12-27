import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert
} from 'react-native';
import List from 'src/components/list';
import { Icon } from 'react-native-elements';

var styles = require('src/styles/styles');
var listStyles = require('src/styles/list_styles');

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myEvents: [
                { title: 'My Account', data: ['Name', 'Username', 'Birthday'] }
                // {
                //     title: 'Dec 16',
                //     data: [' ', ' ']
                // }
            ]
        };
    }

    onPress(selected) {
        if (selected == 'Name') {
            Alert.alert('Change name');
        } else {
            Alert.alert(selected);
        }
    }

    renderSectionHeader(section) {
        return <Text style={listStyles.sectionHeader}>{section.title}</Text>;
    }

    renderItem(item) {
        return (
            <View style={listStyles.itemContainer}>
                <TouchableHighlight
                    onPress={() => this.onPress(item.item)}
                    underlayColor="white"
                >
                    <View style={settingsStyles.itemView}>
                        <Text style={listStyles.item}>{item.item}</Text>
                        <View style={settingsStyles.iconView}>
                            <Icon
                                name="ios-arrow-forward"
                                type="ionicon"
                                size={20}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.pageContainer}>
                <List
                    renderItem={item => this.renderItem(item)}
                    renderSectionHeader={section =>
                        this.renderSectionHeader(section)
                    }
                    data={this.state.myEvents}
                />
            </View>
        );
    }
}

const settingsStyles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconView: {
        paddingRight: 10,
        paddingTop: 10
    }
});
