import React from 'react'

import { View, Text, ImageBackground } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Button from '../../components/Button'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header';
import styles from './styles'
import api from '../../service/api'

export default function DashboardScreen () {
    const navigation = useNavigation();

    async function navigateToLogout() {
        AsyncStorage.clear()
        navigation.navigate('LoginScreenEmail')
    }

    return (
        <ImageBackground style={{flex : 1}} source={require('../../../assets/background-2.png')}>
            <View style={ styles.containerHeader } >
                <Header />
            </View>
            <View style={ styles.containerContants }>
                <View style={ styles.containerFaturamento } >

                </View>
                <View style={ styles.containerVisitas }>

                </View>
                <FlatList style={styles.containerExtra}>

                </FlatList>
            </View>
        </ImageBackground>
    )
}