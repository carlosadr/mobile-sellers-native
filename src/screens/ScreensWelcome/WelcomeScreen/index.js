import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ImageBackground } from 'react-native';

import ViewPager from '@react-native-community/viewpager'

import {
    imgBackground_2,
    imgLogo,
} from '../../../components/utils/Images'

import Button from '../../../components/Button';

import WelcomeFristScreen from './welcome-frist';
import WelcomeLastScreen from './welcome-last';

import styles from './styles';

export default function WelcomeScreen () {

    const [visible, setVisible] = useState("noEvidence");
    const [disabled, setDisabled] = useState(true);

    const navigation = useNavigation();

    function navigationToLogIn() {
        navigation.navigate('LoginScreen');
    }

    function visibleElements(position) {
        if( position > 0 && visible === "noEvidence" ){
            setVisible("orange")
            setDisabled(false)
        }else{
            setVisible("noEvidence")
            setDisabled(true)
        }
    }

    return(
        <ImageBackground 
            source={ imgBackground_2 } 
            style={ styles.imgBackground }>
            
            <View style={styles.containerRouts}>

                <Image source={imgLogo} style={styles.imgLogo} />

                <ViewPager 
                    style={styles.viewPager}
                    initialPage={0}
                    scrollEnabled={true}
                    onPageSelected={( event ) => {
                        console.log( event.nativeEvent.position + " is disabled: " + disabled )
                        visibleElements(event.nativeEvent.position)
                    }}
                    >
                    <WelcomeFristScreen key="1" />
                    <WelcomeLastScreen key="2" />
                </ViewPager>

                <View style= {styles.containerButtons}>
                    <View style={{ flex : 2.5 }} />
                    <Button 
                        label="Avançar"
                        color={ visible }
                        disabled={ disabled }
                        rightIcon={ "chevron-right" }
                        onPress={ () => { navigationToLogIn() } }
                    />
                </View>
            </View>
        </ImageBackground>
    )
}