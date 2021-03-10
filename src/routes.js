import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreenEmail from './screens/LoginScreenEmail';

const Tab = createBottomTabNavigator();

function ScreenTab() {
    return(
        <Tab.Navigator 
            screenOptions={{ headerShown : false }}>
            <Tab.Screen name="LoginScreen" component={ LoginScreen } />
            <Tab.Screen name="LoginScreenEmail" component={ LoginScreenEmail } />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ headerShown : false }}>
                <Stack.Screen name="WelcomeScreen" component={ WelcomeScreen } />
                <Stack.Screen name="LoginScreen" component={ LoginScreen } />
                <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
                <Stack.Screen name="LoginScreenEmail" component={ LoginScreenEmail } />
                <Stack.Screen name="ScreenTab" component={ ScreenTab } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}