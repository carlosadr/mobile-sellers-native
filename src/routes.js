import React, { useState, useEffect } from 'react';

//#region Stack do React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//#endregion

//#region Telas do APP;
import WelcomeScreen from './screens/ScreensWelcome/WelcomeScreen';
import LoginScreen from './screens/ScreensWelcome/LoginScreen';
import FristStep from './screens/ScreensWelcome/RegisterScreen/FristStep';
import LastStep from './screens/ScreensWelcome/RegisterScreen/LastStep';
import LoginScreenEmail from './screens/ScreensWelcome/LoginScreenEmail';

import DashboardScreen from './screens/ScreensTabs/DashboardScreen';
import SalesScreen from './screens/ScreensTabs/SalesScreen';
import ProductsScreen from './screens/ScreensTabs/ProductsScreen';
import SettingsScreen from './screens/ScreensTabs/SettingsScreen';
//#endregion

//#region Imports importantes
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Colors from '../src/components/utils/Colors'
//#endregion

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ScreensTab () {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    size = focused ? 24 : 18;
                    
                    if ( route.name === "Dashboard" ) {
                        iconName = "pie-chart"
                    } else if ( route.name === "Vendas" ) {
                        iconName = "shopping-bag"
                    } else if ( route.name === "Produtos" ) {
                        iconName = "package"
                    } else if ( route.name === "Configurações" ) {
                        iconName = "settings"
                    }
                    
                    return <Feather name={iconName} size={size} color={color} />;
                    
                },
            })}

            tabBarOptions={{
                activeTintColor: Colors.blue,
                inactiveTintColor: Colors.noEvidence,
                safeAreaInsets : { top : 50, bottom : 180 },
                style : { height: "8%", paddingBottom : 8 },
            }}
        >
            <Tab.Screen name='Dashboard' component={ DashboardScreen } />
            <Tab.Screen name='Vendas' component={ SalesScreen } />
            <Tab.Screen name='Produtos' component={ ProductsScreen } />
            <Tab.Screen name='Configurações' component={ SettingsScreen } />
        </Tab.Navigator>
    )
}

function ScreensWelcome () {
    return (
        <Stack.Navigator 
            screenOptions={{ 
                headerShown : false 
            }}
            >
            <Stack.Screen name="WelcomeScreen" component={ WelcomeScreen } />
            <Stack.Screen name="LoginScreen" component={ LoginScreen } />
            <Stack.Screen name="FristStep" component={ FristStep } />
            <Stack.Screen name="LastStep" component={ LastStep } />
            <Stack.Screen name="LoginScreenEmail" component={ LoginScreenEmail } />
            <Stack.Screen name="ScreensTab" component = { ScreensTab } />
        </Stack.Navigator>
    )
}

export default function Routes() {
    
    const [ tokenLocal, setTokenLocal ] = useState()

    const getTokenLocal = async () => { 
        return await AsyncStorage.getItem('token', 
            ( err, item ) => { 
                item !== null ? console.log("Token está ativo!") : console.log("Token vázio.")
                setTokenLocal( item );
            } )
    }

    useEffect(() => {
        getTokenLocal()
    }, [])

    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{ headerShown : false }}>
                { tokenLocal === null ? 
                    <Stack.Screen name="ScreensWelcome" component = { ScreensWelcome } />
                    :
                    <Stack.Screen name="ScreensTab" component = { ScreensTab } />
                }
                <Stack.Screen name="LoginScreenEmail" component = { LoginScreenEmail } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}