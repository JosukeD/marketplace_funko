// SignInForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Image } from 'react-native';

const SignInForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();

  const handleSignIn = () => {
    // Lógica de autenticación aquí
    if (username === 'usuario' && password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Home');
    } else {
      console.log('Error en las credenciales');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Encabezado */}
      <View style={{ height: '15%', backgroundColor: 'rgb(3, 30, 60)', flexDirection: 'row', padding: 10, alignItems: 'flex-end' }}>
        <Image source={require('./logo.jpg')} style={{ width: 60, height: 60 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, color: 'white', alignSelf: 'center', marginTop: '9%' }}>MARKETPLACE FUNKOS</Text>
      </View>

      {/* Fondo con recuadro central */}
      <ImageBackground source={require('./funkobackground.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
        {/* Recuadro central */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          {/* Componente de formulario */}
          <View style={{ width: '80%' }}>
            {/* Entrada de usuario */}
            <TextInput
              placeholder="Usuario"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={{ backgroundColor: 'white', marginBottom: 10, padding: 10, borderRadius: 5 }}
            />

            {/* Entrada de contraseña */}
            <TextInput
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{ backgroundColor: 'white', marginBottom: 10, padding: 10, borderRadius: 5 }}
            />

            {/* Botones de inicio de sesión y registro */}
            <TouchableOpacity
              style={{ backgroundColor: 'rgb(3, 30, 60)', padding: 10, borderRadius: 5, alignItems: 'center' }}
              onPress={handleSignIn}>
              <Text style={{ color: 'white' }}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: 'rgb(3, 30, 60)', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ color: 'white' }}>Registrarse</Text>
            </TouchableOpacity>

            {/* Agrega un botón para navegar directamente a la página principal (para propósitos de desarrollo) */}
            <TouchableOpacity
              style={{ backgroundColor: 'rgb(3, 30, 60)', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}
              onPress={() => navigation.navigate('Home')}>
              <Text style={{ color: 'white' }}>Ir a la página principal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SignInForm;
