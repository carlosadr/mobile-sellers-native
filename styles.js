import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const screen = Dimensions.get('screen');
var altura;

if (screen.height > 800) {
    altura='15%'
}
else {
    altura='6%'
}

// ** Styles do APP.JS **
const styles = StyleSheet.create({
    containerRouts: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerButtons: {
        margin: 8,
        marginTop: '10%',
        width: '100%',
        height: altura,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    imgLogo: {
        flex: 2,
        marginRight: '55%',
        marginBottom: '2%',
        width: '40%',
        resizeMode: 'contain',
    },
    
    imgBackground: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#F4F6F9',
    },
});

export default styles;