import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Eye, EyeOff } from 'react-native-feather'

import * as Button from './src/components/Buttons'

import {
  white,
  blue,
  orange,
  chumbo,
  noEvidence
} from './src/components/Colors'

import styles from './styles'

export default function App() {
  const [color, setColor] = useState( chumbo )

  return (
    <View style={styles.containerRouts}>
      <StatusBar style="auto" />

      <Button.Solid 
        color={color} 
        label="Botao Solido" 
        onPress={ () => {console.log("Elemento precionado > Solido")} } 
      />

      <Button.Outlined 
        color={color} 
        disable={true}
        label="Botao Linha"
        onPress={ () => {console.log("Elemento precionado > Linha")} } 
      />

      <View style={styles.containerTabBar}>
        <Button.TabBar
          label="Elemento A" 
          color={color} 
          onPress={() => {console.log("Elemento precionado > A")}} 
          icon={EyeOff}
        />
        <Button.TabBar
          label="Elemento B" 
          color={color} 
          onPress={() => {console.log("Elemento precionado > B")}} 
          icon={EyeOff}
        />
        <Button.TabBar
          label="Elemento C" 
          color={color} 
          onPress={() => {console.log("Elemento precionado > C")}} 
          icon={EyeOff}
        />
        <Button.TabBar 
          label="Elemento D" 
          color={color} 
          onPress={() => {console.log("Elemento precionado > D")}} 
          icon={EyeOff}
        />
      </View>
    </View>
  );
}
