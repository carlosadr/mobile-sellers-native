import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import imgBackground from "../../../assets/background-2.png";
import imgLogo from "../../../assets/logo.png";
import iconFacebook from "../../../assets/icons-social/icon-facebook.png";
import iconGoogle from "../../../assets/icons-social/icon-google.png";
import iconEmail from "../../../assets/icons-social/icon-email.png";

import styles from './styles';

export default function LoginScreen () {

    const navigation = useNavigation();

    function navigationToLogInEmail() {
        navigation.navigate('LoginScreenEmail');
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
                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={ [styles.buttonTouchable, styles.buttonTouchableFacebook] }>
                            <Image style={styles.icons} source={ iconFacebook }/>
                            <Text style={styles.textButtons}>Entrar usando Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ [styles.buttonTouchable, styles.buttonTouchableGoogle] }>
                            <Image style={styles.icons} source={ iconGoogle }/>
                            <Text style={styles.textButtons}>Entrar usando Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {navigationToLogInEmail()}} style={ [styles.buttonTouchable, styles.buttonTouchableEmail, styles.buttonShadow] }>
                            <Image style={styles.icons} source={ iconEmail }/>
                            <Text style={[styles.textButtons, {color : '#585D59'}]}>Entrar usando E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerRegister}>
                    <Text style={styles.text}>
                        Ou
                    </Text>

                    <View style={{ flexDirection: 'row' , alignItems : 'center'}}>
                        <Text style={ [styles.text]}>
                            Você é novo por aqui? {" "}
                        </Text>
                        
                        <TouchableOpacity>
                            <Text style={ [styles.text, { fontWeight : '700'}] }>
                                Cadastre-se.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
};