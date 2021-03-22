import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Bell } from 'react-native-feather';
import * as Colors from '../utils/Colors';

import styles from './styles';
import api from '../../../src/service/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header () {
    const [ user, setUser ] = useState("")
    const [ dataUser, setDataUser ] = useState({})
    const [ dataStore, setDataStore ] = useState({})

    async function getUserData () {
        await AsyncStorage.getItem('user', (err, item) => {
            setUser(item);
        })

        setDataUser( await api.get('/vendedor/' + user));
        setDataStore( await api.get('/loja/' + user));
        console.log(dataUser.data);
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
                <TouchableOpacity >
                    <Image style={styles.containerAvatar} source={require('../../../assets/default-user.png')}/>
                </TouchableOpacity>

                <View style={styles.containerTexts} >
                    <View style={styles.TextStore}>
                        <Text style={styles.TextStore}>
                            Nome da Loja
                        </Text>
                        <Text style={[styles.TextStore, styles.Text]}>
                            { dataUser.data.name }
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