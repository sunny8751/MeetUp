import { connect } from 'react-redux';
import EventDetails from 'src/components/event_details';
import {} from 'src/redux/actions/actions';

const mapStateToProps = state => ({
    nav: state.nav
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch
        // createEvent: event => {
        //     dispatch(createEvent(event));
        // }
    };
};

const EventDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
    EventDetails
);

export default EventDetailsContainer;
