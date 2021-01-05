import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';

import ViewPager from '@react-native-community/viewpager'
import { ChevronLeft, ChevronRight } from 'react-native-feather';

import styles from './styles';

import imgBackground from '../../../assets/background.png'
import logo from '../../../assets/logo.png'

import WelcomeFristScreen from './welcome-frist';
import WelcomeLastScreen from './welcome-last';

export default function WelcomeScreen () {
    const [selectedPage, setSelectedPage] = useState('0');
    const [visible, setVisible] = useState('transparent');

    const navigation = useNavigation();

    function navigationToLogIn() {
        navigation.navigate('LoginScreen');
    }

    function visibleElements() {
        if( selectedPage < "1" && visible == 'transparent'){
            setVisible('#DE583D')
        }
        else {
            setVisible('transparent')
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
                        alert(selectedPage)
                        visibleElements()
                    }}
                    >
                    <WelcomeFristScreen key="1" />
                    <WelcomeLastScreen key="2" />

                </ViewPager>

                <View style= {styles.containerButtons}>
                    <ChevronLeft size={18} color="transparent" />

                    <TouchableOpacity onPress={() => {navigationToLogIn()}} style={{ flexDirection : 'row', alignItems : 'center' }}>
                        <Text style={{ color : visible, fontSize : 16, marginRight : 8 }}>Avançar</Text>
                        <ChevronRight size={18} color={visible} />
                    </TouchableOpacity>
                </View>

            </View>

        </ImageBackground>
    )
}