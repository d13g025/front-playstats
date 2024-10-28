import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './menuCadastros.style';

const MenuCadastros: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuOpcoes')}>
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
      />
    </ScrollView>
  );
};

export default MenuCadastros;