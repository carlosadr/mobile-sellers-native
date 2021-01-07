import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    StyleSheet, 
    View, 
    TextInput, 
    Text
} from 'react-native'

import {
    white,
    blue,
    orange,
    chumbo,
    noEvidence
} from './Colors'

class InputOutlined extends Component {
    static propTypes = {
        marginHorizontal : PropTypes.number,
        marginVertical : PropTypes.number,
        label: PropTypes.string.isRequired,
        onPress : PropTypes.func,
        // disabled : PropTypes.bool,
        leftIcon : PropTypes.element,
        rightIcon : PropTypes.element,
    }

    render = () => {
        const { 
            marginHorizontal, 
            marginVertical, 
            label, 
            onPress, 
            // disabled, 
            leftIcon, 
            rightIcon 
        } = this.props

        return(
            <View>
                {leftIcon}
                <TextInput/>
                {rightIcon}
            </View>
        )
        
    }
}

const TextInputOutlined = ( props ) => {
    return (
        <View style={styles.containerOutlined}>
            <Text style={styles.containerTextLabel} >{props.label}</Text>
            <TextInput 
                placeholder={props.placeholder} 
                style={styles.containerTextInput} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerOutlined : {
        flex : 1,
        padding : 8,
        width: '100%',
        maxHeight : 50,

        borderStyle : 'solid',
        borderWidth : 2,
        borderColor : '#1AA1BE',
        borderRadius : 8,
    },

    containerTextLabel : {
        flex : 1,
        position: 'absolute',
        top : '40%',
        left : 8,
        fontSize : 18,
        color : '#1AA1BE'
    },

    containerTextInput : {
        flex : 1,
        fontSize : 16,
        color : '#1AA1BE'
    }
})

export { TextInputFill, TextInputOutlined };