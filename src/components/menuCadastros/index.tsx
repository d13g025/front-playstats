import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './menuCadastros.style';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuCadastros: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('cadastrarJogador')}>
          <Text style={styles.itemText}>Cadastrar Jogador   <Icon name="add" size={20} color=""/></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarTimeA')}>
          <Text style={styles.itemText}>Cadastrar time adversário   <Icon name="shield" size={20} color=""/></Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastrarJogo')}>
          <Text style={styles.itemText}>Cadastrar jogo   <Icon name="football" size={20} color=""/></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuOpcoes')}>
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default MenuCadastros;