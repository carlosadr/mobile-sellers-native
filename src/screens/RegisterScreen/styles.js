import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Color from '../../components/utils/Colors';

const screen = Dimensions.get('screen');
var font = 15, altura, padding;

if (screen.scale > 2.5) {
    font -= 0.8;
    altura = '34%';
    padding = '14%';
} else {
    font -= 1;
    altura = '30%';
    padding = '10%';
}

const styles = StyleSheet.create({
    imgBackground : {
        flex : 1,
        resizeMode : 'contain',
        width : '100%',
        backgroundColor : '#F4F6F9',
    },

    imgLogo : {
        flex : 1,
        resizeMode : 'contain',
    },

    container : {
        flex : 1,
        marginTop : Constants.statusBarHeight,
    },

    containerHeader : {
        height : altura,
        paddingTop : 10,
        paddingHorizontal : padding,
        alignItems : 'center',
        justifyContent : 'center',
    },

    containerSubTitle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 8,
    },

    text : {
        color : Color.white,
        textAlign : 'center',
        fontSize : font,
    },

    containerContants : {
        flex : 1,
        paddingHorizontal : 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerInputs : { 
        width : '100%', 
        height : '100%', 
        maxHeight: 200
    },

    containerRows : {
        flex : 1, 
        flexDirection : 'row'
    },

    containerPrivacity : {
        flex : 1, 
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },

    textPrivacity : {
        color : Color.blue,
        lineHeight : 20,
    },

    textBoldPrivacity : {
        color : Color.blue,
        fontWeight : "700",
        textDecorationLine : 'underline',
    }
})

export default styles;