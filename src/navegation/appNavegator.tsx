// Instalar as seguintes dependências:

// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-screens react-native-safe-area-context
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Login from '../pages/login';
import CadastrarTimeP from '../pages/cadastrarTimeP';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="fazerLogin" component={Login} />
      <Stack.Screen name="cadastrarTime" component={CadastrarTimeP} />
    </Stack.Navigator>
  );
};

export default AppNavigator;