import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const screen = Dimensions.get('screen');
var font = 15, altura, padding;

if (screen.scale > 2.5) {
    font -= 0.8;
    altura = '28%';
    padding = '15%';
} else {
    font -= 1.5;
    altura = '24%';
    padding = '10%';
}

const styles = StyleSheet.create({
    imgBackground : {
        flex : 1,
        resizeMode : 'contain',
        width : '100%',
        minHeight : '95%',
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
        minHeight : 150,
        marginBottom : '12%',
        padding : padding,
        alignItems : 'center',
        justifyContent : 'center',
    },

    containerSubTitle : {
        flex : 1,
        maxHeight: 100,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 25,
    },

    text : {
        color : '#1AA1BE',
        textAlign : 'center',
        fontSize : font,
    },

    containerContants : {
        flex : 5,
        width: '100%',
        height: '100%',
        paddingVertical : 8,
        paddingHorizontal : "4%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTextInput : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerButtonLost : { 
        flex : 0.5,
        marginLeft : "40%",
    },

    buttonTouchable : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        borderRadius : 50,
        width : '100%',
        marginVertical : '4%',
    },

    textButtons : {
        flex : 5,
        textAlign : 'center',
        fontSize : font,
        color : '#F4F6F9',
    },
})

export default styles;