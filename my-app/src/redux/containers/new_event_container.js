import { connect } from 'react-redux';
import NewEvent from 'src/components/new_event';
import { updateCurrentEvent } from 'src/redux/actions/actions';
import { getNavParams } from 'src/lib/lib';

function getEvents(state) {
    var events = [];
    for (const eventId in state.events) {
        const event = state.events[eventId];
        events.push({ name: event.name, location: event.location });
    }
    return events;
}

const mapStateToProps = state => {
    return {
        // all names and locations of every event
        // [{name, location}, {...}, ...]
        events: getEvents(state),
        username: state.account.username
    };
};

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
