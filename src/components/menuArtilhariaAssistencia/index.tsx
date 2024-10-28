import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './menuArtilhariaAssistencia.style';

const MenuArtilhariaAssistencia: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('listaArtilharia')}>
                <Text style={styles.buttonMenuText}>Artilharia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('listaAssistencia')}>
                <Text style={styles.buttonMenuText}>Assistencias</Text>
            </TouchableOpacity>
    </View>
  );
};

export default MenuArtilhariaAssistencia;