import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './formJogador.style';

const FormJogador: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nomeJogador, setNomeJogador] = useState('');
    const [idade, setIdade] = useState('');
    const [apelido, setApelido] = useState('');
    const [camisa, setCamisa] = useState('');
    const [posicao, setPosicao] = useState('');

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste o comportamento para iOS
            keyboardVerticalOffset={100} // Ajuste conforme necessário
        >
            
            <Text style={styles.title}>Cadastro de Jogadores</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNomeJogador}
                value={nomeJogador}
                placeholder="Digite o nome do jogador"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setApelido}
                value={apelido}
                placeholder="Digite o apelido do jogador"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setPosicao}
                value={posicao}
                placeholder="Digite a posicao do jogador"
            />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
        </KeyboardAvoidingView>
    );
};

export default FormJogador;