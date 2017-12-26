import { createStore, compose } from 'redux';
import createReducer from 'app/redux/reducers/reducer_index';
import { GOING, MAYBE, NOT_GOING } from 'app/lib/defines';

export default function configureStore(navReducer) {
    var initialState = {
        account: {
            name: '',
            username: '',
            birthday: null
        },
        friend_groups: {
            GroupName1: ['JacksonUsername', 'JamesUsername', 'RahulUsername'],
            GroupName2: ['JimmyUsername', 'FlakersUsername', 'SharonUsername']
        },
        friends: {
            JacksonUsername: {
                name: 'Jackson'
            },
            JamesUsername: {
                name: 'James'
            },
            JillianUsername: {
                name: 'Jillian'
            },
            JimmyUsername: {
                name: 'Jimmy'
            },
            FlakersUsername: {
                name: 'Flakers'
            },
            RahulUsername: {
                name: 'Rahul'
            },
            SharonUsername: {
                name: 'Sharon'
            },
            JohnUsername: {
                name: 'John'
            }
        },
        events: {
            1123: {
                name: 'Skiing',
                status: GOING,
                location: 'Charlotte',
                startTime: '2017-12-25T09:50:50.868Z',
                people: {
                    JacksonUsername: GOING,
                    JamesUsername: GOING,
                    JillianUsername: GOING,
                    JimmyUsername: GOING,
                    FlakersUsername: MAYBE,
                    RahulUsername: NOT_GOING,
                    SharonUsername: NOT_GOING,
                    JohnUsername: NOT_GOING
                },
                description: 'description of the event'
            },
            12412: {
                name: 'Chilling',
                status: GOING,
                location: 'Oak Ridge',
                startTime: '2017-12-25T09:50:50.868Z',
                people: {
                    JacksonUsername: GOING,
                    JamesUsername: GOING,
                    JillianUsername: GOING,
                    JimmyUsername: GOING,
                    FlakersUsername: MAYBE,
                    RahulUsername: NOT_GOING,
                    SharonUsername: NOT_GOING,
                    JohnUsername: NOT_GOING
                },
                description: 'description of the event'
            },
            123356: {
                name: 'Balling',
                status: GOING,
                location: 'Church',
                startTime: '2017-12-25T09:50:50.868Z',
                people: {
                    JacksonUsername: GOING,
                    JamesUsername: GOING,
                    JillianUsername: GOING,
                    JimmyUsername: GOING,
                    FlakersUsername: MAYBE,
                    RahulUsername: NOT_GOING,
                    SharonUsername: NOT_GOING,
                    JohnUsername: NOT_GOING
                },
                description: 'description of the event'
            }
        },
        current_event: {
            name: '',
            status: GOING,
            location: '',
            startTime: null,
            people: {},
            description: ''
        }
    };
    return createStore(createReducer(), initialState);
}
