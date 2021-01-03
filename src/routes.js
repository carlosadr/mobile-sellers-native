import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import WelcomeScreen from './screens/WelcomeScreen'

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="WelcomeScreen" 
                screenOptions={{ headerShown : false }}>

                <Stack.Screen name="WelcomeScreen" component={ WelcomeScreen } />

            </Stack.Navigator>
        </NavigationContainer>
    )
}