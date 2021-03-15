import React, { useState } from 'react';

//#region Stack do React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//#endregion

//#region Telas do APP;
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import FristStep from './screens/RegisterScreen/FristStep';
import LastStep from './screens/RegisterScreen/LastStep';
import LoginScreenEmail from './screens/LoginScreenEmail';

import DashboardScreen from './screens/DashboardScreen';
import SalesScreen from './screens/SalesScreen';
import ProductsScreen from './screens/ProductsScreen';
import SettingsScreen from './screens/SettingsScreen';
//#endregion

//#region Imports importantes
import Ionicons from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Colors from '../src/components/utils/Colors'
//#endregion

const [ tokenLocal, setTokenLocal ] = useState()

const TOKEN = async () => { 
    return await AsyncStorage.getItem('token', ( err, item ) => { setTokenLocal( item ) } )
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ScreensTab () {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if ( route.name === "Dashboard" ) {
                                iconName = "pie-chart"
                            } else if ( route.name === "Vendas" ) {
                                iconName = "shopping-bag"
                            } else if ( route.name === "Produtos" ) {
                                iconName = "package"
                            } else if ( route.name === "Configurações" ) {
                                iconName = "settings"
                            }
                            
                            return <Ionicons name={iconName} size={size} color={color} />;
                            
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: Colors.blue,
                        inactiveTintColor: Colors.noEvidence,
                    }}
                >
                    <Tab.Screen name='Dashboard' component={ DashboardScreen } />
                    <Tab.Screen name='Vendas' component={ SalesScreen } />
                    <Tab.Screen name='Produtos' component={ ProductsScreen } />
                    <Tab.Screen name='Configurações' component={ SettingsScreen } />
                </Tab.Navigator>
    )
}

export default function Routes() {
    
    TOKEN();

    return(
        <NavigationContainer>
            { tokenLocal ? (
                <Stack.Navigator 
                screenOptions={{ headerShown : false }}>
                    <Stack.Screen name="WelcomeScreen" component={ WelcomeScreen } />
                    <Stack.Screen name="LoginScreen" component={ LoginScreen } />
                    <Stack.Screen name="FristStep" component={ FristStep } />
                    <Stack.Screen name="LastStep" component={ LastStep } />
                    <Stack.Screen name="LoginScreenEmail" component={ LoginScreenEmail } />
                    <Stack.Screen name="ScreensTab" component = { ScreensTab } />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator 
                    screenOptions={{ headerShown : false }}>
                    <Stack.Screen name="ScreensTab" component = { ScreensTab } />
                    <Stack.Screen name="Routes" component = { Routes } />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}