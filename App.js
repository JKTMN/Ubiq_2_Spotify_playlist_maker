import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import {ThemeProvider} from './src/context/ThemeContext';

import StackNavigator from './src/navigation/MainNavigation';


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}