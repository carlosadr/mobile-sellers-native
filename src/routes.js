import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import LoginScreenEmail from './screens/LoginScreenEmail'

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ headerShown : false }}>
                <Stack.Screen name="WelcomeScreen" component={ WelcomeScreen } />
                <Stack.Screen name="LoginScreen" component={ LoginScreen } />
                <Stack.Screen name="LoginScreenEmail" component={ LoginScreenEmail } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}