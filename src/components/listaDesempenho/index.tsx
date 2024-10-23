import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './listaDesempenho.style';

const ListaDesempenho: React.FC<{ navigation: any }> = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de desempenho</Text> 
            <Text style={styles.text}>Imprimir uma lista com os dados dos jogadores com a opção de editar, deletar e incluir. Esses dados irão aparecer na lista de artilharia e assistencias</Text> 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuOpcoes')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default ListaDesempenho;