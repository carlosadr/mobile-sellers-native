import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    StyleSheet, 
    View, 
    TextInput, 
    Text,
    Animated
} from 'react-native'

import {
    white,
    blue,
    orange,
    chumbo,
    noEvidence
} from './Colors'

function createIconReact (icon, color) {
    if(icon != null){
        return React.createElement(icon,{color : color})
    }
    return
}

class InputOutlined extends Component {
    static propTypes = {
        marginHorizontal : PropTypes.number,
        marginVertical : PropTypes.number,
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        onPress : PropTypes.func,
        leftIcon : PropTypes.element,
        rightIcon : PropTypes.element,
    }

    render = () => {
        const { 
            marginHorizontal,
            marginVertical,
            color,
            label,
            placeholder,
            onPress,
            leftIcon, 
            rightIcon 
        } = this.props

        return(
            <View style={[styles.container]}>
                {/* <Text style={[styles.label, {color : color}]}>{label}</Text> */}
                {createIconReact(leftIcon, color)}
                <TextInput label={label} style={[styles.containerText, {color : color}]} placeholder={placeholder}/>
                {createIconReact(rightIcon, color)}
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        padding : 8,
        width: '100%',
        height : '100%',
        maxHeight : 60,
        borderColor : blue,
        borderWidth : 1,
    },

    containerText : {
        marginHorizontal : 8,
    },

    label : {
        flex : 1,
        position: 'absolute',
        top : '40%',
        left : 8,
        fontSize : 18,
    },
})

export { InputOutlined };