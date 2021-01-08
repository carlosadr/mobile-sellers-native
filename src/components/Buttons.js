import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { white } from './Colors'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';

class PropsDefault extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        onPress : PropTypes.func.isRequired,
        marginHorizontal : PropTypes.number,
        marginVertical : PropTypes.number,
        disabled : PropTypes.bool,
        icon : PropTypes.elementType,
        leftIcon : PropTypes.elementType,
        rightIcon : PropTypes.elementType,
    }
}

function createIconReact (icon, color) {
    if(icon != null){
        return React.createElement(icon, {color : color})
    }
    return
}

class Solid extends PropsDefault {
    
    render = () => {
        const { 
            color,
            label,
            onPress,
            disabled,
            marginHorizontal,
            marginVertical,
            leftIcon,
            rightIcon,
        } = this.props

        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    styles.borderRadius,
                    {
                        backgroundColor : color,
                        marginHorizontal : marginHorizontal,
                        marginVertical : marginVertical,
                    }
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                <View style={[ styles.containerText, styles.flexDirectionRow ]}>
                    {createIconReact(leftIcon, white)}
                        <Text style={[ styles.text, styles.textSize, { color : white } ]}>
                            {label}
                        </Text>
                    {createIconReact(rightIcon, white)}
                </View>
            </TouchableOpacity>
        )
    }
}

class Outlined extends PropsDefault {
    
    render = () => {
        const { 
            color,
            label,
            onPress,
            disabled,
            marginHorizontal,
            marginVertical,
            leftIcon,
            rightIcon,
        } = this.props
        
        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    styles.buttonOutlined,
                    styles.borderRadius,
                    { 
                        borderColor : color,
                        marginHorizontal : marginHorizontal,
                        marginVertical : marginVertical,
                    }
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                <View style={[ styles.containerText, styles.flexDirectionRow ]}>
                    {createIconReact(leftIcon, color)}
                        <Text style={[ styles.text, { color : color } ]}>
                            {label}
                        </Text>
                    {createIconReact(rightIcon, color)}
                </View>
            </TouchableOpacity>
        )
    }
}

class OnlyText extends PropsDefault {
    
    render = () => {
        const { 
            color,
            label,
            onPress,
            disabled,
            marginHorizontal,
            marginVertical,
            leftIcon,
            rightIcon,
        } = this.props
        
        return(
            <TouchableOpacity 
                style={[
                    styles.containerButton,
                    { 
                        borderColor : color,
                        marginHorizontal : marginHorizontal,
                        marginVertical : marginVertical,
                    }
                ]}
                onPress={onPress}
                disabled={disabled}
            >
                <View style={[ styles.containerText, styles.flexDirectionRow ]}>
                    {createIconReact(leftIcon, color)}
                        <Text style={[ styles.text, { color : color } ]}>
                            {label}
                        </Text>
                    {createIconReact(rightIcon, color)}
                </View>
            </TouchableOpacity>
        )
    }
}

class TabBar extends PropsDefault {
    
    render = () => {
        const { 
            color,
            label,
            onPress,
            marginHorizontal,
            marginVertical,
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
    

    //#endregion

    //#region Estilos Botao c/ bordas.
    buttonOutlined : {
        borderWidth : 1,
    },

    //#endregion Estilos Botao c/ bordas.

    //#region Estilos TabBar.
    textSizeTabBar : {
        marginVertical : 8,
        fontSize : 12,
    },
    //#endregion Estilos TabBar.

})

export { 
    Solid,
    Outlined,
    OnlyText,
    TabBar,
};