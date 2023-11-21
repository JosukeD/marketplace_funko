import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignInForm from './SignInForm';


const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'SignIn'}>
        <Stack.Screen
          name="Home"
          component={() => <HomeScreen user={user} onSignOut={handleSignOut} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={() => <SignInForm onSignIn={handleSignIn} />}
          options={{ title: 'Sign In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
