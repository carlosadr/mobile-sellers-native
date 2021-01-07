import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';

import {
    white,
    blue,
    orange,
    chumbo,
    noEvidence
} from './Colors'

class ButtonSolid extends Component {
    static propTypes = {
        marginHorizontal : PropTypes.number,
        marginVertical : PropTypes.number,
        label: PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
        disabled : PropTypes.bool,
        leftIcon : PropTypes.element,
        rightIcon : PropTypes.element,
    }

    render = () => {
        const { 
            marginHorizontal, 
            marginVertical, 
            label, 
            onPress, 
            disabled, 
            leftIcon, 
            rightIcon 
        } = this.props

        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    styles.buttonSolidColor,
                    { 
                        marginHorizontal : marginHorizontal,
                        marginVertical : marginVertical,
                    }
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                <View style={styles.containerText}>
                    {leftIcon}
                    <Text style={[ styles.text, styles.solidColor]}>
                        {label}
                    </Text>
                    {rightIcon}
                </View>
                
            </TouchableOpacity>
        )
        
    }
}

class ButtonOutlined extends Component {
    static propTypes = {
        marginHorizontal : PropTypes.number,
        marginVertical : PropTypes.number,
        label: PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
        disabled : PropTypes.bool,
        leftIcon : PropTypes.element,
        rightIcon : PropTypes.element,
    }

    render = () => {
        const { 
            marginHorizontal, 
            marginVertical, 
            label, 
            onPress, 
            disabled, 
            leftIcon, 
            rightIcon 
        } = this.props
        
        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    styles.buttonOutlined,
                    { 
                        marginHorizontal : marginHorizontal,
                        marginVertical : marginVertical,
                    }
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                <View style={styles.containerText}>
                    {leftIcon}
                    <Text style={[ styles.text, styles.outlinedColor]}>
                        {label}
                    </Text>
                    {rightIcon}
                </View>
            </TouchableOpacity>
        )
        
    }
}

const styles = StyleSheet.create({
    containerButton : {
        flex : 1,
        width : '100%',
        maxHeight : 58,
        flexDirection : 'row',
        borderRadius : 50,
        justifyContent : 'center',
        alignItems : 'center',
    },

    buttonSolidColor : {
        backgroundColor : blue,
    },

    buttonOutlined : {
        borderWidth : 2,
        borderColor : blue,
    },

    containerText : {
        flex : 1,
        maxWidth: '90%',
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text : {
        textAlign : 'left',
        marginHorizontal : 16,
        fontSize : 16,
    },

    solidColor : {
        color : white,
    },

    outlinedColor : {
        color : blue,
    }
})

export { 
    ButtonSolid,
    ButtonOutlined,
};