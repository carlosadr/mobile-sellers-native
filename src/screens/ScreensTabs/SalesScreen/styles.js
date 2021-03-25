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
        shadowOpacity: 0.25,

        // add shadows for Android only
        // No options for shadow color, shadow offset, shadow opacity like iOS
        elevation: 4,
    },

    containerFeatures : {
        flex : 1,
        // minHeight : 135,
        // maxHeight : 140,
        padding : 8,
        marginVertical : 8,
        paddingHorizontal : 16,
        backgroundColor : Colors.white,
        borderRadius : 15,
    },

    containerVisitas : {
        flex : 1.5,
        // minHeight : 185,
        // maxHeight : 200,

        padding : 8,

        marginVertical : 8,
        paddingHorizontal : 16,

        backgroundColor : Colors.white,
        borderRadius : 15,
    },

    containerExtra : {
        flex : 1.5,
        // minHeight : 135,
        // maxHeight : 140,
        padding : 8,
        marginVertical : 8,
        paddingHorizontal : 16,
        backgroundColor : Colors.white,
        borderRadius : 15,
    },

    containerFeaturesRow : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20,
    },

    containerFeaturesHeader : {
        fontSize : 18,
        color : Colors.chumbo,
    },

    containerFeaturesValueMes : {
        fontSize : 20,
        color : Colors.blue,
    },

    containerFeaturesValueAno : {
        fontSize : 16,
        color : Colors.blue,
    }
})

export default styles;