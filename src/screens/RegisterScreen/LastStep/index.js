import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground } from 'react-native';
import {ChevronLeft, Eye, EyeOff} from 'react-feather';

import imgBackground from "../../../../assets/background-2.png";
import imgLogo from "../../../../assets/logo.png";
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import styles from '../styles'
import api from '../../../service/api';

export default function LastStep ( {route} ) {

    const navigation = useNavigation();

    const { cpf_cnpj, name, lastName, email  } = route.params;
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ textError, setTextError ] = useState ("");
    const [state, setState] = useState(true);

    function navigationBack() {
        navigation.goBack();
    }

    function navigationToLoginScreenEmail () {
        navigation.navigate('LoginScreenEmail');
    }

    const checkPassword = () => {
        return password ? false : true
    }
    const checkConfirmPassword = () => {
        return confirmPassword ? false : true
    }

    const completeRegister = async () => {
        password == confirmPassword ? setTextError("") : setTextError("A Senha está incorreta.");

        if(textError) {
            console.log("A Senha está incorreta.")
        } else {
            const data = {
                cpf_cnpj : cpf_cnpj,
                name : name,
                lastName : lastName,
                email : email,
                age : "",
                password : password,
            }

            await api.post('/vendedor', data).then(() => {
                return navigationToLoginScreenEmail()
            }).catch((response) => {
                return console.log(response + "\nAlgo de errado nao está certo.")
            })
        }
    }

    return (
        <ImageBackground style={styles.imgBackground} source={ imgBackground }>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Image style={styles.imgLogo} source={imgLogo} />
                    <View style={styles.containerSubTitle}>
                        <Text style={styles.text}>
                            Informe seus dados para que possamos criar sua conta.
                        </Text>
                    </View>
                </View>

                <View style={ styles.containerContants }>
                    <View style={ styles.containerInputs }>
                        <Input 
                            value={password}
                            label = "Insira sua senha"
                            rightIcon = { state ? EyeOff : Eye }
                            marginVertical = { 6 }
                            secureTextEntry = {state}
                            textValues = { checkPassword() }
                            onChangeText={ text => setPassword(text) }
                            onPress={ () => state ? setState(false) : setState(true)}
                        />
                        <Input 
                            value={ confirmPassword }
                            label = "Confirme sua senha"
                            errorMsg = { textError }
                            rightIcon = { state ? EyeOff : Eye }
                            marginVertical = { 6 }
                            secureTextEntry = {state}
                            textValues = { checkConfirmPassword() }
                            onChangeText={ text => setConfirmPassword(text) }
                            onPress={ () => state ? setState(false) : setState(true)}
                        />
                    </View>

                    <View style={styles.containerRows}>
                        <Button
                            label="Continuar"
                            type={ true ? "solid" : "outlined"}
                            color={ true ? "blue" : "noEvidence"}
                            onPress={() => completeRegister()}
                        />
                    </View>
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
}