import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import * as Colors from '../../../components/utils/Colors';

const styles = StyleSheet.create({
    imgBackground : {
        flex : 1,
        resizeMode : 'contain',
        width : '100%',
        backgroundColor : '#F4F6F9',
    },

    containerHeader : {
        flex : 0.25,
        marginTop : Constants.statusBarHeight + 8,
    },

    containerContants : {
        flex : 1,
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
        marginHorizontal : 8,
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
        paddingVertical : 8,
    },

    containerProducts : {
        flex : 1,
        flexDirection : 'row',
        height : 120,
        marginVertical : 4,
        marginHorizontal : 8,
        borderRadius : 15,
        backgroundColor : Colors.white,
    },

    containerImage : {
        flex : 1.5,
        padding : 8,
        borderRadius : 8,
    },
    
    image : { 
        width : '100%', 
        height : '100%', 
        resizeMode : 'contain' 
    },
    
    containerDescription : {
        flex : 2.5,
        paddingHorizontal : 8,
        paddingVertical : 10,
    },

    containerDescriptionTitle : {
        flex : 1,
        fontSize : 16,
        color : Colors.chumbo,
        textAlignVertical : 'center',
    },

    containerSubDescription : {
        flex : 1,
        fontSize : 12,
        color : Colors.noEvidence,
        textAlignVertical : 'center',
    },

    containerValues : {
        flex : 1,
        paddingVertical : 16,
    },

    containerPrice : {
        flex : 1,
        fontSize : 14,
        color : Colors.chumbo,
        textAlignVertical : 'center',
    }
})

export default styles;