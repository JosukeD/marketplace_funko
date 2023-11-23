import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Iniciar sesión con:', username, password);
    // Aquí puedes realizar lógica adicional para autenticar al usuario
    
  };

  const handleSignUp = () => {
    console.log('Registrarse con:', username, password);
    // Aquí puedes realizar lógica adicional para crear una nueva cuenta de usuario
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
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
