import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './editarJogo.style';
import axios
 from 'axios';
const EditarJogos: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    // Recebendo o parâmetro 'jogo' que foi passado da tela anterior
    const { jogo } = route.params; // Verifica se o parâmetro 'jogo' existe
    const [placar, setPlacar] = useState(jogo.placar);
    const [timeAdversario, setTimeAdversario] = useState(jogo.timeAdversario);

    useEffect(() => {
        // Você pode fazer algo aqui quando o parâmetro jogo for carregado, se necessário
    }, [jogo]);

    // Função para salvar as alterações
    const salvarAlteracoes = async () => {
        try {
            await axios.put(`http://192.168.1.219:3000/jogo/${jogo.id}`, {
                placar,
                timeAdversario,
                vencedor: placar === '1-0' ? jogo.timePrincipal : 'Empate' // Simples lógica para determinar vencedor
            });
            Alert.alert('Jogo editado com sucesso!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro ao salvar as alterações. Tente novamente.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Editando Jogo: {jogo.timePrincipal}</Text>
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Placar"
                value={placar}
                onChangeText={setPlacar}
            />
            <TextInput
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Time Adversário"
                value={timeAdversario}
                onChangeText={setTimeAdversario}
            />
            <Button title="Salvar" onPress={salvarAlteracoes} />
        </View>
    );
};

export default EditarJogos;