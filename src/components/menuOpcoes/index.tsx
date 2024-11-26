import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useAuth } from 'components/context/AuthContext';
import styles from './menuOpcoes.style';
import { Ionicons } from '@expo/vector-icons';

const MenuOpcoes: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { id_login, setIdLogin } = useAuth();  // Usando o hook para obter o id_login e setIdLogin
  
  const handleLogout = () => {
    setIdLogin(null);  // Desconectar o usuário (definir id_login como null)
    navigation.navigate('Home');  // Redirecionar para a tela inicial
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('menuCadastros')}>
        <Text style={styles.itemText}>Cadastros   <Ionicons name="add" size={20} color="white" /></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
        <Text style={styles.itemText}>Atualizar desempenho   <Ionicons name="refresh" size={20} color="white" /></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
        <Text style={styles.itemText}>Visualizar dados do time   <Ionicons name="eye" size={20} color="white" /></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('meuPerfil')}>
        <Text style={styles.itemText}>Meu perfil   <Ionicons name="person" size={20} color="white" /></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDesconectar} onPress={handleLogout}>
        <Text style={styles.itemText}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuOpcoes;