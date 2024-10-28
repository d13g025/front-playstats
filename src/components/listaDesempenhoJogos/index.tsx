import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import styles from './listaDesempenhoJogos.style';

interface Jogo {
    id: string;
    timePrincipal: string;
    placar: string;
    timeAdversario: string;
    vencedor: string;
}

const jogos: Jogo[] = [
    { id: '1', timePrincipal: 'Real Madrid', placar: '1-0', timeAdversario: 'Barcelona', vencedor: 'Real Madrid' },
    { id: '2', timePrincipal: 'Real Madrid', placar: '2-2', timeAdversario: 'Atlético de Madrid', vencedor: 'Empate' },
    { id: '3', timePrincipal: 'Real Madrid', placar: '3-1', timeAdversario: 'Sevilla', vencedor: 'Real Madrid' },
    { id: '4', timePrincipal: 'Real Madrid', placar: '2-1', timeAdversario: 'Real Betis', vencedor: 'Real Madrid' },
    { id: '5', timePrincipal: 'Real Madrid', placar: '2-0', timeAdversario: 'FC Porto', vencedor: 'Real Madrid' },
    { id: '6', timePrincipal: 'Real Madrid', placar: '1-1', timeAdversario: 'Valencia', vencedor: 'Empate' },
    { id: '7', timePrincipal: 'Real Madrid', placar: '4-1', timeAdversario: 'Real Sociedad', vencedor: 'Real Madrid' },
    { id: '8', timePrincipal: 'Real Madrid', placar: '3-0', timeAdversario: 'Cádiz', vencedor: 'Real Madrid' },
    { id: '9', timePrincipal: 'Real Madrid', placar: '1-1', timeAdversario: 'Shakhtar Donetsk', vencedor: 'Empate' },
    { id: '10', timePrincipal: 'Real Madrid', placar: '2-0', timeAdversario: 'Athletic Bilbao', vencedor: 'Real Madrid' },
];

const orderedJogos = [...jogos].sort((a, b) => a.id.localeCompare(b.id));  // sort, ordenando por ordem de gols

const ListaDesempenhoJogos: React.FC<{ navigation: any }> = ({ navigation }) => {

    const renderItem = ({ item }: { item: Jogo }) => (
        <View style={styles.item}>
            <Text style={styles.text}>{item.timePrincipal}</Text>
            <Text style={styles.text}>{item.placar}</Text>
            <Text style={styles.text}>{item.timeAdversario}</Text>
            <Text style={styles.text}>Vencedor da partida: {item.vencedor}</Text>
            <TouchableOpacity 
                style={styles.optionsButton} 
                onPress={() => showOptions(item)}
            >
                <Text style={styles.optionsText}>+</Text>
            </TouchableOpacity>
        </View>
    );

    const showOptions = (item: Jogo) => {
        Alert.alert(
            'Opções',
            `Escolha uma ação para ${item.timePrincipal}:`,
            [
                {
                    text: 'Editar',
                    onPress: () => navigation.navigate('editarJogo', { jogo: item }),
                },
                {
                    text: 'Excluir',
                    onPress: () => console.log(`Excluir ${item.timePrincipal}`),
                },
                { text: 'Cancelar', style: 'cancel' },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={orderedJogos} // Use a lista ordenada
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ListaDesempenhoJogos;