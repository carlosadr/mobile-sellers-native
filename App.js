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
      <ButtonSolid 
        label="Botao com Icone"
        marginVertical = {8}
        leftIcon= {<Camera size={20} color={white} />}
        onPress={ () => {alert("Botão primario com icone foi precionado ")} } />

      <ButtonSolid 
        label="Botao sem Icone" 
        marginVertical = {8}
        rightIcon = {<UploadCloud size={20} color={white} />}
        onPress={ () => {alert("Botão primario sem icone foi precionado ")} } />

      <ButtonOutlined 
        label="Botao com Icone"
        marginVertical = {8}
        leftIcon= {<Camera size={20} color={blue} />}
        onPress={ () => {alert("Botão primario com icone foi precionado ")} } />

      <ButtonOutlined 
        label="Botao sem Icone" 
        marginVertical = {8}
        rightIcon = {<UploadCloud size={20} color={blue} />}
        onPress={ () => {alert("Botão primario sem icone foi precionado ")} } />
    </View>
  );
}
