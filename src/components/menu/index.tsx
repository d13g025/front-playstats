import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './menu.style'

const Menu: React.FC<{ navigation: any }> = ({ navigation }) => {
  
  const handlePress = (item: string) => {
    // Adicione lógica aqui para o que deve acontecer ao pressionar um item
    console.log(`${item} pressionado`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('cadastrarTime')}>
        <Text style={styles.itemText}>Cadastrar time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('fazerLogin')}>
        <Text style={styles.itemText}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;