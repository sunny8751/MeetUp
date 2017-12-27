import { combineReducers } from 'redux';
import {
    // account
    CHANGE_NAME,
    // events
    CREATE_EVENT,
    // friends
    ADD_FRIEND,
    // friend groups
    ADD_FRIEND_GROUP,
    // other
    SET_EVENTS_COUNTER
} from 'src/redux/actions/types';
// import friendsReducer from 'src/redux/reducers/friends_reducer';
// import accountReducer from 'src/redux/reducers/account_reducer';
// import friendGroupsReducer from 'src/redux/reducers/friend_groups_reducer';
// import eventsReducer from 'src/redux/reducers/events_reducer';

function accountReducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_NAME:
            // name: new name
            return Object.assign({}, state, { name: [action.name] });
        default:
            return state;
    }
}

function friendsReducer(state = {}, action) {
    switch (action.type) {
        case ADD_FRIEND:
            // username: new friend username
            // friend: new friend information (JSON)
            return [
                ...state,
                {
                    [action.username]: [action.friend]
                }
            ];
        default:
            return state;
    }
}

function friendGroupsReducer(state = {}, action) {
    switch (action.type) {
        case ADD_FRIEND_GROUP:
            // return Object.assign({}, state, {[action.group]: [state]})
            return state;
        default:
            return state;
    }
}

function eventsReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_EVENT:
            // id: new event id
            // event: new event information (JSON)
            console.log({
                [action.id]: action.event
            });
            return Object.assign({}, state, {
                [action.id]: action.event
            });
        default:
            return state;
    }
}

function otherReducer(state = {}, action) {
    switch (action.type) {
        case SET_EVENTS_COUNTER:
            // set events counter
            return Object.assign({}, state, {
                eventsCounter: action.eventsCounter
            });
        default:
            return state;
    }
}

export default function createReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        account: accountReducer,
        friends: friendsReducer,
        friend_groups: friendGroupsReducer,
        events: eventsReducer,
        other: otherReducer
    });
}
