import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

import ViewPager from '@react-native-community/viewpager'
import { ChevronLeft, ChevronRight } from 'react-native-feather';

import styles from './styles';

import imgBackground from '../../../assets/background.png'
import logo from '../../../assets/logo.png'
import decal from '../../../assets/images-welcome-screens/decal.png'

import WelcomeFristScreen from './welcome-frist';
import WelcomeLastScreen from './welcome-last';

export default function WelcomeScreen () {
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
                    >
                    <WelcomeFristScreen key="1" />
                    <WelcomeLastScreen key="2" />
                </ViewPager>

                <View style= {styles.containerButtons}>
                    <ChevronLeft size={18} color="#DE583D" />
                    <Image source={decal} style={styles.decal} />
                    <ChevronRight size={18} color="#DE583D" />
                </View>

            </View>

        </ImageBackground>
    )
}