import { NavigationActions } from 'react-navigation';

export const GOING = 1;
export const MAYBE = 0;
export const NOT_GOING = -1;

// props is usually this.props
export function getNavParams(props) {
    const index = props.nav.index;
    return props.nav.routes[index].params;
}

export function back(dispatch) {
    dispatch(
        NavigationActions.back({
            key: null
        })
    );
}

// dispatch is usually this.props.navigation.dispatch
// or this.props.dispatch
export function navigate(dispatch, routeName, params = {}) {
    dispatch(
        NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName,
            params
        })
    );
}

export function reset(dispatch, routeName: string, params?: NavigationParams) {
    dispatch(
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName,
                    params
                })
            ]
        })
    );
}

export function resetFrom(
    dispatch,
    routeFromName: string,
    routeToName: string,
    params?: NavigationParams
) {
    dispatch(
        NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({
                    routeName: routeFromName,
                    params
                }),
                NavigationActions.navigate({
                    routeName: routeToName,
                    params
                })
            ]
        })
    );
}

export function resetToTab(
    dispatch,
    routeName: string,
    params?: NavigationParams
) {
    // dispatch(
    // NavigationActions.reset({
    //     index: 0,
    //     actions: [
    //         NavigationActions.navigate({
    //             routeName: 'Home',
    //             action: NavigationActions.navigate({ routeName: routeName })
    //         })
    //     ]
    // })
    // );
    Promise.all([reset(dispatch, 'Home', params)]).then(() =>
        navigate(dispatch, routeName, params)
    );
}
