import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { ChevronRight } from 'react-native-feather';

import { FlatList } from 'react-native-gesture-handler'

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

                <View style={[ styles.containerFeatures, styles.containerShadow ]}>
                    <View style={ styles.containerFeaturesRow } >
                        <Text style={ styles.containerFeaturesHeader } >
                            Faturamento
                        </Text>
                        <ChevronRight size={16} color={Colors.blue} />
                    </View>
                    <View style={ styles.containerFeaturesRow } >
                        <Text style={{ color : Colors.noEvidence }} >
                            Balanço total do mês
                        </Text>
                        <Text style={ styles.containerFeaturesValueMes }>
                            R$ 5.864,85
                        </Text>
                    </View>
                    <View style={ styles.containerFeaturesRow } >
                        <Text style={{ color : Colors.noEvidence }} >
                            Balanço total do ano
                        </Text>
                        <Text style={ styles.containerFeaturesValueAno }>
                            R$ 565.298,85
                        </Text>
                    </View>
                </View>

                <View style={ [styles.containerVisitas, styles.containerShadow ] }>

                </View>

                <FlatList style={[ styles.containerExtra, styles.containerShadow ]}>

                </FlatList>
            </View>
        </ImageBackground>
    )
}