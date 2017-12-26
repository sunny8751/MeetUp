import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';
import Title from 'app/components/title';
import List from 'app/components/list';
import NavigatorService from 'app/services/navigator';
import { MAYBE } from 'app/lib/defines';

var styles = require('app/styles/styles');
var listStyles = require('app/styles/list_styles');
var meStyles = require('app/styles/my_events_styles');
var friendsListStyles = require('app/styles/friends_list_styles');

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFriends: {},
            numSelectedFriends: 0
        };
    }

    sendEvent = () => {
        // NavigatorService.print();
        // const { event } = this.props.navigation.state;
        people = {};
        for (const friend in this.state.selectedFriends) {
            if (this.state.selectedFriends[friend] == true) {
                people[friend] = MAYBE;
            }
        }
        // update store's current event with selected friends list
        this.props.updateCurrentEvent({ people });
        NavigatorService.navigate('Event');
    };

    selectFriend = friendUsername => {
        if (this.state.selectedFriends[friendUsername] === true) {
            // friend is selected, so deselect it
            this.setState(prevState => {
                newSelectedFriends = Object.assign(
                    {},
                    prevState.selectedFriends,
                    { [friendUsername]: false }
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
                    { [friendUsername]: true }
                );
                return {
                    selectedFriends: newSelectedFriends,
                    numSelectedFriends: prevState.numSelectedFriends + 1
                };
            });
        }
    };

    getName = username => {
        return this.props.friends[username].name;
    };

    _renderSectionHeader = section => {
        return <Text style={listStyles.sectionHeader}>{section.group}</Text>;
    };

    _renderItem = item => {
        const friendUsername = item.item;
        const friendName = this.getName(friendUsername);
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
                        this.state.selectedFriends[friendUsername] == true
                            ? friendsListStyles.friendSelectedTH
                            : friendsListStyles.friendUnselectedTH
                    }
                    onPress={() => this.selectFriend(friendUsername)}
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
                <View style={friendsListStyles.sendBar}>
                    <Text style={listStyles.item}>{selectedFriendsString}</Text>
                    <TouchableHighlight
                        style={friendsListStyles.sendBarIcon}
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
                        data={this.props.groups}
                    />
                    {sendBar}
                </View>
            </View>
        );
    }
}
