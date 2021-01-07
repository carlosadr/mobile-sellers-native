import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ButtonSolid, ButtonOutlined } from './src/components/Buttons'

import { Camera, UploadCloud } from 'react-native-feather'

import {
  white,
  blue,
  orange,
  chumbo,
  noEvidence
} from './src/components/Colors'

import styles from './styles'

export default function App() {
  return (
    <View style={styles.containerRouts}>
      <StatusBar style="auto" />
      
    </View>
  );
}
