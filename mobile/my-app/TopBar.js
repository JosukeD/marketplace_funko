import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TopBar = ({ onSignInPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Funko Pop</Text>
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.signInButton}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
  },
  logo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInButton: {
    color: 'white',
    fontSize: 16,
  },
});

export default TopBar;
