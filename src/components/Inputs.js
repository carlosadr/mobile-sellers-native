import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { 
    StyleSheet,
    View,
    Text, 
    Animated,
    TouchableOpacity
} from 'react-native';

import * as Colors from './Colors';
import { TextInput } from 'react-native-gesture-handler';

class PropsDefault extends Component {
    static propTypes = {
        keyboardType : PropTypes.string,
        label : PropTypes.string.isRequired ,
        placeholder : PropTypes.string,
        notVisible : PropTypes.string,
        visible : PropTypes.string,

        mask : PropTypes.string ,
        onLongPress : PropTypes.func,
        marginHorizontal : PropTypes.number,
        marginVertical : PropTypes.number,
        
        color : PropTypes.string,

        leftIcon : PropTypes.elementType,
        rightIcon : PropTypes.elementType,

        labelSiza : PropTypes.number, // to control size of title when field is active
        floatLabelSize : PropTypes.number, // to control size of title when field is inactive
        labelFocusColor : PropTypes.string, // to control color of title when field is active
        labelDefaultColor : PropTypes.string, // to control color of title when field is active
        
        errorText : PropTypes.string,
        errorTextColor : PropTypes.string,
    }
}

function createIconReact (icon, color) {
    if(icon != null){
        return React.createElement(icon, {color : color, marginHorizontal : 8})
    }
    return
}

class Input extends PropsDefault {

    constructor(props) {
        super(props);
        const { value } = this.props;
        this.position = new Animated.Value(value ? 1 : 0);
        this.state = {
            isFieldActive: false,
            isVisible : false,
        }
    }
    
    _handleFocus = () => {
        if (!this.state.isFieldActive) {
            this.setState({ isFieldActive: true, isVisible: true });
            Animated.timing(this.position, {
                toValue: 1,
                duration: 150,
                useNativeDriver : false,
            }).start();
        }
        console.log(this.state.isFieldActive + "  :  " + this.state.isVisible)
    }
    
    _handleBlur = () => {
        if (this.state.isFieldActive && !this.props.value) {
            this.setState({ isFieldActive: false, isVisible: false });
            Animated.timing(this.position, {
                toValue: 0,
                duration: 150,
                useNativeDriver : false,
            }).start();
        }
        console.log(this.state.isFieldActive + "  :  " + this.state.isVisible)
    }
    
    _returnAnimatedTitleStyles = () => {
        const { isFieldActive } = this.state;
        const {
            labelSiza = 12,
            floatLabelSize = 15,
            labelDefaultColor = Colors.blue, 
            labelFocusColor = Colors.noEvidence,
        } = this.props;

        return {
            top : this.position.interpolate({
                inputRange: [0, 1],
                outputRange: [20, -8],
            }),
            left : this.position.interpolate({
                inputRange: [ 0, 1 ],
                outputRange: [ 100, 30 ],
            }),
            fontSize : isFieldActive ? labelSiza : floatLabelSize,
            color : isFieldActive ? labelDefaultColor : labelFocusColor,
            paddingHorizontal : isFieldActive ? 4 : 10,
        }
    }

    _returnAnimatedPlaceholderStyles = () => {
        const { isVisible } = this.state;
        const {
            notVisible = 'transparent',
            visible = Colors.noEvidence,
        } = this.props;

        console.log("placeholder is visible : " + isVisible + "  : " + this.state.isVisible)

        return isVisible ? visible : notVisible
    }

    _returnAnimatedBorderStyles = () => {
        const { isFieldActive } = this.state;
        const {
            labelDefaultColor = Colors.blue, 
            labelFocusColor = Colors.noEvidence,
        } = this.props;
    
        return {
            borderColor: isFieldActive ? labelDefaultColor : labelFocusColor,
        }
    }

    _returnAnimatedIconStyles = () => {
        const { isFieldActive } = this.state;
        const {
            labelDefaultColor = Colors.blue, 
            labelFocusColor = Colors.noEvidence,
        } = this.props;
    
        return isFieldActive ? labelDefaultColor : labelFocusColor
    }

    render() {
        const {
            keyboardType = 'default',
            label,
            placeholder,
            mask,
            onLongPress,
            marginHorizontal,
            marginVertical,
            color,
            leftIcon,
            rightIcon,
            errorText
        } = this.props

        return (
            <View 
                style={[ 
                    styles.containerInput, 
                    styles.borderSolidInInput, 
                    styles.borderRadiusFull,
                    this._returnAnimatedBorderStyles(),
                    {
                        marginHorizontal : marginHorizontal,
                        marginVertical : marginVertical,
                    }
                ]}
            >
                <Animated.Text style={[ 
                    styles.text,
                    this._returnAnimatedTitleStyles(),
                    ]}
                >
                    { label }
                </Animated.Text>

                { createIconReact(leftIcon, this._returnAnimatedIconStyles()) }

                <TextInput 
                    style={[ 
                        styles.textInput,
                        this._returnAnimatedPlaceholderStyles()
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={this._returnAnimatedPlaceholderStyles()}
                    onFocus = {this._handleFocus}
                    onBlur = {this._handleBlur}
                    keyboardType = { keyboardType }
                />

                { createIconReact(rightIcon, this._returnAnimatedIconStyles()) }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerInput : {
        flex : 1,
        flexDirection : 'row',
        width : '100%',
        maxHeight : 60,
        padding : 8,
        justifyContent : 'space-evenly',
        alignItems : 'center',
    },

    borderSolidInInput : {
        borderWidth : 1,
    },

    borderRadiusFull : {
        borderRadius : 50,
    },
    
    borderRadiusHalf : {
        borderRadius : 15,
    },

    text : {
        position : 'absolute',
        textAlign : 'center',
        backgroundColor : Colors.white,
    },

    textInput : {
        flex : 3,
        width : '100%',
        height : '100%',
        textAlign : 'center',
    }
})

export { 
    Input
};