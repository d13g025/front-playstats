import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './menuCadastros.style';
import { Ionicons } from '@expo/vector-icons';

const MenuCadastros: React.FC<{ navigation: any }> = ({ navigation }) => { 

  return (
      <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('cadastrarJogador')}>
          <Text style={styles.itemText}>Cadastrar Jogador   <Ionicons name="add" size={20} color="" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarTimeA')}>
          <Text style={styles.itemText}>Cadastrar time adversário   <Ionicons name="shield" size={20} color="" /></Text>  
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarJogo')}>
          <Text style={styles.itemText}>Cadastrar jogo   <Ionicons name="football" size={20} color="" /></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuOpcoes')}>
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
      </View>
  );
};

export default MenuCadastros;