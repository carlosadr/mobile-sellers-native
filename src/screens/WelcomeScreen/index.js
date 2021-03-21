import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager'

import { View, Image, ImageBackground } from 'react-native';
import Button from '../../components/Button'

import { ChevronRight } from 'react-native-feather';

import styles from './styles';

import imgBackground from '../../../assets/background.png';
import logo from '../../../assets/logo.png';

import WelcomeFristScreen from './welcome-frist';
import WelcomeLastScreen from './welcome-last';

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
            source={imgBackground} 
            style={styles.imgBackground}>
            
            <View style={styles.containerRouts}>

                <Image source={logo} style={styles.imgLogo} />

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
                        color={visible}
                        disabled={disabled}
                        rightIcon={ChevronRight}
                        onPress={ () => { navigationToLogIn() } }
                    />
                </View>
            </View>
        </ImageBackground>
    )
}