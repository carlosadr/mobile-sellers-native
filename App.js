import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

<<<<<<< HEAD
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <View style={{ flex : 1 }}>
      <StatusBar style="light" />
      <LoginScreen/>
=======
import Routes from "./src/routes";

export default function App() {
  return (
    <View style = {{ flex : 1 }}>
      <StatusBar style="auto" />
      <Routes/>
>>>>>>> routes
    </View>
  );
}
