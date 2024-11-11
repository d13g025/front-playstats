import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import styles from './listaAdversarios.style';

interface Adversario {
    id_timeAdversario: string;
    nome_timeAdversario: string;
    endereco_timeAdversario: string;
}

const ListaAdversarios: React.FC<{ navigation: any }> = ({ navigation }) => {
    // Estado para armazenar os dados dos adversários
    const [adversarios, setAdversarios] = useState<Adversario[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os dados da API
    const fetchAdversarios = async () => {
        try {
            const response = await axios.get('http://192.168.255.212:3000/timeAdversario'); //work:192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
            setAdversarios(response.data); // Armazena os dados no estado
        } catch (err) {
            setError('Erro ao carregar os dados');
            console.error(err);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    // Usamos useEffect para buscar os dados assim que o componente for montado
    useEffect(() => {
        fetchAdversarios();
    }, []);

    // Função para exibir as opções de editar e excluir
    const showOptions = (item: Adversario) => {
        Alert.alert(
            'Opções',
            `Escolha uma ação para ${item.nome_timeAdversario}:`,
            [
                {
                    text: 'Editar',
                    onPress: () => navigation.navigate('editarJogo', { jogo: item }), // Navega para a tela de edição
                },
                {
                    text: 'Excluir',
                    onPress: () => console.log(`Excluir ${item.nome_timeAdversario}`), // Lógica de exclusão
                },
                { text: 'Cancelar', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    // Exibe a lista ou uma mensagem de erro ou carregamento
    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Carregando adversários...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{error}</Text>
            </View>
        );
    }

    // Renderiza a lista de adversários
    const renderItem = ({ item }: { item: Adversario }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Nome: {item.nome_timeAdversario}</Text>
            <Text style={styles.text}>Endereço: {item.endereco_timeAdversario}</Text>
            <TouchableOpacity style={styles.optionsButton} onPress={() => showOptions(item)}>
                <Text style={styles.optionsText}>+</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Adversários</Text>
            <FlatList
                data={adversarios}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_timeAdversario}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListaAdversarios;