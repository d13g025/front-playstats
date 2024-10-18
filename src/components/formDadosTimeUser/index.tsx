import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './formDadosTimeUser.style';

const FormDadosTimeUser: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('listaArtilhariaUser')}>
        <Text style={styles.itemText}>Lista de Artilharia e assistencias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.itemText}>Lista de jogos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.itemText}>Estatisticas dos jogadores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.itemText}>Estatisticas dos jogos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.itemText}>Voltar</Text>
      </TouchableOpacity>
      <Image 
        source={require('../assets/img_dadosTime.png')}
        style={styles.logo}
        />
    </View>
  );
};

export default FormDadosTimeUser;