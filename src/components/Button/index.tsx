import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import * as Colors from '../Colors';

interface ButtonProps {
    label : string,
    type: "text" | "solid" | "outlined" | "tabBar",
    color: "white" | "blue" | "orange" | "chumbo" | "noEvidence",
    marginVertical: number,
    marginHorizontal: number,
    leftIcon: Element,
    rightIcon: Element,
    onPress: Function,
}

const Button: React.FC<ButtonProps> = ({
    label,
    type,
    color,
    marginVertical,
    marginHorizontal,
    leftIcon,
    rightIcon,
    onPress,
    ...rest }) => {

    function createIconReact(icon, color) {
        return icon != null ? React.createElement(icon, { color: color }) : null
    }

    const colorButton = (color) => {
        switch (color) {
            case "white": return Colors.white
            case "blue": return Colors.blue
            case "orange": return Colors.orange
            case "chumbo": return Colors.chumbo
            case "noEvidence": return Colors.noEvidence
        }
    }

    const typeButton = ( type, color) => {
        switch (type) {
            case "solid":
                return [
                    styles.borderRadius,
                    {
                        backgroundColor : colorButton(color)
                    }]
            case "outlined":
            
                break;
            case "tabBar":
            
                break;
            default:
                break;
        }
    }

    return (
        <>
            <TouchableOpacity
                style={[
                    styles.containerButton,
                    typeButton(type, color),
                    {
                        marginHorizontal: marginHorizontal,
                        marginVertical: marginVertical,
                    }
                ]}
                onPress={ () => onPress }
            >
                <View style={[styles.containerText, styles.flexDirectionColumn]}>
                    {createIconReact(leftIcon, color)}
                    <Text style={[styles.textSizeTabBar, { color: color }]}>
                        {label}
                    </Text>
                    {createIconReact(rightIcon, color)}
                </View>
            </TouchableOpacity>
        </>
    )
}

export default Button;

const styles = StyleSheet.create({

    //#region Estilos Globais.
    containerButton: {
        flex: 1,
        width: '100%',
        maxHeight: 58,
        justifyContent: 'center',
        alignItems: 'center',
    },

    borderRadius: {
        borderRadius: 50,
    },

    flexDirectionRow: {
        flexDirection: 'row',
    },

    flexDirectionColumn: {
        flexDirection: 'column',
    },

    containerText: {
        flex: 1,
        maxWidth: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        textAlign: 'center',
        marginHorizontal: 16,
    },

    textSize: {
        fontSize: 16,
    },

    //#endregion Estilos Globais.

    //#region Estilos Botao solido ( Fundo preeenchido ).


    //#endregion

    //#region Estilos Botao c/ bordas.
    buttonOutlined: {
        borderWidth: 1,
    },

    //#endregion Estilos Botao c/ bordas.

    //#region Estilos TabBar.
    textSizeTabBar: {
        marginVertical: 8,
        fontSize: 12,
    },
    //#endregion Estilos TabBar.

})