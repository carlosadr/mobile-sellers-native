import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import * as Colors from '../../../components/utils/Colors';

const styles = StyleSheet.create({
    containerHeader : {
        flex : 0.25,
        marginTop : Constants.statusBarHeight + 8,

        borderColor : "red",
        borderWidth : 1
    },

    containerContants : {
        flex : 1,
        paddingHorizontal : 8,

        borderColor : "blue",
        borderWidth : 1
    },

    containerShadow : {
        // add shadows for iOS only
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.10,

        // add shadows for Android only
        // No options for shadow color, shadow offset, shadow opacity like iOS
        elevation: 4,
    },

    containerTitleProducts : {
        flex : 1,
        flexDirection : 'row',
        maxHeight : 50,
        marginTop : 8,
        padding : 8,
        alignItems : 'center',
        backgroundColor : Colors.white,
        borderRadius : 15,
    },

    containerTitle : {
        color : Colors.noEvidence,
    },

    containerListProducts : {
        flex : 1,
    },
})

export default styles;