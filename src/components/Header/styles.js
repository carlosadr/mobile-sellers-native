import { StyleSheet } from 'react-native'
import * as Colors from '../utils/Colors';

const styles = StyleSheet.create({
    containerHeader : {
        flex : 1,
        height : '20%',
        maxHeight : 180,
        paddingHorizontal : 8
    },

    containerFristRow : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 8,
        maxHeight : 40
    },

    containerLastRow : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },

    containerLogo : {
        height : 35,
        width : 38,
        resizeMode : 'contain'
    },

    containerAvatar : {
        flex : 1,
        width : 60,
        
        marginRight : 16,
        resizeMode : 'contain'
    },

    containerTexts : {
        flex : 1,
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
    },

    TextStore : {
        color : Colors.white,
    },

    TextPlans : {
        flex: 1,
        color : Colors.white,
        textAlign : 'right'
    },

    Text : {
        fontSize : 18,
    }
})

export default styles;