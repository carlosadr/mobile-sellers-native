import React, { useState } from 'react';
import {
    View,
    Animated,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

import * as Colors from '../Colors';

interface InputProps extends TextInputProps {
    label : string,
    textValues : boolean,
    mask : 
        "cep" | 
        "phone" | 
        "password"
    ,
    marginHorizontal : number,
    marginVertical : number,
    leftIcon : Element,
    rightIcon : Element,
    onPress : Function,
}

const Input: React.FC<InputProps> = ({
    label,
    textValues,
    mask,
    marginVertical,
    marginHorizontal,
    leftIcon,
    rightIcon,
    onPress,
    ...rest }) => {

    const [value, setValue] = useState(false)
    const [position, setPosition] = useState(new Animated.Value(value ? 1 : 0))
    const [state, setState] = useState(false)
    const [width, setWidth] = useState(Dimensions.get("screen").scale)

    const createIconReact = (icon, color) => {
        if (icon != null) {
            return React.createElement(icon, { color: color, marginHorizontal: 8 })
        }
        return
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

        console.log(width);

        return {
            top : position.interpolate({
                inputRange: [0, 1],
                outputRange: [20, -8],
            }),
            left : position.interpolate({
                inputRange: [0, 1],
                outputRange: [ width*5 , 30],
            }),
            fontSize : state ? props.labelSiza : props.floatLabelSize,
            color : state ? props.labelDefaultColor : props.labelFocusColor,
            paddingHorizontal : state ? 4 : 10,
        }
    }

    const returnAnimatedPlaceholderStyles = () => {
        const props = {
            notVisible: 'transparent',
            visible: Colors.noEvidence,
        };

        console.log("placeholder is visible : " + state)
        return state ? props.visible : props.notVisible
    }

    const returnAnimatedStyles = () => {
        const props = {
            labelDefaultColor : Colors.blue, 
            labelFocusColor : Colors.noEvidence,
        }
    
        return state ? props.labelDefaultColor : props.labelFocusColor
    }

    return (
        <>
            <View
                style={[
                    styles.containerInput,
                    styles.borderSolidInInput,
                    styles.borderRadiusFull,
                    {
                        borderColor : returnAnimatedStyles(),
                        marginHorizontal: marginHorizontal,
                        marginVertical: marginVertical,
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

                {createIconReact(leftIcon, returnAnimatedStyles())}

                <TextInput
                    style={[
                        styles.textInput,
                        { color : Colors.chumbo }
                    ]}
                    placeholderTextColor={returnAnimatedPlaceholderStyles()} 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    { ...rest }
                />

                <TouchableOpacity onPress={ () => onPress }>
                    {createIconReact(rightIcon, returnAnimatedStyles())}
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Input;

const styles = StyleSheet.create({
    containerInput: {
        flex: 1,
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
        backgroundColor: Colors.white,
    },

    textInput: {
        flex: 3,
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }
})