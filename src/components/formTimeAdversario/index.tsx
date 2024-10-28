import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './formTimeA.style';

const FormTimeAdversario: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nomeTimeA, setNomeTimeA] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste o comportamento para iOS
            keyboardVerticalOffset={100} // Ajuste conforme necessário
        >
            
            <Text style={styles.title}>Cadastro time adversario</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNomeTimeA}
                value={nomeTimeA}
                placeholder="Digite o nome do time adversario"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setEndereco}
                value={endereco}
                placeholder="Digite o endereço"
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

export default FormTimeAdversario;