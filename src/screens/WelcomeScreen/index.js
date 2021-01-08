import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager'

import { View, Image, ImageBackground } from 'react-native';
import { OnlyText } from '../../components/Buttons'

import * as Colors from '../../components/Colors';

import { ChevronRight } from 'react-native-feather';

import styles from './styles';

import imgBackground from '../../../assets/background.png'
import logo from '../../../assets/logo.png'

import WelcomeFristScreen from './welcome-frist';
import WelcomeLastScreen from './welcome-last';

export default function WelcomeScreen () {
    const [selectedPage, setSelectedPage] = useState(1);
    const [visible, setVisible] = useState(Colors.noEvidence);
    const [disabled, setDisabled] = useState(true);

    const navigation = useNavigation();

    function navigationToLogIn() {
        navigation.navigate('LoginScreen');
    }

    function visibleElements() {
        if( selectedPage < 1 && visible == Colors.noEvidence){
            setVisible(Colors.orange)
            setDisabled(false)
        }else{
            setVisible(Colors.noEvidence)
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
                    onPageSelected={(event) => {
                        setSelectedPage(event.nativeEvent.position)
                        visibleElements()
                    }}
                    >
                    <WelcomeFristScreen key="1" />
                    <WelcomeLastScreen key="2" />

                </ViewPager>

                <View style= {styles.containerButtons}>
                    <View style={{ flex : 3 }} />
                    <OnlyText 
                        label="Avançar"
                        color={visible}
                        disabled={disabled}
                        rightIcon={ChevronRight}
                        onPress={ () => { navigationToLogIn() }}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}