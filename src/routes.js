import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import WelcomeScreens from './screens/welcome-screens'

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown : false }}>
                <Stack.Screen name="Welcome Screens" component={WelcomeScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}