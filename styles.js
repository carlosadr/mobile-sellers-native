import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// ** Styles do APP.JS **
const styles = StyleSheet.create({
    containerRouts: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        
        borderWidth: 2,
        borderColor: 'blue',
    },

    imgLogo: {
        flex: 1,
        marginRight: '60%',
        marginBottom: 8,
        width: '40%',
        resizeMode: 'contain',

        borderWidth: 2,
        borderColor: 'green',
    },
    
    imgBackground: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#F4F6F9',
    }
})

export default styles;