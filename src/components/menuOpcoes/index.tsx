import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './menuOpcoes.style';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuOpcoes: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuCadastros')}>
          <Text style={styles.itemText}>Cadastros   <Icon name="add" size={20} color=""/></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
          <Text style={styles.itemText}>Atualizar desempenho   <Icon name="refresh" size={20} color="" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
          <Text style={styles.itemText}>Visualizar dados do time   <Icon name="eye" size={20} color="" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('meuPerfil')}>
          <Text style={styles.itemText}>Meu perfil   <Icon name="person" size={20} color=""/></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDesconectar} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.itemText}>Desconectar</Text>
        </TouchableOpacity>
        <Image 
          source={require('../assets/img_MenuOpcoes.png')}
          style={styles.logo}
          />
      </View>
    </ScrollView>
  );
};

export default MenuOpcoes;