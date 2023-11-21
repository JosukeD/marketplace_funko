import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import TopBar from '../TopBar.js';
import SignInForm from '../SignInForm.js';



const HomeScreen = ({ user, onSignOut }) => (
  <View style={styles.container}>
    <TopBar />
    <Image source={require('front_end\main\src\resources\logo.jpg')} style={styles.logo} />
    {user ? (
      <>
        <Text>Bienvenido, {user.username}!</Text>
        <Button title="Cerrar Sesión" onPress={onSignOut} />
        {/* Agregar el contenido de la página principal aquí */}
      </>
    ) : (
      <SignInForm />
    )}
  </View>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'blue', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
};

export default HomeScreen;
