import React from 'react';
import { View, FlatList, Text, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { 
    imgBackground,
} from '../../../components/utils/Images';

import Header from '../../../components/Header';
import * as Colors from '../../../components/utils/Colors';
import styles from './styles';

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
                        <Feather name="chevron-left" size={16} color={Colors.blue} />
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