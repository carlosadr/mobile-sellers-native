import React from 'react';
import {
    View,
    Text,
    Image,
    Animated,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { Feather } from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable';

import * as Colors from '../utils/Colors'
import { defaultAvatar } from '../utils/Images'

interface SwipeableProductsProps {
    image : any,
    name : string,
    sizes : string,
    category : string,
    price : string,
    price_discount : string,
    onRightPress : any,
}

const RightActions = ({ progress, dragX, onPress }) => {
    const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[ styles.rightAction ]}>
                <Animated.View style={ { transform: [{ scale }] }}>
                    <Feather name="trash-2" size={18} color={ Colors.white } />
                </Animated.View>
                <Animated.Text style={[ styles.actionText, { transform: [{ scale }] }]}>
                    Delete
                </Animated.Text>
            </View>
        </TouchableOpacity>
    );
}

const SwipeableProducts: React.FC<SwipeableProductsProps> = ({ 
    image,
    name,
    sizes,
    category,
    price,
    price_discount, 
    onRightPress 
}) => (
    <>
        <Swipeable
            renderRightActions={(progress, dragX) => (
                <RightActions progress={progress} dragX={dragX} onPress={onRightPress} />
            )}
        >
            <View style={{ flexDirection : 'row', }} >
                <View style={[ styles.containerProducts, styles.containerShadow ]}>
                    <View style={ styles.containerImage }>
                        <Image style={ styles.image } source={ image } />
                    </View>

                    <View style={ styles.containerDescription }>
                        <Text style={ styles.containerDescriptionTitle }>
                            { name }
                        </Text>
                        <Text style={ styles.containerSubDescription }>
                            { sizes }
                        </Text>
                        <Text style={ styles.containerSubDescription }>
                            { category }
                        </Text>
                    </View>

                    <View style={ styles.containerValues }>
                        <Text style={ styles.containerPrice }>
                            { price }
                        </Text>
                        <Text style={ styles.containerPrice }>
                            { price_discount }
                        </Text>
                    </View>
                </View>
            </View>
        </Swipeable>
    </>
);

export default SwipeableProducts;

const styles = StyleSheet.create({
    containerShadow : {
        // add shadows for iOS only
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.10,

        // add shadows for Android only
        // No options for shadow color, shadow offset, shadow opacity like iOS
        elevation: 4,
    },

    rightAction: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 12,
        marginHorizontal : 8,
        marginVertical : 4,
        backgroundColor: Colors.orange,
    },

    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: 16,
    },

    containerProducts : {
        flex : 1,
        flexDirection : 'row',
        height : 108,
        marginVertical : 4,
        marginHorizontal : 8,
        borderRadius : 15,
        backgroundColor : Colors.white,
    },

    containerImage : {
        flex : 1.5,
        padding : 8,
        borderRadius : 8,
    },
    
    image : { 
        width : '100%', 
        height : '100%', 
        resizeMode : 'contain' 
    },
    
    containerDescription : {
        flex : 2.5,
        paddingHorizontal : 8,
        paddingVertical : 10,
    },

    containerDescriptionTitle : {
        flex : 1,
        fontSize : 16,
        color : Colors.chumbo,
        textAlignVertical : 'center',
    },

    containerSubDescription : {
        flex : 1,
        fontSize : 12,
        color : Colors.noEvidence,
        textAlignVertical : 'center',
    },

    containerValues : {
        flex : 1,
        paddingVertical : 16,
    },

    containerPrice : {
        flex : 1,
        fontSize : 14,
        color : Colors.chumbo,
        textAlignVertical : 'center',
    }
})