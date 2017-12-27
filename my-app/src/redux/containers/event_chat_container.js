import { connect } from 'react-redux';
import EventChat from 'src/components/event_chat';
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

const EventChatContainer = connect(mapStateToProps, mapDispatchToProps)(
    EventChat
);

export default EventChatContainer;
