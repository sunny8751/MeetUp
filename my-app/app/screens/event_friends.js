import React, { Component } from 'react';
import NavigatorService from 'app/services/navigator';
import FriendsListContainer from 'app/redux/containers/friends_list_container';

export default class EventFriendsScreen extends Component {
    render() {
        return <FriendsListContainer />;
    }
}
