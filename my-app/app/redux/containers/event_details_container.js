import { connect } from 'react-redux';
import EventDetails from 'app/components/event_details';
import {} from 'app/redux/actions/actions';

function getEvent(state) {
    return state.current_event;
}

const mapStateToProps = state => ({
    // curret_event information (JSON)
    event: getEvent(state)
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
        // updateCurrentEvent: event => {
        //     dispatch(updateCurrentEvent(event));
        // },
        // createEvent: event => {
        //     dispatch(createEvent(event));
        // }
    };
};

const EventDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
    EventDetails
);

export default EventDetailsContainer;
