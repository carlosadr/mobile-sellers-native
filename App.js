import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <View style={{ flex : 1 }}>
      <StatusBar style="light" />
      <LoginScreen/>
    </View>
  );
}
