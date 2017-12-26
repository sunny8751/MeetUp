import { connect } from 'react-redux';
import NewEvent from 'app/components/new_event';
import { updateCurrentEvent } from 'app/redux/actions/actions';

function getEvents(state) {
    var events = [];
    for (const eventId in state.events) {
        const event = state.events[eventId];
        events.push({ name: event.name, location: event.location });
    }
    return events;
}

const mapStateToProps = state => ({
    // all names and locations of every event
    // [{name, location}, {...}, ...]
    events: getEvents(state)
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        updateCurrentEvent: event => {
            dispatch(updateCurrentEvent(event));
        }
    };
};

const NewEventContainer = connect(mapStateToProps, mapDispatchToProps)(
    NewEvent
);

export default NewEventContainer;
