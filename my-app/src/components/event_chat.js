import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import NavigatorService from 'src/services/navigator';
import Chat from 'src/components/chat';
import {
    GOING,
    MAYBE,
    NOT_GOING,
    getNavParams,
    navigate,
    back
} from 'src/lib/lib';

var styles = require('src/styles/styles');

export default class EventChat extends Component {
    constructor(props) {
        super(props);
        this.state = getNavParams(this.props).event;
    }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: { height: 80 },
        headerTitle: (
            <TouchableOpacity
                style={{ height: 80, width: 200 }}
                onPress={() =>
                    navigate(
                        navigation.dispatch,
                        'EventDetails',
                        navigation.state.params
                    )
                }
            >
                <Text style={eventChatStyles.headerText}>
                    {navigation.state.params.event.name}
                </Text>
                <View style={eventChatStyles.horizontalView}>
                    <Icon name="ios-time-outline" type="ionicon" size={22} />
                    <Text
                        style={[
                            eventChatStyles.subheaderText,
                            { paddingLeft: 5 }
                        ]}
                    >
                        {moment(navigation.state.params.event.startTime).format(
                            'MMM D, YYYY h:mm a'
                        )}
                    </Text>
                </View>

                <View style={eventChatStyles.horizontalView}>
                    <Icon name="location" type="evilicon" size={22} />
                    <Text style={eventChatStyles.subheaderText}>
                        {navigation.state.params.event.location
                            ? navigation.state.params.event.location
                            : 'Choose location'}
                    </Text>
                </View>
            </TouchableOpacity>
        ),
        headerBackTitle: null,
        headerRight: (
            <TouchableOpacity
                style={[eventChatStyles.headerTop, { right: 0 }]}
                onPress={() =>
                    navigate(
                        navigation.dispatch,
                        'EventDetails',
                        navigation.state.params
                    )
                }
            >
                <View style={styles.headerRightIconView}>
                    <Icon
                        name="ios-information-circle-outline"
                        type="ionicon"
                        size={32}
                    />
                </View>
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity
                style={[eventChatStyles.headerTop, { left: 9 }]}
                onPress={() => back(navigation.dispatch)}
            >
                <View style={styles.headerRightIconView}>
                    <Icon name="ios-arrow-back" size={36} type="ionicon" />
                </View>
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <View style={styles.pageContainer}>
                <ScrollView
                    contentContainerStyle={eventChatStyles.container}
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode="on-drag"
                >
                    {/* Chat */}
                    <Chat />
                </ScrollView>
            </View>
        );
    }
}

const eventChatStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    text: {
        fontSize: 18,
        alignSelf: 'center'
    },
    headerText: {
        fontSize: 18,
        alignSelf: 'center',
        paddingTop: 5
    },
    subheaderText: {
        fontSize: 14,
        alignSelf: 'center'
    },
    detailsText: {
        fontSize: 14,
        alignSelf: 'center'
    },
    horizontalView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    headerTop: {
        position: 'absolute',
        top: 5
    }
});
