import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import List from 'src/components/list';
import NavigatorService from 'src/services/navigator';
import { MAYBE, resetFrom, getNavParams } from 'src/lib/lib';

var styles = require('src/styles/styles');
var listStyles = require('src/styles/list_styles');
var meStyles = require('src/styles/my_events_styles');
var friendsListStyles = require('src/styles/friends_list_styles');

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
        // update passed in current event with selected friends list
        event = getNavParams(this.props).event;
        event = Object.assign({}, event, { people: people });

        eventId = this.props.eventsCounter;

        // increment events counter because we used it for this event id
        this.props.setEventsCounter(eventId + 1);

        // send new event to store
        this.props.createEvent(eventId, event);

        // go to event screen from home page
        resetFrom(this.props.dispatch, 'Home', 'EventChat', { event });

        // Promise.all([reset(this.props.dispatch, 'Home')])
        //     .then(() => navigate(this.props.dispatch, 'MyEventsTab'))
        //     .then(() => navigate(this.props.dispatch, 'Event', { event }));
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
            <View style={styles.pageContainer}>
                <List
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    data={this.props.groups}
                />
                {sendBar}
            </View>
        );
    }
}
