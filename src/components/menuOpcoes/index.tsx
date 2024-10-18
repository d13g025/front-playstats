import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './menuOpcoes.style';

const MenuOpcoes: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarJogador')}>
        <Text style={styles.itemText}>Cadastrar Jogador</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarTimeA')}>
        <Text style={styles.itemText}>Cadastrar time adversário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarJogo')}>
        <Text style={styles.itemText}>Cadastrar jogo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
        <Text style={styles.itemText}>Visualizar dados do time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.itemText}>Desconectar</Text>
      </TouchableOpacity>
      <Image 
        source={require('../assets/img_MenuOpcoes.png')}
        style={styles.logo}
        />
    </View>
  );
};

export default MenuOpcoes;