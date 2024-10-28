import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './menuArtilhariaAssistenciaUser.style';

const MenuArtilhariaAssistenciaUser: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('listaArtilhariaUser')}>
                <Text style={styles.buttonMenuText}>Artilharia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMenu} onPress={() => navigation.navigate('listaAssistenciaUser')}>
                <Text style={styles.buttonMenuText}>Assistencias</Text>
            </TouchableOpacity>
    </View>
  );
};

export default MenuArtilhariaAssistenciaUser;