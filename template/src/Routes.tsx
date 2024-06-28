import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer, ParamListBase, RouteProp,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from 'store/store';
import {PersistGate} from 'redux-persist/integration/react';

// Screens
import Splashscreen from './screens/Splashscreen';

// Tabs
import Tab1Screen from './tab-screens/Tab1Screen';
import Tab2Screen from './tab-screens/Tab2Screen';
import Tab3Screen from './tab-screens/Tab3Screen';
import Tab4Screen from './tab-screens/Tab4Screen';
import colors from 'constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

interface arrayTabsType {
    key: string;
    name: string;
    icon?: string;
    component: () => React.JSX.Element;
}

function Dashboard() {

    const tabItems: arrayTabsType[] = [
        {key: 'Tab1Screen', name: 'Tab1Screen', icon: 'user-circle', component: Tab1Screen},
        {key: 'Tab2Screen', name: 'Tab2Screen', icon: 'user-circle', component: Tab2Screen},
        {key: 'Tab3Screen', name: 'Tab3Screen', icon: 'user-circle', component: Tab3Screen},
        {key: 'Tab4Screen', name: 'Tab4Screen', icon: 'user-circle', component: Tab4Screen},
    ]

    let tabBarIcon = ({
                          color,
                          route,
                      }: {
        color: string;
        route: RouteProp<ParamListBase, string>;
    }) => {
        const routeName = route.name;
        const tab = tabItems.find((item: arrayTabsType) => item.key === routeName);
        let iconName: string = tab?.icon ?? "";
        return <FontAwesome name={iconName} size={16} color={color}/>;
    };

    let tabBarLabel = ({
                           focused,
                           route,
                       }: {
        focused: boolean;
        route: RouteProp<ParamListBase, string>;
    }) => {
        const routeName = route.name;
        const tab = tabItems.find((item: arrayTabsType) => item.key === routeName);
        const labelName = tab ? tab.name : routeName;

        return (
            <Text
                style={[
                    {textAlign: 'center', fontSize: 11, marginTop: -5, marginBottom: 5},
                    focused ? {color: colors.PRIMARY, fontWeight: '600'} : {},
                ]}>
                {labelName}
            </Text>
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({color}) => tabBarIcon({color, route}),
                tabBarLabel: ({focused}) => tabBarLabel({focused, route}),
                tabBarActiveTintColor: colors.PRIMARY,
                tabBarInactiveTintColor: 'gray',
                unmountOnBlur: true,
            })}>
            {
                tabItems.map((item: arrayTabsType) => (
                    <Tab.Screen
                        key={item.key}
                        name={item.key}
                        component={item.component}
                    />
                ))
            }
        </Tab.Navigator>
    );
}

function Routes() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                headerShown: false,
                                // animation: 'fade', // for fade transition
                                // animationDuration: 500, // for fade delay
                            }}>
                            <Stack.Screen name="Splashscreen" component={Splashscreen}/>
                            <Stack.Screen name="Dashboard" component={Dashboard}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
}

export default Routes;
