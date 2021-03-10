import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground } from 'react-native';
import { User, Eye, EyeOff, Lock, ChevronLeft } from 'react-native-feather';

import imgBackground from "../../../assets/background-2.png";
import imgLogo from "../../../assets/logo.png";

import Input from '../../components/Input'
import Button from '../../components/Button'

import styles from './styles';

export default function LoginScreenEmail () {

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [state, setState] = useState(true);

    const checkEmail = () => {
        return email ? false : true
    }
    const checkPassword = () => {
        return password ? false : true
    }
    const checkInputs = () => {
        return email && password ? "solid" : "outlined"
    }

    function navigationBack() {
        console.log("Botao de ir para Tab Screen acionado.")
        navigation.goBack();
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

                    <Input 
                        value={ email }
                        label = "Endereço de E-mail"
                        placeholder = "ex. contato@email.com"
                        leftIcon = {User}
                        marginVertical = { 6 }
                        textValues = { checkEmail() }
                        onChangeText = { text => setEmail(text) }
                    />

                    <Input 
                        value={password}
                        label = "Senha"
                        leftIcon = {Lock}
                        rightIcon = { state ? EyeOff : Eye }
                        marginVertical = { 6 }
                        secureTextEntry = {state}
                        textValues = { checkPassword() }
                        onChangeText={ text => setPassword(text) }
                        onPress={ () => state ? setState(false) : setState(true)}
                    />

                    <View style={ styles.containerButtonLost } >
                        <Button 
                            label = "Esqueci minha senha." 
                            color = "blue"
                            onPress = { () => {  } }
                        />
                    </View>
                </View>

                <View style={{ flex : 3.5, paddingTop : 40, paddingHorizontal : 35  }}>
                    <Button
                        label = "Entrar"
                        type = { checkInputs() }
                        color = "blue"
                        onPress = { () => email && password ? navigationToScreenTab() : {} }
                    />
                </View>
                <Button
                    label = ""
                    leftIcon = {ChevronLeft}
                    type = "text"
                    color = "orange"
                    style = {{ width : "25%", height : 50 }}
                    onPress = { () => navigationBack() }
                />
            </View>
        </ImageBackground>
    )
};