import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FlatList } from 'react-native-gesture-handler'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { 
    imgBackground,
} from '../../../components/utils/Images'

import Header from '../../../components/Header';
import * as Colors from '../../../components/utils/Colors';
import styles from './styles';
import api from '../../../service/api';

export default function DashboardScreen () {
    return (
        <ImageBackground style={{flex : 1}} source={ imgBackground }>
            <View style={ styles.containerHeader } >
                <Header />
            </View>
            <View style={ styles.containerContants }>
                <FlatList style={[ styles.containerExtra, styles.containerShadow ]}>

                </FlatList>
            </View>
        </ImageBackground>
    )
}