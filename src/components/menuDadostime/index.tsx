import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import styles from './dadosTime.style';

const MenuDadosTime: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
      <TouchableOpacity 
        style={styles.button1} 
        onPress={() => navigation.navigate('listaArtilharia')}
      >
        <Text style={styles.itemText}>Lista de Artilharia e assistencias</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('listaJogos')} 
      >
        <Text style={styles.itemText}>Lista de jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('estatisticasJogadores')} 
      >
        <Text style={styles.itemText}>Estatisticas dos jogadores</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('estatisticasJogos')} 
      >
        <Text style={styles.itemText}>Estatisticas dos jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonVoltar} 
        onPress={() => navigation.navigate('menuOpcoes')}
      >
        <Text style={styles.itemText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuDadosTime;