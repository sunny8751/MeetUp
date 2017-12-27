import React, { Component } from 'react';
import NavigatorService from 'src/services/navigator';
import FriendsListContainer from 'src/redux/containers/friends_list_container';

export default class EventFriendsScreen extends Component {
    render() {
        return <FriendsListContainer />;
    }
}
