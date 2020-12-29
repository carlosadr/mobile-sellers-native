import { StyleSheet } from 'react-native';

// ** Styles das Welcome-Screens ** 
const styles = StyleSheet.create({
    viewPager: {
        flex: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
    },
    
    img1 : {
        flex: 6,
        width: '100%',
        marginTop: 16,
        marginBottom: 26,
        resizeMode: 'contain',
        alignContent: 'flex-end',
    },

    h1: {
        fontSize: 24,
        width: '100%',
        marginVertical: '1%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    strong: {
        fontWeight: '700',
    },

    p1: {
        fontSize: 16,
        width: '100%',
        marginVertical: '1%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p2: {
        fontSize: 16,
        width: '100%',
        marginVertical: '1%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p3: {
        fontSize: 16,
        width: '100%',
        marginVertical: '1%',
        alignItems: 'center',
        color: '#F4F6F9',
    },
})

export default styles;