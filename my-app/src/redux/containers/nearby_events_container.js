import { connect } from 'react-redux';
import moment from 'moment';
import NearbyEvents from 'src/components/nearby_events';

function getEvents(state) {
    const events = state.events;

    var myEvents = [];
    var current = null;
    for (const eventId in state.events) {
        const event = state.events[eventId];
        // check if date is the same
        if (
            current &&
            moment(event.startTime).format('ddd  MMM D') == current.day
        ) {
            // add to current events
            current.data.push(event);
        } else {
            if (current) {
                myEvents.push(current);
            }
            // create new list for day's events
            current = {
                day: moment(event.startTime).format('ddd  MMM D'),
                data: [event]
            };
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
    events: getEvents(state),
    nav: state.nav
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

const NearbyEventsContainer = connect(mapStateToProps, mapDispatchToProps)(
    NearbyEvents
);

export default NearbyEventsContainer;
