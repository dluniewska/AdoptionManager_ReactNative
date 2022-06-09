import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import { ListScreen } from '../screens/ListScreen';

const Stack = createNativeStackNavigator();

export const RoutesStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen name="AnimalsList" component={ListScreen} />
      </Stack.Navigator>
  );
};