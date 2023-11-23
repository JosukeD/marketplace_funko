// SignUpForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('tu_backend_url/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registro exitoso:', data);
        // Navega a la pantalla principal después del registro exitoso
        navigation.navigate('Home');
      } else {
        // Muestra un mensaje de error si el registro no fue exitoso
        console.error('Error en el registro:', data.message);
        Alert.alert('Error', 'No se pudo completar el registro. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      Alert.alert('Error', 'Ocurrió un error durante el registro. Por favor, intenta nuevamente.');
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
              onPress={handleSignUp}>
              <Text style={{ color: 'white' }}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SignUpForm;
