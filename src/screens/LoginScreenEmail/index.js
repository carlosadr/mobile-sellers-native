import React, { useState }from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { User } from 'react-native-feather';

import imgBackground from "../../../assets/background-2.png";
import imgLogo from "../../../assets/logo.png";

import styles from './styles';

export default function LoginScreenEmail () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <ImageBackground style={styles.imgBackground} source={ imgBackground }>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Image style={styles.imgLogo} source={imgLogo} />
                </View>

                <View style={styles.containerSubTitle}>
                    <Text style={styles.text}>
                        Faça seu login utilizando uma das formas abaixo.
                    </Text>
                </View>

                <View style={styles.containerContants}>
                    
                </View>
            </View>
        </ImageBackground>
    )
};