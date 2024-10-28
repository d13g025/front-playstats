import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './menuDesempenhos.style';

const MenuDesempenhos: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('listaDesempenhoJogadores')}>
          <Text style={styles.itemText}>Atualizar desempenho jogadores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('listaDesempenhoJogos')}>
          <Text style={styles.itemText}>Atualizar resultado jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('listaAdversarios')}>
          <Text style={styles.itemText}>Atualizar Adversarios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuOpcoes')}>
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
        <Image
        source={require('../assets/trofeu.png')}
        style={styles.logo}
        />
      </View>
    </ScrollView>
  );
};

export default MenuDesempenhos;