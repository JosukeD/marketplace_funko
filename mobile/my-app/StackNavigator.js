// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInForm from './SignInForm';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInForm}
          options={{ headerShown: false }} // Oculta la barra de navegación en SignIn
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Muestra la barra de navegación en Home
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
