import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ButtonTabBar } from './src/components/Buttons'

import { Eye, EyeOff } from 'react-native-feather'

import { InputOutlined } from "./src/components/Inputs";

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
      
      <InputOutlined 
        color={orange} 
        label="Label do Input" 
        placeholder="ex. placeholder"
        leftIcon={Eye}
      />

    </View>
  );
}
