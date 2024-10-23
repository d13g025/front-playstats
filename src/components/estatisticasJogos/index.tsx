import React, { useState } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import styles from './estatisticasJogos.style';

const EstatisticasJogos: React.FC<{ navigation: any }> = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Estatisticas dos Jogos</Text> 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default EstatisticasJogos;