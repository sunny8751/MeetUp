import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Settings from 'src/components/settings';
import MyEventsContainer from 'src/redux/containers/my_events_container';
import NewEventContainer from 'src/redux/containers/new_event_container';
import NearbyEventsContainer from 'src/redux/containers/nearby_events_container';
import { navigate } from 'src/lib/lib';

var styles = require('src/styles/styles');

const HomeNavigator = TabNavigator(
    {
        MyEventsTab: {
            screen: MyEventsContainer,
            navigationOptions: ({ navigation }) => ({
                title: 'My Events',
                headerTintColor: 'black',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={focused ? 'ios-person' : 'ios-person-outline'}
                        type={'ionicon'}
                        style={{ color: tintColor }}
                        size={26}
                    />
                ),
                headerRight: (
                    <TouchableOpacity
                        onPress={() =>
                            navigate(navigation.dispatch, 'Settings')
                        }
                    >
                        <View style={styles.headerRightIconView}>
                            <Icon
                                name={'settings'}
                                type={'material'}
                                size={26}
                            />
                        </View>
                    </TouchableOpacity>
                )
            })
        },
        NewEventTab: {
            screen: NewEventContainer,
            navigationOptions: {
                title: 'New Event',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={
                            focused
                                ? 'ios-add-circle'
                                : 'ios-add-circle-outline'
                        }
                        type={'ionicon'}
                        style={{ color: tintColor }}
                        size={26}
                    />
                )
            }
        },
        NearbyEventsTab: {
            screen: NearbyEventsContainer,
            navigationOptions: {
                title: 'Nearby Events',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={focused ? 'ios-people' : 'ios-people-outline'}
                        type={'ionicon'}
                        style={{ color: tintColor }}
                        size={26}
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'NewEventTab',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'black'
            // showLabel: false
        },
        animationEnabled: false,
        swipeEnabled: true
    }
);

export default HomeNavigator;
