import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground } from 'react-native';
import { ChevronRight } from 'react-native-feather';

import imgBackground from "../../../assets/background-2.png";
import imgLogo from "../../../assets/logo.png";

import * as Icon from "../../components/Buttons";
import { orange } from '../../components/Colors';

import styles from './styles';

export default function LoginScreenEmail () {

    const navigation = useNavigation();

    function navigationToScreenTab() {
        console.log("Botao de ir para Tab Screen acionado.")
        navigation.navigate('ScreenTab');
    }

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

                    <Icon.Solid 
                        label="Avançar para Tab Screen" 
                        color={orange} 
                        rightIcon={ ChevronRight } 
                        onPress={()=>{navigationToScreenTab()}}
                    />
                    
                </View>
            </View>
        </ImageBackground>
    )
};