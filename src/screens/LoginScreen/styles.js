import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const screen = Dimensions.get('screen');
var font = 15.5, altura = '22%', padding = '8%';

if (screen.height > 800) {
    font += 2.5;
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
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : '15%',
    },

    containerRegister : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingBottom: '2%'
    },

    text : {
        color : '#1AA1BE',
        textAlign : 'center',
        fontSize : font,
    },

    containerContants : {
        flex : 3,
        maxHeight : 320, 
        padding : 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerButtons : {
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

    buttonShadow : {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 0, width: 0 }, // IOS
        shadowOpacity: 0.6, // IOS
        shadowRadius: 2, //IOS
        elevation: 2, // Android
    },

    buttonTouchableFacebook : {
        backgroundColor:'#1AA1BE',
    },

    buttonTouchableGoogle : {
        backgroundColor:'#DE583D',
    },

    buttonTouchableEmail : {
        backgroundColor:'#F4F6F9',
    },

    icons : {
        flex : 1 ,
        width: '100%',
        height : '100%',
        resizeMode : 'contain'
    },

    textButtons : {
        flex : 5,
        textAlign : 'center',
        fontSize : font,
        color : '#F4F6F9',
    },
})

export default styles;