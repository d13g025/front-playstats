import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './menuOpcoes.style';

const MenuOpcoes: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuCadastros')}>
          <Text style={styles.itemText}>Cadastros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
          <Text style={styles.itemText}>Atualizar desempenho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
          <Text style={styles.itemText}>Visualizar dados do time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('meuPerfil')}>
          <Text style={styles.itemText}>Meu perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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