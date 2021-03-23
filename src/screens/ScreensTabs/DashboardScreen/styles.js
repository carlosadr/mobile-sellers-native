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
    },

    containerFeatures : {
        flex : 1,
        padding : 8,
        paddingHorizontal : 16,
        backgroundColor : Colors.white,
        borderRadius : 15,

        // add shadows for iOS only
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,

        // add shadows for Android only
        // No options for shadow color, shadow offset, shadow opacity like iOS
        elevation: 4,
    },

    containerFeaturesRow : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },

    containerFeaturesHeader : {
        fontSize : 18,
        color : Colors.chumbo,
    }
})

export default styles;