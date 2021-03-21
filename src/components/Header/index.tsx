import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Bell } from 'react-feather';
import * as Colors from '../utils/Colors';

interface HeaderProps {
    data : Object,
}

const Header: React.FC<HeaderProps> = ({ data }) => {
    return (
        <>
            <View style={ styles.containerLabel }>
                <Image style={ styles.imageLogo } source={ require('../../../assets/logo.png') } />
                <TouchableOpacity >
                    <Bell size={ 16 }/>
                </TouchableOpacity>
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

        borderWidth : 1,
    }
})