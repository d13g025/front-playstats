import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import EstatisticasJogosUser from 'components/estatisticasJogosUser';

interface HomeProps {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any, any>;  // Tipando o 'route' corretamente
}

const EstatisticaJogosUser: React.FC<HomeProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#415d43' }}>
      <EstatisticasJogosUser navigation={navigation} route={route} /> 
    </View>
  );
};

export default EstatisticaJogosUser;