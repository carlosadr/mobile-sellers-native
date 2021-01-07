import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ButtonSolid, ButtonOutlined } from './src/components/Buttons'

import { ChevronLeft } from 'react-native-feather'

// import { ChevronLeft } from 'react-feather';

import styles from './styles'

export default function App() {
  return (
    <View style={styles.containerRouts}>
      <StatusBar style="auto" />
      <ButtonSolid 
        label="Botao primario" 
        icon= {<ChevronLeft size={20} color="#FFF" />}
        onPress={ () => {alert("Botão primario precionado ")} } />
    </View>
  );
}
