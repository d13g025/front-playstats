import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './dadosTime.style';

const FormDadosTime: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('listaArtilharia')}>
          <Text style={styles.itemText}>Lista de Artilharia e assistencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('listaJogos')}>
          <Text style={styles.itemText}>Lista de jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('estatisticasJogadores')}>
          <Text style={styles.itemText}>Estatisticas dos jogadores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ('estatisticasJogos')}>
          <Text style={styles.itemText}>Estatisticas dos jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuOpcoes')}>
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
        <Image 
          source={require('../assets/img_dadosTime.png')}
          style={styles.logo}
          />
      </View>
  );
};

export default FormDadosTime;