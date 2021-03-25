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
                <View style={[ styles.containerTitleProducts, styles.containerShadow ]} >
                    <Text style={ [styles.containerTitle, { flex : 2, textAlign : 'center' }]}>
                        Imagem
                    </Text>
                    <Text style={ [styles.containerTitle, { flex : 5 }]}>
                        Descrição
                    </Text>
                    <Text style={ [styles.containerTitle, { flex : 1 }]}>
                        Preço
                    </Text>
                </View>

                <FlatList style={ styles.containerListProducts }>
                    <View>

                    </View>
                </FlatList>
            </View>
        </ImageBackground>
    )
}