import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const ButtonSolid = (props) => {
    return(
        <TouchableOpacity 
            style={[
                styles.containerButton,
                styles.buttonSolidColor,
                props.style,
            ]}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            <View style={{flex:1, justifyContent:'center', padding: 8}}>{props.icon}</View>
            <Text style={styles.textSolid}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const ButtonOutlined = (props) => {
    return(
        <TouchableOpacity 
            style={[
                styles.containerButton,
                styles.buttonOutlined,
                props.style,
            ]}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            {props.icon}
            <Text style={styles.textOutlined}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButton : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        width : '80%',
        maxHeight : 60,
        borderRadius : 50,
    },

    buttonSolidColor : {
        backgroundColor : '#1AA1BE',
    },

    buttonOutlined : {
        borderWidth : 2,
        borderColor : '#1AA1BE',
    },

    textSolid : {
        flex : 6,
        textAlign : 'center',
        fontSize : 16,
        color : '#FFF',
    },

    textOutlined : {
        textAlign : 'center',
        fontSize : 16,
        color : '#1AA1BE',
    }
})

export { 
    ButtonSolid,
    ButtonOutlined,
};