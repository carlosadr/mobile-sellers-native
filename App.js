import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './styles'

export default function App() {
  return (
    <View style={styles.containerRouts}>
      <StatusBar style="light" />
      <LoginScreenEmail />
    </View>
  );
}
