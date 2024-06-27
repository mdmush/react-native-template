import * as React from 'react';
import { Text } from 'react-native';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';

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

function Dashboard() {
  let tabBarIcon = ({
    color,
    route,
  }: {
    color: string;
    route: RouteProp<ParamListBase, string>;
  }) => {
    const routeName = route.name;
    let iconName = '';
    if (routeName === 'Tab1Screen') {
      iconName = 'user-circle';
    } else if (routeName === 'Tab2Screen') {
      iconName = 'user-circle';
    } else if (routeName === 'Tab3Screen') {
      iconName = 'user-circle';
    } else if (routeName === 'Tab4Screen') {
      iconName = 'user-circle';
    }
    return <FontAwesome name={iconName} size={16} color={color} />;
  };
  let tabBarLabel = ({
    focused,
    route,
  }: {
    focused: boolean;
    route: RouteProp<ParamListBase, string>;
  }) => {
    const routeName = route.name;
    let labelName = '';
    if (routeName === 'Tab1Screen') {
      labelName = 'Tab1';
    } else if (routeName === 'Tab2Screen') {
      labelName = 'Tab2';
    } else if (routeName === 'Tab3Screen') {
      labelName = 'Tab3';
    } else if (routeName === 'Tab4Screen') {
      labelName = 'Tab4';
    }
    return (
      <Text
        style={[
          { textAlign: 'center', fontSize: 11, marginTop: -5, marginBottom: 5 },
          focused ? { color: colors.PRIMARY, fontWeight: '600' } : {},
        ]}>
        {labelName}
      </Text>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => tabBarIcon({ color, route }),
        tabBarLabel: ({ focused }) => tabBarLabel({ focused, route }),
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarInactiveTintColor: 'gray',
        unmountOnBlur: true,
      })}>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="Tab3Screen" component={Tab3Screen} />
      <Tab.Screen name="Tab4Screen" component={Tab4Screen} />
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
              <Stack.Screen name="Splashscreen" component={Splashscreen} />
              <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default Routes;
