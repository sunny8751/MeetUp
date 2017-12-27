import { connect } from 'react-redux';
import FriendsList from 'src/components/friends_list';
import {
    createEvent,
    updateCurrentEvent,
    setEventsCounter
} from 'src/redux/actions/actions';

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

const mapStateToProps = state => ({
    // list of all friends sorted by group
    // [{ group: 'favorite', data: ['JacksonUsername', 'JamesUsername'] },
    // { group: 'brothers', data: ['JimmyUsername'] } ]
    groups: getGroups(state),
    // {JacksonUsername: {name: 'Jackson'},
    // JamesUsername: { name: 'James' }}
    friends: state.friends,
    eventsCounter: state.other.eventsCounter,
    nav: state.nav
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        updateCurrentEvent: event => {
            dispatch(updateCurrentEvent(event));
        },
        createEvent: (id, event) => {
            dispatch(createEvent(id, event));
        },
        setEventsCounter: eventsCounter => {
            dispatch(setEventsCounter(eventsCounter));
        }
    };
};

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(
    FriendsList
);

export default FriendsListContainer;
