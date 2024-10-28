import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './formJogo.style';

const FormJogo: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nomeTimeA, setNomeTimeA] = useState('');
    const [dataJogo, setDataJogo] = useState('');
    const [horarioJogo, setHorarioJogo] = useState('');

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste o comportamento para iOS
            keyboardVerticalOffset={100} // Ajuste conforme necessário
        >
            
            <Text style={styles.title}>Cadastrar jogo</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNomeTimeA}
                value={nomeTimeA}
                placeholder="Digite o nome do time adversario"
            />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Consultar</Text>
            </TouchableOpacity>

            <TextInput 
                style={styles.input} 
                onChangeText={setDataJogo}
                value={dataJogo}
                placeholder="Digite a data do jogo. Ex: 25/02/2024"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setHorarioJogo}
                value={horarioJogo}
                placeholder="Digite o horario do jogo"
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

export default FormJogo;