import React from 'react';
import { View, Text, TouchableOpacity,Image} from 'react-native';
import styles from './menuDesempenhos.style';


const MenuDesempenhos: React.FC<{ navigation: any }> = ({ navigation }) => {

  return (
      <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('listaDesempenhoJogadores')}>
          <Text style={styles.itemText}>Atualizar desempenho jogadores</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('listaDesempenhoJogos')}
        >
          <Text style={styles.itemText}>Atualizar resultado jogos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('listaAdversarios')}
        >
          <Text style={styles.itemText}>Atualizar Adversarios</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonVoltar} 
          onPress={() => navigation.navigate('menuOpcoes')}
        >
          <Text style={styles.itemText}>Voltar</Text>
        </TouchableOpacity>
      </View>
  );
};

export default MenuDesempenhos;