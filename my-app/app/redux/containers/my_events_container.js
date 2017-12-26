import { connect } from 'react-redux';
import moment from 'moment';
import MyEvents from 'app/components/my_events';

function getEvents(state) {
    const events = state.events;

    var myEvents = [];
    var current = null;
    for (const eventId in state.events) {
        const event = state.events[eventId];
        if (!current) {
            // create new list for day's events
            current = {
                day: moment(event.startTime).format('ddd  MMM D'),
                data: [event]
            };
        } else {
            // check if date is the same
            if (moment(event.startTime).format('ddd  MMM D') == current.day) {
                // add to current events
                current.data.push(event);
            } else {
                myEvents.push(current);
                current = null;
            }
        }
    }
    if (current) {
        myEvents.push(current);
    }
    return myEvents;
}

const mapStateToProps = state => ({
    // all information of every event
    // [{name, location, startTime, endTime, ...}, {...}, ...]
    events: getEvents(state)
});

const MyEventsContainer = connect(mapStateToProps)(MyEvents);

export default MyEventsContainer;
