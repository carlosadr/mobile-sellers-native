import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PieChart, ShoppingBag, Package, Settings } from 'react-native-feather'

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
            screenOptions={({ route }) => ({
                tabBarIcon : ({ focused, color, size }) => {
                    if ( route.name === 'Dashboard' ) {
                        return <PieChart color='#1AA1BE' size={8} />
                    } else if ( route.name === 'Vendas' ) {
                        return <ShoppingBag color='#1AA1BE' size={8} />
                    } else if ( route.name === 'Produtos' ) {
                        return <Package color='#1AA1BE' size={8} />
                    } else if ( route.name === 'Configurações' ) {
                        return <Settings color='#1AA1BE' size={8} />
                    }
                }
            }), 
            { headerShown : false }}
            tabBarOptions = {{
                activeTintColor : '#1AA1BE',
                inactiveTintColor : '#C4C4C4'
            }}>
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