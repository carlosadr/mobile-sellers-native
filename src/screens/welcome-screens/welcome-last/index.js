import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles';
import img2 from '../../../../assets/images-welcome-screens/img2.png';

export default function WelcomeLastScreen () {
    return(
        <View style={styles.container}>
            <Text style={styles.p4}>
                Nossa <Text style={styles.strong}>missão</Text> é ajudar você a
            </Text>
            <Text style={styles.p5}>
                alavancar suas <Text style={styles.strong}>vendas</Text>.
            </Text>
            <Text style={styles.p6}>
                E alcançar novos <Text style={styles.strong}>clientes</Text> em
            </Text>
            <Text style={styles.p7}>
                todo território <Text style={styles.strong}>nacional</Text>.
            </Text>
            <Image source={img2} style={styles.img2} />
        </View>
    )
}