import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground } from 'react-native';

import { 
    imgBackground,
    imgLogo,
} from '../../../../components/utils/Images'

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import styles from '../styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../../../service/api';

export default function FristStep () {

    const navigation = useNavigation();

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [cpfOrCnpj, setCpfOrCnpj] = useState("")
    const [textError, setTextError] = useState("")

    function handleMask( value ) {
        if (cpfOrCnpj.length < 10){
            setTextError("")
        }
        setCpfOrCnpj(value)
    }

    function navigationBack() {
        navigation.goBack();
    }

    async function navigateToLastStep() {
        const data = {
            cpf_cnpj : cpfOrCnpj.replace(/\D/g, ""),
            name : name,
            lastName : lastName,
            email : email,
        }
        
        await api.get(`vendedor/${cpfOrCnpj.replace(/\D/g, "")}`)
        .then(function() {
            return setTextError("CPF ou CNPJ já está cadastrado.")
        }).catch( function() {
            navigation.navigate('LastStep', data)
        })
    }

    function checkInputs() {
        return name && lastName && email && cpfOrCnpj ? true : false;
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
                        <View style={styles.containerRows}>
                            <Input
                                value = {name}
                                autoFocus = {true}
                                textValues = { !name ? true : false }
                                label="Nome"
                                onChangeText = { text => setName(text) }
                            />
                            <View style={{marginHorizontal : 8}}/>
                            <Input
                                value = {lastName}
                                textValues = { !lastName ? true : false }
                                label="Sobrenome"
                                onChangeText = { text => setLastName(text) }
                            />
                        </View>

                        <View style={styles.containerRows}>
                            <Input
                                value = { email }
                                textValues = { !email ? true : false }
                                label="Endereço de e-mail"
                                autoCorrect = {false}
                                autoCompleteType = "email"
                                keyboardType = "email-address"
                                onChangeText = { text => setEmail(text) }
                            />
                        </View>

                        <View style={styles.containerRows}>
                            <Input
                                value = { cpfOrCnpj }
                                errorMsg = { textError }
                                textValues = { !cpfOrCnpj ? true : false }
                                mask = "cpf_cnpj"
                                label="CPF ou CNPJ"
                                returnKeyType = "done"
                                keyboardType = "numeric"
                                inputMaskChange = { text => handleMask(text) }
                            />
                        </View>
                    </View>

                    <View style={styles.containerPrivacity}>
                        <Text style={styles.textPrivacity}>Ao continuar declaro que, li e concordo com os 
                            <TouchableOpacity onPress={() => {}}>
                                <Text style={styles.textBoldPrivacity}>termos de privacidade.</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>

                    <View style={styles.containerRows}>
                        <Button
                            label="Continuar"
                            disabled = { !checkInputs() }
                            type={ checkInputs() ? "solid" : "outlined"}
                            color={ checkInputs() ? "blue" : "noEvidence"}
                            onPress={ () => navigateToLastStep() }
                        />
                    </View>
                </View>

                <Button
                    label = "Voltar"
                    leftIcon = {"chevron-left"}
                    type = "text"
                    color = "orange"
                    style = {{ width : "25%", height : 50 }}
                    onPress = { () => navigationBack() }
                />
            </View>
        </ImageBackground>
    )
}