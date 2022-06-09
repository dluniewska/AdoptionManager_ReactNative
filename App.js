import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RoutesStack } from './app/routes/RoutesStack';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
          <RoutesStack />      
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
