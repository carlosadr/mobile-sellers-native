import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import Button from '../../components/Button'

import styles from './styles'
import api from '../../service/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function DashboardScreen () {
    const navigation = useNavigation();

    async function navigateToLogout() {
        const TOKEN = async () => { return await AsyncStorage.getItem('MarkBase:token', () => {return ""}) }

        await api.put('/logoutVendedor/', TOKEN() ).then( () => {
            AsyncStorage.clear()

            navigation.navigate('Routes')
        } ).catch ( (response) => {
            console.log( TOKEN() )
            console.log("Erro desconhecido. " + response)
        } )
    }

    return (
        <View style={{ justifyContent : 'center', alignItems : 'center', flex : 1 }}> 
            <Text>Dashboard</Text>

            <Button label="Logout" color="blue" type="text" onPress={ () => navigateToLogout() } />
        </View>
    )
}