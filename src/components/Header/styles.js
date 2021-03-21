import { StyleSheet } from 'react-native'
import * as Colors from '../utils/Colors';

const styles = StyleSheet.create({
    containerHeader : {
        height : '20%',
        maxHeight : 180,
        paddingHorizontal : 8,

        borderWidth : 1,
        borderColor : "#3f58a0"
    },

    containerFristRow : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        maxHeight : 40,

        borderWidth : 1,
        borderColor : "#fcfc55"
    },

    containerLastRow : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',

        borderWidth : 1,
        borderColor : "#ff00ff"
    },

    containerLogo : {
        height : 35,
        width : 38,
        resizeMode : 'contain'
    },

    containerAvatar : {
        height : 90,
        width : 90,
        resizeMode : 'contain'
    },
})

export default styles;