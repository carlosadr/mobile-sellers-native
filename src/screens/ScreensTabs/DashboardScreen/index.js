import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ChevronRight } from 'react-native-feather';

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
    const navigation = useNavigation();

    async function navigateToLogout() {
        AsyncStorage.clear()
        navigation.navigate('LoginScreenEmail')
    }

    return (
        <ImageBackground style={{flex : 1}} source={ imgBackground }>
            <View style={ styles.containerHeader } >
                <Header />
            </View>
            <View style={ styles.containerContants }>
                <View style={ styles.containerFeatures }>
                    <View style={ styles.containerFeaturesRow } >
                        <Text style={ styles.containerFeaturesHeader } >
                            Faturamento
                        </Text>
                        <ChevronRight size={16} color={Colors.blue} />
                    </View>
                    <View style={ styles.containerFeaturesRow } >
                        <Text>
                            Balanço total do mês
                        </Text>
                        <Text>
                            R$ 5.864,85
                        </Text>
                    </View>
                    <View style={ styles.containerFeaturesRow } >
                        <Text>
                            Balanço total do ano
                        </Text>
                        <Text>
                            R$ 565.298,85
                        </Text>
                    </View>
                </View>
                <View style={ styles.containerVisitas }>

                </View>
                <FlatList style={styles.containerExtra}>

                </FlatList>
            </View>
        </ImageBackground>
    )
}