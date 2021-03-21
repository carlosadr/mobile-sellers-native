import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Bell } from 'react-native-feather';
import * as Colors from '../utils/Colors';

import styles from './styles';

export default function Header () {
    return (
        <View style={styles.containerHeader}>
            <View style={styles.containerFristRow}>
                <Image style={styles.containerLogo} source={require('../../../assets/logo-marca.png')} />
                <TouchableOpacity>
                    <Bell size={16} color={Colors.white}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLastRow}>
                <TouchableOpacity>
                    <Image style={styles.containerAvatar} source={require('../../../assets/default-user.png')}/>
                </TouchableOpacity>

                <View>
                    <Text>
                        Nome da Loja
                    </Text>
                    <Text >
                        Nome do Usuario
                    </Text>
                </View>

                <View>
                    <Text>
                        Plano
                    </Text>
                    <Text >
                        Preço
                    </Text>
                </View>
            </View>
        </View>
    )
}