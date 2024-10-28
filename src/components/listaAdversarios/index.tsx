import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './listaAdversarios.style';

interface Adversario {
    id: string;
    nome: string;
    endereco: string;
}

const adversarios: Adversario[] = [
    { id: '1', nome: 'Barcelona', endereco: 'Camp Nou' },
    { id: '2', nome: 'Atlético de Madrid', endereco: 'Estadio Metropolitano' },
    { id: '3', nome: 'Sevilla', endereco: 'Estadio Ramón Sánchez Pizjuán' },
    { id: '4', nome: 'Real Betis', endereco: 'Estadio Benito Villamarín' },
    { id: '5', nome: 'FC Porto', endereco: 'Estádio do Dragão' },
    { id: '6', nome: 'Valencia', endereco: 'Estadio de Mestalla' },
    { id: '7', nome: 'Real Sociedad', endereco: 'Estadio Anoeta' },
    { id: '8', nome: 'Cádiz', endereco: 'Estadio Nuevo Mirandilla' },
    { id: '9', nome: 'Shakhtar Donetsk', endereco: 'Estadio Oblasny SportKomplex Metalist' },
    { id: '10', nome: 'Athletic Bilbao', endereco: 'Estadio de San Mamés' },
];

const ListaAdversarios: React.FC<{ navigation: any }> = ({ navigation }) => {

    const renderItem = ({ item }: { item: Adversario }) => (
        <View style={styles.item}>
            <Text style={styles.text}>Nome: {item.nome}</Text>
            <Text style={styles.text}>Endereço: {item.endereco}</Text>
        </View>
    );

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Adversários</Text>
            <FlatList
                data={adversarios}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuDesempenhos')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ListaAdversarios;