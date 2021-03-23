import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Bell } from 'react-native-feather';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../src/service/api'

import * as Colors from '../utils/Colors';
import { defaultAvatar } from '../utils/Images';

export default function Header () {
    const [ user, setUser ] = useState("")
    const [ dataUser, setDataUser ] = useState({})

    async function getUserData () {
        await AsyncStorage.getItem('user', (err, item) => {
            console.log(item)
            setUser(item);
        })

        await api.get('/vendedor/' + user).then( ( response ) => {
            console.log(response.data);
            setDataUser(response.data);
        });
    }

    useEffect(() => {
        getUserData()
    }, []);

    return (
        <View style={styles.containerHeader}>
            <View style={styles.containerFristRow}>
                <Image style={styles.containerLogo} source={require('../../../assets/logo-marca.png')} />
                <TouchableOpacity>
                    <Bell size={16} color={Colors.white}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLastRow}>

                <TouchableOpacity 
                    onPress= { () => { console.log("Botao Avatar foi precionado!") } }
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