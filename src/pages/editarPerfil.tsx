import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import EditarMeuPerfil from 'components/editarMeuPerfil';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const EditarPerfil: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#10451d' }}>
      <EditarMeuPerfil navigation={navigation} route={route} /> 
    </View>
  );
};

export default EditarPerfil;