import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ImageBackground } from 'react-native';
import { ChevronLeft, ChevronRight } from 'react-native-feather';

import styles from './styles'
import logo from './assets/logo.png'
import imgBackground from './assets/background.png'
import WelcomeScreen from './src/screens/welcome-screens';

export default function App() {
  return (
    <ImageBackground 
      source={imgBackground} 
      style={styles.imgBackground}>

      <StatusBar style="light" />

      <View style={styles.containerRouts}>
        <Image source={logo} style={styles.imgLogo} />
        <WelcomeScreen/>
        <View style= {styles.containerButtons}>
          <ChevronLeft size={18} color="#000" />
          {/* <Image /> */}
          <ChevronRight size={18} color="#000" />
        </View>
      </View>

    </ImageBackground>
  );
}
