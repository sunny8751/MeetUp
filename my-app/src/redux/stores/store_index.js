import { createStore, compose } from 'redux';
import createReducer from 'src/redux/reducers/reducer_index';
import { GOING, MAYBE, NOT_GOING } from 'src/lib/lib';

export default function configureStore(navReducer) {
    var initialState = {
        account: {
            name: 'Sunwoo Yim',
            username: 'sunny8751',
            birthday: '2017-12-25T09:50:50.868Z'
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
            0: {
                name: 'Ski',
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
                host: 'sunny8751',
                description: "It's winter why not"
            },
            1: {
                name: 'Chill',
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
                host: 'sunny8751',
                description: 'Idk what to do'
            },
            2: {
                name: 'Ball',
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
                host: 'sunny8751',
                description: 'I need physical activity in my life'
            }
        },
        other: {
            eventsCounter: 3
        }
    };
    return createStore(createReducer(navReducer), initialState);
}
