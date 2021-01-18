import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const screen = Dimensions.get('screen');
var font = 14, altura = '22%', padding = '8%';

if (screen.height > 800) {
    font += 2;
    altura = '25%';
    padding = '15%';
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
        paddingHorizontal : '15%',
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
        padding : 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTextInput : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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