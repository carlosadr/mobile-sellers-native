import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground } from 'react-native';
import { ChevronRight, Eye, Lock } from 'react-native-feather';

import imgBackground from "../../../assets/background-2.png";
import imgLogo from "../../../assets/logo.png";

// import * as Icon from "../../components/Buttons";
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as Colors from '../../components/Colors';

import styles from './styles';

export default function LoginScreenEmail () {

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const checkEmail = () => {
        return email ? false : true
    }
    const checkPassword = () => {
        return password ? false : true
    }

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

                    <Button
                        label="Avançar para Tab Screen" 
                        type = "solid"
                        color="blue" 
                        rightIcon={ ChevronRight } 
                        onPress={()=>{navigationToScreenTab()}}
                        marginVertical={6}
                    />

                    <Button
                        label="Avançar para Tab Screen" 
                        type = "outlined"
                        color="blue" 
                        rightIcon={ ChevronRight } 
                        onPress={()=>{navigationToScreenTab()}}
                        marginVertical={6}
                    />

                    <Button
                        label="Avançar para Tab Screen" 
                        type = "text"
                        color="blue" 
                        rightIcon={ ChevronRight } 
                        onPress={()=>{navigationToScreenTab()}}
                        marginVertical={6}
                    />
                    
                </View>
            </View>
        </ImageBackground>
    )
};