import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground } from 'react-native';
import {ChevronLeft} from 'react-native-feather';

import imgBackground from "../../../../assets/background-2.png";
import imgLogo from "../../../../assets/logo.png";
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import styles from '../styles'

export default function LastStep ( data ) {

    const navigation = useNavigation();

    const [name, setName] = useState( data.name)
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)
    const [cpfOrCnpj, setCpfOrCnpj] = useState(data.cpfOrCnpj)

    function handleMask( value ) {
        setCpfOrCnpj(value)
        console.log(value)
    }

    function checkData() {
        console.log( name + "   : " + cpfOrCnpj);
    }

    function navigationBack() {
        navigation.goBack();
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

                    </View>
                    <View style={styles.containerRows}>
                        <Button
                            label="Continuar"
                            type={ true ? "solid" : "outlined"}
                            color={ true ? "blue" : "noEvidence"}
                            onPress={() => checkData()}
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