import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from 'app/services/navigator';
import Title from 'app/components/title';
import List from 'app/components/list';

var styles = require('app/styles/styles');
var listStyles = require('app/styles/list_styles');
var meStyles = require('app/styles/me_styles');

export default class EventFriendsScreen extends Component {
    constructor(props) {
        super(props);
        this.myFriends = [
            {
                name: 'Sunwoo Yim',
                groups: ['favorite', 'brothers']
            },
            {
                name: 'Mark Yim',
                groups: ['favorite']
            },
            {
                name: 'Steve Yim',
                groups: ['brothers']
            }
        ];
        // organize into categories
        this.groups = [
            { group: 'favorite', data: [] },
            { group: 'brothers', data: [] }
        ];
        for (var i = 0; i < this.myFriends.length; i++) {
            let friend = this.myFriends[i];
            if (friend.groups.includes('favorite')) {
                this.groups[0].data.push(friend);
            }
            if (friend.groups.includes('brothers')) {
                this.groups[1].data.push(friend);
            }
        }
        this.state = {
            myFriends: this.groups,
            selectedFriends: {},
            numSelectedFriends: 0
        };
    }

    sendEvent = () => {
        console.log('Event sent!');
        NavigatorService.navigate('Event');
    };

    selectFriend = friendName => {
        if (this.state.selectedFriends[friendName] === true) {
            // friend is selected, so deselect it
            this.setState(prevState => {
                newSelectedFriends = Object.assign(
                    {},
                    prevState.selectedFriends,
                    { [friendName]: false }
                );
                return {
                    selectedFriends: newSelectedFriends,
                    numSelectedFriends: prevState.numSelectedFriends - 1
                };
            });
        } else {
            // not selected, so select it
            this.setState(prevState => {
                newSelectedFriends = Object.assign(
                    {},
                    prevState.selectedFriends,
                    { [friendName]: true }
                );
                return {
                    selectedFriends: newSelectedFriends,
                    numSelectedFriends: prevState.numSelectedFriends + 1
                };
            });
        }
    };

    _renderSectionHeader = section => {
        return <Text style={listStyles.sectionHeader}>{section.group}</Text>;
    };

    _renderItem = item => {
        friendName = item.item.name;
        return (
            <View
                style={[
                    listStyles.itemContainer,
                    {
                        flexDirection: 'row'
                    }
                ]}
            >
                <TouchableHighlight
                    style={
                        this.state.selectedFriends[friendName] == true
                            ? eventFriendsStyle.friendSelectedTH
                            : eventFriendsStyle.friendUnselectedTH
                    }
                    onPress={() => this.selectFriend(item.item.name)}
                    underlayColor="skyblue"
                >
                    <Text style={listStyles.item}>{friendName}</Text>
                </TouchableHighlight>
            </View>
        );
    };

    render() {
        // send bar containing selected friends
        var selectedFriendsString = '';
        for (var friend in this.state.selectedFriends) {
            if (this.state.selectedFriends[friend] == true) {
                // friend is selected, so add to string
                selectedFriendsString +=
                    (selectedFriendsString ? ', ' : '') + friend;
            }
        }
        sendBar =
            this.state.numSelectedFriends == 0 ? (
                <View />
            ) : (
                <View style={eventFriendsStyle.sendBar}>
                    <Text style={listStyles.item}>{selectedFriendsString}</Text>
                    <TouchableHighlight
                        style={eventFriendsStyle.sendBarIcon}
                        onPress={() => this.sendEvent()}
                        underlayColor="skyblue"
                    >
                        <View>
                            <Icon
                                name="arrow-right-bold-circle"
                                type="material-community"
                                size={35}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            );
        return (
            <View style={styles.content}>
                <Title
                    text="Send to..."
                    createEvent={false}
                    backButton={true}
                />
                <View style={styles.pageContainer}>
                    <List
                        renderItem={this._renderItem}
                        renderSectionHeader={this._renderSectionHeader}
                        data={this.state.myFriends}
                    />
                    {sendBar}
                </View>
            </View>
        );
    }
}

const eventFriendsStyle = StyleSheet.create({
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
