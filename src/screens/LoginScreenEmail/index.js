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
    const [text, setText] = useState();

    const checkEmail = () => {
        return email !== "" ? false : true
    }
    const checkPassword = () => {
        return password !== "" ? false : true
    }
    const checkText = () => {
        return text !== "" ? false : true
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

                    {/* <Input 
                        keyboardType="numeric"
                        label="Endereço de E-mail"
                        placeholder="ex. contato@email.com"
                        leftIcon={ User }
                        marginVertical={16}
                    /> */}

                    <View style = {{ flex : 1, flexDirection : 'row' }} >
                        <Input 
                            label = "Endereço de E-mail"
                            placeholder = "ex. contato@email.com"
                            marginVertical = { 16 }
                            value={email}
                            textValues = { checkEmail() }
                            onChangeText={ text => setEmail(text) }
                        />
                        <Input 
                            label = "Password"
                            placeholder = "texto"
                            marginVertical = { 16 }
                            value={password}
                            textValues = { checkPassword() }
                            onChangeText={ text => setPassword(text) }
                        />
                    </View>

                    <Input 
                        label = "Password"
                        placeholder = "texto"
                        marginVertical = { 16 }
                        value={text}
                        textValues = { checkText() }
                        onChangeText={ text => setText(text) }
                    />

                    <Button
                        label="Avançar para Tab Screen" 
                        type = "solid"
                        color="blue" 
                        rightIcon={ ChevronRight } 
                        onPress={()=>{navigationToScreenTab()}}
                    />
                    
                </View>
            </View>
        </ImageBackground>
    )
};