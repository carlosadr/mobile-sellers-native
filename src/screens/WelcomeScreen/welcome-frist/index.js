import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles';
import img1 from '../../../../assets/images-welcome-screens/img1.png';

export default function WelcomeFristScreen () {
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>
                Olá seja bem vindo(a)!
            </Text>

            <Image source={img1} style={styles.img1} />

            <Text style={styles.p1}>
                A <Text style={styles.strong}>MarkBase</Text> - Sellers é um
            </Text>
            <Text style={styles.p2}>
                ambiente totalmente pensado
            </Text>
            <Text style={styles.p3}>
                em você, <Text style={styles.strong}>pequena</Text> ou <Text style={styles.strong}>grande</Text> empresa.
            </Text>
        </View>
    )
}