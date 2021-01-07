import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ButtonTabBar } from './src/components/Buttons'

import { Package, PieChart, Settings, ShoppingBag } from 'react-native-feather'

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

      <ButtonTabBar
        label="Dashboard"
        marginVertical = {8}
        icon= {<PieChart size={16} color={blue} strokeWidth={1.2} />}
        onPress={ () => {console.log("Você precionou a Dashboard")} } />

<ButtonTabBar
        label="Vendas"
        marginVertical = {8}
        icon= {<ShoppingBag size={16} color={blue} strokeWidth={1.2} />}
        onPress={ () => {console.log("Você precionou a Vendas")} } />

<ButtonTabBar
        label="Produtos"
        marginVertical = {8}
        icon= {<Package size={16} color={blue} strokeWidth={1.2} />}
        onPress={ () => {console.log("Você precionou a Produtos")} } />

<ButtonTabBar
        label="Settings"
        marginVertical = {8}
        icon= {<Settings size={16} color={blue} strokeWidth={1.2} />}
        onPress={ () => {console.log("Você precionou a Dashboard")} } />
    </View>
  );
}
