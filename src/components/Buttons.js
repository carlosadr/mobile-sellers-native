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

class PropsDefault extends Component {
    static propTypes = {
        marginHorizontal : PropTypes.number,
        marginVertical : PropTypes.number,
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
        disabled : PropTypes.bool,
        focusColor : PropTypes.string,
        icon : PropTypes.element,
        leftIcon : PropTypes.element,
        rightIcon : PropTypes.element,
    }
}

function createIconReact (icon, color) {
    if(icon != null){
        return React.createElement(icon, {color : color})
    }
    return
}

class ButtonSolid extends PropsDefault {
    
    render = () => {
        const { 
            marginHorizontal, 
            marginVertical, 
            color,
            label,
            onPress, 
            disabled, 
            leftIcon, 
            rightIcon,
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
                <View style={[ styles.containerText, styles.flexDirectionRow ]}>
                    {createIconReact(leftIcon, color)}
                        <Text style={[ styles.text, styles.textSize, styles.solidColor]}>
                            {label}
                        </Text>
                    {createIconReact(rightIcon, color)}
                </View>
            </TouchableOpacity>
        )
    }
}

class ButtonOutlined extends PropsDefault {
    
    render = () => {
        const { 
            marginHorizontal, 
            marginVertical, 
            color,
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
                <View style={[ styles.containerText, styles.flexDirectionRow ]}>
                    {createIconReact(leftIcon, color)}
                        <Text style={[ styles.text, styles.outlinedColor ]}>
                            {label}
                        </Text>
                    {createIconReact(rightIcon, color)}
                </View>
            </TouchableOpacity>
        )
    }
}

class ButtonTabBar extends PropsDefault {
    
    render = () => {
        const { 
            marginHorizontal,
            marginVertical,
            color,
            label,
            onPress,
            icon,
        } = this.props
        
        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    { 
                        marginHorizontal : marginHorizontal,
                        marginVertical : marginVertical,
                    }
                ]}
                onPress={onPress}
            >
                <View style={[ styles.containerText, styles.flexDirectionColumn ]}>
                    {createIconReact(icon, color)}
                    <Text style={[ styles.textSizeTabBar, { color : color } ]}>
                        {label}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    //#region Estilos Globais.
    containerButton : {
        flex : 1,
        width : '100%',
        maxHeight : 58,
        justifyContent : 'center',
        alignItems : 'center',
    },

    borderRadius : {
        borderRadius : 50,
    },
    
    flexDirectionRow : {
        flexDirection : 'row',
    },
    
    flexDirectionColumn : {
        flexDirection : 'column',
    },
    
    containerText : {
        flex : 1,
        maxWidth: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    text : {
        textAlign : 'center',
        marginHorizontal : 16,
    },

    textSize : {
        fontSize : 16,
    },

    //#endregion Estilos Globais.
    
    //#region Estilos Botao solido ( Fundo preeenchido ).
    buttonSolidColor : { 
        backgroundColor : blue 
    },

    //#endregion

    //#region Estilos Botao c/ bordas.
    buttonOutlined : {
        borderWidth : 1.2,
        borderColor : blue 
    },
    
    textColorOutlined : { color : blue },

    //#endregion Estilos Botao c/ bordas.

    //#region Estilos TabBar.
    textSizeTabBar : {
        marginVertical : 8,
        fontSize : 12,
    },
    
    textColorTabBar : { color : chumbo },

    //#endregion Estilos TabBar.

})

export { 
    ButtonSolid,
    ButtonOutlined,
    ButtonTabBar,
};