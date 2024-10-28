import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './editarJogo.style';

const EditarJogos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { jogo } = route.params; // Obtendo o item a ser editado

    return (
        <View style={styles.container}>
            <Text>Editando {jogo.timePrincipal}</Text>
            <TextInput 
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Placar"
                defaultValue={jogo.placar}
            />
            <TextInput 
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Time Adversário"
                defaultValue={jogo.timeAdversario}
            />
            <Button title="Salvar" onPress={() => {
                // Aqui você pode adicionar a lógica para salvar as alterações
                console.log('Salvando...');
                navigation.goBack(navigation.navigate('listaDesempenhoJogos')); // Volta para a tela anterior
            }} />
        </View>
    );
};

export default EditarJogos;
