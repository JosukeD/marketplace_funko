import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import StackNavigator from './StackNavigator';


export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StackNavigator />
    </View>
  );
}
