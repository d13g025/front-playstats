import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import styles from './listaDesempenho.style';

interface Jogador {
    id_jogador: string;
    nome_jogador: string;
    apelido_jogador: string;
    posicao_jogador: string;
    gols_jogador: number;
    assistencias_jogador: number;
}

const ListaDesempenho: React.FC<{ navigation: any }> = ({ navigation }) => {
    // Estado para armazenar os dados dos jogadores
    const [jogadores, setJogadores] = useState<Jogador[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os dados da API
    const fetchJogadores = async () => {
        try {
            const response = await axios.get('http://192.168.255.212:3000/jogador'); //work:192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
            setJogadores(response.data); // Armazena os dados no estado
        } catch (err) {
            setError('Erro ao carregar os dados');
            console.error(err);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    // Usamos useEffect para buscar os dados assim que o componente for montado
    useEffect(() => {
        fetchJogadores();
    }, []);

    // Função para exibir as opções de editar e excluir
    const showOptions = (item: Jogador) => {
        Alert.alert(
            'Opções',
            `Escolha uma ação para ${item.nome_jogador}:`,
            [
                {
                    text: 'Editar',
                    onPress: () => console.log(`Editar ${item.nome_jogador}`), // Lógica de edição
                },
                {
                    text: 'Excluir',
                    onPress: () => console.log(`Excluir ${item.nome_jogador}`), // Lógica de exclusão
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
                <Text style={styles.title}>Carregando jogadores...</Text>
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

    // Ordena os jogadores por gols
    const jogadoresOrdenados = jogadores.sort((a, b) => b.gols_jogador - a.gols_jogador);

    // Renderiza a lista de jogadores
    const renderItem = ({ item }: { item: Jogador }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.nome_jogador} ({item.apelido_jogador})</Text>
            <Text style={styles.text}>Posição: {item.posicao_jogador}</Text>
            <Text style={styles.text}>Gols: {item.gols_jogador}</Text>
            <Text style={styles.text}>Assistências: {item.assistencias_jogador}</Text>
            <TouchableOpacity 
                style={styles.optionsButton} 
                onPress={() => showOptions(item)}
            >
                <Text style={styles.optionsText}>+</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualizar gols e assistencias</Text>
            <FlatList
                data={jogadoresOrdenados} // Lista ordenada por gols
                renderItem={renderItem}
                keyExtractor={(item) => item.id_jogador}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListaDesempenho;