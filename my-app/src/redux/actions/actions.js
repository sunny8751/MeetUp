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

// export const createEvent = event => {
//     type: CREATE_EVENT, event;
// };

export function createEvent(id, event) {
    return { type: CREATE_EVENT, id, event };
}

export function setEventsCounter(eventsCounter) {
    return { type: SET_EVENTS_COUNTER, eventsCounter };
}
