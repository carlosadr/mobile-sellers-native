import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const screen = Dimensions.get('screen');
var fontH1 = 26, fontP = 18, altura = '4%', top = '18%';

if (screen.scale > 2.5) {
    fontH1 += 4;
    fontP += 2;

    altura = '10%'
    top = '10%'
}

// ** Styles das Welcome-Screens ** 
const styles = StyleSheet.create({
    containerRouts: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgBackground: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#F4F6F9',
    },

    imgLogo: {
        flex: 2,
        marginRight: '55%',
        marginBottom: '2%',
        width: '40%',
        resizeMode: 'contain',
    },

    decal: {
        height: 10,
        resizeMode: 'contain',
    },

    viewPager: {
        flex: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerButtons: {
        margin: 8,
        marginTop: top,
        width: '100%',
        height: altura,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
    },
    
    img1 : {
        width: '100%',
        height: '125%',
        marginTop: 16,
        marginBottom: 18,
        resizeMode: 'contain',
        alignContent: 'flex-end',
    },

    img2 : {
        width: '100%',
        height: '125%',
        marginTop: 16,
        marginBottom: 26,
        resizeMode: 'contain',
        alignContent: 'flex-end',
    },

    strong: {
        fontWeight: '700',
    },

    h1: {
        fontSize: fontH1,
        width: '100%',
        marginVertical: '1%',
        paddingRight: '4%',
        textAlign: 'right',
        color: '#F4F6F9',
    },

    p1: {
        fontSize: fontP,
        width: '100%',
        marginVertical: '1%',
        paddingLeft: '4%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p2: {
        fontSize: fontP,
        width: '100%',
        marginVertical: '1%',
        paddingLeft: '10.5%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p3: {
        fontSize: fontP,
        width: '100%',
        marginVertical: '1%',
        paddingLeft: '6%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p4: {
        fontSize: fontP,
        width: '100%',
        marginVertical: '1%',
        paddingLeft: '3%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p5: {
        fontSize: fontP,
        width: '100%',
        marginVertical: '1%',
        paddingLeft: '8%',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p6: {
        fontSize: fontP,
        width: '100%',
        marginTop: '8%',
        marginVertical: '1%',
        paddingRight: '2%',
        textAlign: 'right',
        alignItems: 'center',
        color: '#F4F6F9',
    },

    p7: {
        fontSize: fontP,
        width: '100%',
        marginVertical: '1%',
        paddingRight: '2%',
        textAlign: 'right',
        alignItems: 'center',
        color: '#F4F6F9',
    },
})

export default styles;