import { connect } from 'react-redux';
import FriendsList from 'app/components/friends_list';
import { createEvent, updateCurrentEvent } from 'app/redux/actions/actions';

function getGroups(state) {
    var groupSort = [];
    for (const groupName in state.friend_groups) {
        let friendArray = state.friend_groups[groupName];
        var group = { group: groupName, data: [] };
        for (var i = 0; i < friendArray.length; i++) {
            const friend = friendArray[i];
            group.data.push(friend);
        }
        groupSort.push(group);
    }
    return groupSort;
}

function getFriends(state) {
    return state.friends;
}

const mapStateToProps = state => ({
    // list of all friends sorted by group
    // [{ group: 'favorite', data: ['JacksonUsername', 'JamesUsername'] },
    // { group: 'brothers', data: ['JimmyUsername'] } ]
    groups: getGroups(state),
    // {JacksonUsername: {name: 'Jackson'},
    // JamesUsername: { name: 'James' }}
    friends: getFriends(state),
    nav: state.nav
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        updateCurrentEvent: event => {
            dispatch(updateCurrentEvent(event));
        },
        createEvent: event => {
            dispatch(createEvent(event));
        }
    };
};

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(
    FriendsList
);

export default FriendsListContainer;
