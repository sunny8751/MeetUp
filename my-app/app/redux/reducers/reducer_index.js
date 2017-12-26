import { combineReducers } from 'redux';
import {
    // account
    CHANGE_NAME,
    // events
    CREATE_EVENT,
    SEND_EVENT,
    // friends
    ADD_FRIEND,
    // friend groups
    ADD_FRIEND_GROUP,
    // current event
    UPDATE_CURRENT_EVENT
} from 'app/redux/actions/types';
// import friendsReducer from 'app/redux/reducers/friends_reducer';
// import accountReducer from 'app/redux/reducers/account_reducer';
// import friendGroupsReducer from 'app/redux/reducers/friend_groups_reducer';
// import eventsReducer from 'app/redux/reducers/events_reducer';

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
            return [
                ...state,
                {
                    [action.id]: [action.event]
                }
            ];
        case SEND_EVENT:
            // id: event id
            return state;
        default:
            return state;
    }
}

function currentEventReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_CURRENT_EVENT:
            // event: new event information (JSON)
            return Object.assign({}, state, action.event);
        default:
            return state;
    }
}

const applicationReducers = {
    account: accountReducer,
    friends: friendsReducer,
    friend_groups: friendGroupsReducer,
    events: eventsReducer,
    current_event: currentEventReducer
};

export default function createReducer() {
    return combineReducers(applicationReducers);
}
