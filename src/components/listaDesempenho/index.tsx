import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import styles from './listaDesempenho.style';

interface Jogador {
    id: string;
    nome: string;
    apelido: string;
    posicao: string;
    gols: number;
    assistencias: number;
}

const jogadores: Jogador[] = [
    { id: '1', nome: 'Karim Benzema', apelido: 'Benz', posicao: 'Atacante', gols: 324, assistencias: 167},
    { id: '2', nome: 'Luka Modrić', apelido: 'Luka', posicao: 'Meio-campo', gols: 90, assistencias: 70},
    { id: '3', nome: 'Vinícius Júnior', apelido: 'Vini', posicao: 'Atacante', gols: 40, assistencias: 60},
    { id: '4', nome: 'Rodrygo Goes', apelido: 'Rodrygo', posicao: 'Atacante', gols: 20, assistencias: 25},
    { id: '5', nome: 'Toni Kroos', apelido: 'Kroos', posicao: 'Meio-campo', gols: 30, assistencias: 90},
    { id: '6', nome: 'David Alaba', apelido: 'Alaba', posicao: 'Defensor', gols: 10, assistencias: 20},
    { id: '7', nome: 'Eduardo Camavinga', apelido: 'Eddie', posicao: 'Meio-campo', gols: 5, assistencias: 10},
    { id: '8', nome: 'Ferland Mendy', apelido: 'Mendy', posicao: 'Defensor', gols: 10, assistencias: 15},
    { id: '9', nome: 'Antonio Rüdiger', apelido: 'Rüdiger', posicao: 'Defensor', gols: 5, assistencias: 3},
    { id: '10', nome: 'Marco Asensio', apelido: 'Asensio', posicao: 'Atacante', gols: 30, assistencias: 25},
];

const jogadoresOrdenados = jogadores.sort((a, b) => b.assistencias - a.assistencias);  // sort, ordenando por ordem de gols

const ListaDesempenho: React.FC<{ navigation: any }> = ({ navigation }) => {

    const renderItem = ({ item }: { item: Jogador }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.nome} ({item.apelido})</Text>
            <Text style={styles.text}>Posição: {item.posicao}</Text>
            <Text style={styles.text}>Gols: {item.gols}</Text>
            <Text style={styles.text}>Assistências: {item.assistencias}</Text>
            <TouchableOpacity 
                style={styles.optionsButton} 
                onPress={() => showOptions(item)}
            >
                <Text style={styles.optionsText}>+</Text>
            </TouchableOpacity>
        </View>
    );

    const showOptions = (item: Jogador) => {
        Alert.alert(
            'Opções',
            `Escolha uma ação para ${item.nome}:`,
            [
                {
                    text: 'Editar',
                    onPress: () => console.log(`Editar ${item.nome}`),
                },
                {
                    text: 'Excluir',
                    onPress: () => console.log(`Excluir ${item.nome}`),
                },
                { text: 'Cancelar', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={jogadoresOrdenados} // Use a lista ordenada
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ListaDesempenho;