import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Routes from "./src/routes";

export default function App() {
  return (
<<<<<<< HEAD
    <View style={styles.containerRouts}>
      <StatusBar style="light" />
      <LoginScreenEmail />
=======
    <View style = {{ flex : 1 }}>
      <StatusBar style="light" />
      <Routes/>
>>>>>>> login-screen
    </View>
  );
}
