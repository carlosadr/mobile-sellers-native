import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

class ButtonSolid extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
        disabled : PropTypes.bool,
        icon : PropTypes.element,
    }

    render = () => {
        const { label, onPress, disabled, icon } = this.props
        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    styles.buttonSolidColor,
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                {icon}
                <Text style={styles.textSolid}>{label}</Text>
            </TouchableOpacity>
        )
        
    }
}

class ButtonOutlined extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
        disabled : PropTypes.bool,
        icon : PropTypes.element,
    }

    render = () => {
        const { label, onPress, disabled, icon } = this.props
        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    styles.buttonOutlined,
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                {icon}
                <Text style={styles.textOutlined}>{label}</Text>
            </TouchableOpacity>
        )
        
    }
}

const styles = StyleSheet.create({
    containerButton : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        width : '100%',
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