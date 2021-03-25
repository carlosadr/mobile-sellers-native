import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Bell } from 'react-native-feather';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../src/service/api'

import * as Colors from '../utils/Colors';
import { defaultAvatar, imgLogoSmall } from '../utils/Images';

export default function Header ( data ) {
    const [ user, setUser ] = useState("")
    const [ dataUser, setDataUser ] = useState({})

    const navigation = useNavigation();

    async function navigateToLogout() {
        await AsyncStorage.clear().then(() => {
            console.log("Dados apagados com sucesso!")
            navigation.navigate('LoginScreenEmail')
        }).catch(( err ) => {
            console.log(err)
        })
    }

    async function getUser () {
        await AsyncStorage.getItem('user', (err, item) => {
            err !== null ? console.log( "Verifique o erro: " + err ) : setUser(item);
        })
    }
    
    async function getUserData () {
        getUser();
        await api.get(`/vendedor/${user}`).then( ( response ) => {
            setDataUser(response.data);
        }).catch(( error ) => {
            console.log( "Verifique o erro: " + error )
        })
    }

    useEffect(() => {
        getUserData();
    }, [ user, dataUser ]);

    return (
        <View style={styles.containerHeader}>
            <View style={styles.containerFristRow}>
                <Image style={styles.containerLogo} source={ imgLogoSmall } />
                <TouchableOpacity>
                    <Bell size={16} color={Colors.white}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLastRow}>

                <TouchableOpacity 
                    onPress= { () => { navigateToLogout() } }
                >
                    <Image style={styles.containerAvatar} source={defaultAvatar}/>
                </TouchableOpacity>

                <View style={styles.containerTexts} >
                    <View style={styles.TextStore}>
                        <Text style={styles.TextStore}>
                            Nome da Loja
                        </Text>
                        <Text style={[styles.TextStore, styles.Text]}>
                            { dataUser.name }
                        </Text>
                    </View>

                    <View style={styles.TextPlans}>
                        <Text style={styles.TextPlans}>
                            Plano
                        </Text>
                        <Text style={[styles.TextPlans, styles.Text]}>
                            Preço
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}