import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Bell } from 'react-native-feather'

import * as Colors from '../utils/Colors';
import Button from '../Button';

interface HeaderProps {
    data : Object,
}

const Header: React.FC<HeaderProps> = ({ data }) => {

    function createIconReact(icon, color) {
        return icon != null ? React.createElement(icon, { color: color }) : null
    }

    return (
        <>
            <View style={ styles.containerLabel }>
                <Image style={ styles.imageLogo } source={ require('../../../assets/logo-marca.png') } />
                <Button type="text" label="" color="orange" leftIcon={ Bell } />
            </View>
            <View style={ styles.containerLabel } >
                <Image source={require('../../../assets/adaptive-icon.png')} />
                <View >
                    <Text>
                        Titulo do Plano
                    </Text>
                    <Text>
                        Preço do Plano
                    </Text>
                </View>
            </View>
        </>
    )
}

export default Header;

const styles = StyleSheet.create({
    containerLabel : {
        flex : 0.2,
        maxHeight : '5%',
        flexDirection : 'row',
        borderWidth : 1,
    },

    imageLogo : {
        flex : 1,
        width : 50,
        height : 50,

        borderWidth : 1,
    }
})