import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './styles'
import WelcomeScreen from './src/screens/welcome-screens';

export default function App() {
  return (
    <View style={styles.containerRouts}>
      <WelcomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}
