import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    containerRouts: {
        flex: 1,
        backgroundColor: '#F4F6F9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
        padding: 8,
        
        borderWidth: 2,
        borderColor: 'blue',
    }
})

export default styles;