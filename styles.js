import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerRouts: {
        flex: 1,
        flexDirection : 'column',
        width : '100%',
        justifyContent: 'center',

        backgroundColor: '#F4F6F9',
    },

    containerTabBar: {
        flex: 1,
        flexDirection : 'row',
        width : '100%',
        height : '100%',
        maxHeight: 80,
        position : 'absolute',
        bottom : 0,
        
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth : 1,
        borderColor : '#DEDEDE',

        backgroundColor: '#F4F6F9',
    }
})

export default styles;