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

// export const createEvent = event => {
//     type: CREATE_EVENT, event;
// };

export function createEvent(event) {
    return { type: CREATE_EVENT, event };
}

export function updateCurrentEvent(event) {
    return { type: UPDATE_CURRENT_EVENT, event };
}
