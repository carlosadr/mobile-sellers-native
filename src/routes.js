import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import FristStep from './screens/RegisterScreen/FristStep';
import LastStep from './screens/RegisterScreen/LastStep';
import LoginScreenEmail from './screens/LoginScreenEmail';

import DashboardScreen from './screens/DashboardScreen';
import SalesScreen from './screens/SalesScreen';
import ProductsScreen from './screens/ProductsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function ScreenTab() {
    return(
        <Tab.Navigator
            screenOptions={{ headerShown : false }}>
            <Tab.Screen name="Dashboard" component={ DashboardScreen } />
            <Tab.Screen name="Vendas" component={ SalesScreen } />
            <Tab.Screen name="Produtos" component={ ProductsScreen } />
            <Tab.Screen name="Configurações" component={ SettingsScreen } />
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
                <Stack.Screen name="FristStep" component={ FristStep } />
                <Stack.Screen name="LastStep" component={ LastStep } />
                <Stack.Screen name="LoginScreenEmail" component={ LoginScreenEmail } />
                <Stack.Screen name="ScreenTab" component={ ScreenTab } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}