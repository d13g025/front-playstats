import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import styles from './listaAssistencia.style';

interface Jogador {
    id: string;
    nome: string;
    apelido: string;
    posicao: string;
    gols: number;
    assistencias: number;
    jogos: number
}

const jogadores: Jogador[] = [
    { id: '1', nome: 'Karim Benzema', apelido: 'Benz', posicao: 'Atacante', gols: 324, assistencias: 167, jogos: 610 },
    { id: '2', nome: 'Luka Modrić', apelido: 'Luka', posicao: 'Meio-campo', gols: 90, assistencias: 70, jogos: 470 },
    { id: '3', nome: 'Vinícius Júnior', apelido: 'Vini', posicao: 'Atacante', gols: 40, assistencias: 60, jogos: 130 },
    { id: '4', nome: 'Rodrygo Goes', apelido: 'Rodrygo', posicao: 'Atacante', gols: 20, assistencias: 25, jogos: 100 },
    { id: '5', nome: 'Toni Kroos', apelido: 'Kroos', posicao: 'Meio-campo', gols: 30, assistencias: 90, jogos: 400 },
    { id: '6', nome: 'David Alaba', apelido: 'Alaba', posicao: 'Defensor', gols: 10, assistencias: 20, jogos: 70 },
    { id: '7', nome: 'Eduardo Camavinga', apelido: 'Eddie', posicao: 'Meio-campo', gols: 5, assistencias: 10, jogos: 50 },
    { id: '8', nome: 'Ferland Mendy', apelido: 'Mendy', posicao: 'Defensor', gols: 10, assistencias: 15, jogos: 80 },
    { id: '9', nome: 'Antonio Rüdiger', apelido: 'Rüdiger', posicao: 'Defensor', gols: 5, assistencias: 3, jogos: 40 },
    { id: '10', nome: 'Marco Asensio', apelido: 'Asensio', posicao: 'Atacante', gols: 30, assistencias: 25, jogos: 200 },
];

const jogadoresOrdenados = jogadores.sort((a, b) => b.assistencias - a.assistencias);  // sort, ordenando por ordem de gols

const ListaAssistencia: React.FC<{ navigation: any }> = ({ navigation }) => {

    const renderItem = ({ item }: { item: Jogador }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.nome} ({item.apelido})</Text>
            <Text style={styles.text}>Posição: {item.posicao}</Text>
            <Text style={styles.text}>Gols: {item.gols}</Text>
            <Text style={styles.text}>Assistências: {item.assistencias}</Text>
            <Text style={styles.text}>Jogos: {item.jogos}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={jogadoresOrdenados} // Use a lista ordenada
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTime')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ListaAssistencia;