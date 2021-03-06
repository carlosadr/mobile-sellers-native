import React, { useState } from 'react';
import {
    View,
    Animated,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

import { Feather } from "@expo/vector-icons"

import { maskCep, maskCpfOrCnpj, maskPhone } from '../utils/Masks';

import * as Colors from '../utils/Colors';

interface InputProps extends TextInputProps {
    label : string,
    errorMsg : string,
    textValues : boolean,
    mask : 
        "cep" | 
        "phone" | 
        "password" |
        "cpf_cnpj"
    ,
    flex : number,
    marginHorizontal : number,
    marginVertical : number,
    leftIcon : any,
    rightIcon : any,
    inputMaskChange : Function,
}

const Input: React.FC<InputProps> = ({
    label,
    errorMsg,
    textValues,
    mask,
    flex,
    marginVertical,
    marginHorizontal,
    leftIcon,
    rightIcon,
    inputMaskChange,
    ...rest }) => {

    const [state, setState] = useState(false)
    const [value, setValue] = useState(false)
    const [position, setPosition] = useState(new Animated.Value(value ? 1 : 0))
    const [width, setWidth] = useState(Dimensions.get("screen").scale)

    const handleChange = ( value : string ) => {
        switch (mask) {
            case 'cep' : return inputMaskChange(maskCep(value));
            case 'phone' : return inputMaskChange(maskPhone(value));
            case 'cpf_cnpj' : return inputMaskChange(maskCpfOrCnpj(value));
        }
    }

    const handleFocus = () => {
        if (!state) {
            setState(true);
            Animated.timing(position, {
                toValue: 1,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    }

    const handleBlur = () => {
        if ( state && !value && textValues ) {
            setState(false);
            Animated.timing(position, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    }

    const returnAnimatedTitleStyles = () => {
        const props = {
            labelSiza: 12,
            floatLabelSize: 15,
            labelDefaultColor: Colors.blue,
            labelFocusColor: Colors.noEvidence,
        };

        return {
            top : position.interpolate({
                inputRange: [ 0, 1 ],
                outputRange: [ 16 , -2],
            }),
            left : position.interpolate({
                inputRange: [ 0 , 1],
                outputRange: [ leftIcon ? width > 2.5 ? width*16 : width*20 : width*5 , leftIcon ? 45 : 30],
            }),
            fontSize : state ? props.labelSiza : props.floatLabelSize,
            color : errorMsg ? Colors.orange : state ? props.labelDefaultColor : props.labelFocusColor,
            paddingHorizontal : state ? 4 : 10,
        }
    }

    const returnAnimatedPlaceholderStyles = () => {
        const props = {
            notVisible: 'transparent',
            visible: Colors.noEvidence,
        };

        return state ? props.visible : props.notVisible
    }

    const returnAnimatedStyles = () => {
        const props = {
            labelDefaultColor : Colors.blue, 
            labelFocusColor : Colors.noEvidence,
        }
    
        return state ? props.labelDefaultColor : props.labelFocusColor
    }

    const returnAnimatedBorder = () => {
        return state ? 1.5 : 0
    }

    return (
        <>
            <View
                style={[
                    styles.containerInput,
                    styles.borderRadiusFull,
                    {
                        borderWidth : returnAnimatedBorder(),
                        borderColor :  errorMsg ? Colors.orange : returnAnimatedStyles(),
                        marginHorizontal: marginHorizontal,
                        marginVertical: marginVertical,
                        flex : flex ? flex : 1,
                    }
                ]}
            >
                <Animated.Text style={[
                    styles.text,
                    returnAnimatedTitleStyles(),
                ]}
                >
                    {label}
                </Animated.Text>

                    <Feather style={{ marginHorizontal : 8 }} name={leftIcon} color={returnAnimatedStyles()} size={22} />

                <TextInput
                    style={[
                        styles.textInput,
                        { color : Colors.chumbo }
                    ]}
                    placeholderTextColor={returnAnimatedPlaceholderStyles()} 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={ (text : string) => handleChange(text) }
                    { ...rest }
                />
                <Text style={[
                        styles.textError,
                        { color : Colors.orange }
                    ]} >
                    { errorMsg }
                </Text>

                <TouchableOpacity style={ !rightIcon ? {} : {marginLeft : 8} } { ...rest }>
                    <Feather style={{ marginHorizontal : 8 }} name={rightIcon} color={returnAnimatedStyles()} size={22} />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Input;

const styles = StyleSheet.create({
    containerInput: {
        backgroundColor : "#ffffff",
        flexDirection: 'row',
        width: '100%',
        maxHeight: 60,
        padding: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    borderSolidInInput: {
        borderWidth: 1,
    },

    borderRadiusFull: {
        borderRadius: 50,
    },

    borderRadiusHalf: {
        borderRadius: 15,
    },

    text: {
        position: 'absolute',
        textAlign: 'center',
        padding : 3,
    },

    textInput: {
        flex: 3,
        fontSize : 16,
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },

    textError: {
        position : 'absolute',
        left : 35,
        top : 62,
        flex: 1,
        fontSize : 10,
        width: '100%',
        height: '100%',
    }
})