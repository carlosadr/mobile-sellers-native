import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { Feather } from '@expo/vector-icons'

import * as Colors from '../utils/Colors';

interface ButtonProps {
    label : string,
    type: "text" | "solid" | "outlined" | "tabBar",
    color: "white" | "blue" | "orange" | "chumbo" | "noEvidence",
    marginVertical: number,
    marginHorizontal: number,
    leftIcon: any,
    rightIcon: any,
}

const Button: React.FC<ButtonProps> = ({
    label,
    type,
    color,
    marginVertical,
    marginHorizontal,
    leftIcon,
    rightIcon,
    ...rest }) => {

    const colorButton = (color) => {
        switch (color) {
            case "white": return Colors.white
            case "blue": return Colors.blue
            case "orange": return Colors.orange
            case "chumbo": return Colors.chumbo
            case "noEvidence": return Colors.noEvidence
        }
    }
    
    const colorContant = ( type, color ) => {
        switch (type) {
            case "solid":
                return Colors.white;
            default:
                return colorButton(color);
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
                return [
                    styles.borderRadius,
                    {
                        borderWidth : 1.5,
                        borderColor : colorButton(color)
                    }]
            case "tabBar":
            
                break;
            default:
                break;
        }
    }

    const flexContaint = ( type ) => {
        switch (type) {
            case "tabBar":
                return [
                    styles.flexDirectionRow
                ]
            default :
                return [
                    styles.flexDirectionRow
                ]
        }
    }

    const fontSize = ( type ) => {
        switch (type) {
            case "tabBar":
                return [
                    styles.textSizeTabBar
                ]
            default :
                return [
                    styles.textSize
                ]
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
                {...rest}
            >
                <View style={[styles.containerText, flexContaint( type ) ]}>
                    <Feather name={leftIcon} color={ colorContant( type, color ) } size={22} />
                    <Text 
                        style={[ 
                            fontSize( type ), 
                            { 
                                marginHorizontal: 8, 
                                color: colorContant( type, color ) 
                            }
                        ]}>

                        {label}
                        
                    </Text>

                    <Feather name={rightIcon} color={ colorContant( type, color ) } size={22} />

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

    textSize: {
        fontSize: 15,
    },

    //#endregion Estilos Globais.

    //#region Estilos TabBar.
    textSizeTabBar: {
        marginVertical: 8,
        fontSize: 12,
    },
    //#endregion Estilos TabBar.

})