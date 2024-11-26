import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './menuArtilhariaAssistencia.style';

const MenuArtilhariaAssistencia: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonMenu} 
        onPress={() => navigation.navigate('listaArtilharia')}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.buttonMenuText}>Artilharia</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonMenu} 
        onPress={() => navigation.navigate('listaAssistencia')}  // Passa o id_login para a próxima tela
      >
        <Text style={styles.buttonMenuText}>Assistências</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuArtilhariaAssistencia;