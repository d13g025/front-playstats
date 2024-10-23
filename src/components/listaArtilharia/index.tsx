import React, { useState } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import styles from './listaArtilharia.style';

const ListaArtilharia: React.FC<{ navigation: any }> = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de artilharia</Text> 
            <Text style={styles.title}>Lista de assistencias</Text> 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default ListaArtilharia;