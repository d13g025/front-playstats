import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import axios from 'axios'; // Para enviar os dados para o back
import styles from './formTimeA.style';

const FormTimeAdversario: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nome_timeAdversario, setNome_timeAdversario] = useState('');
    const [endereco_timeAdversario, setEndereco_timeAdversario] = useState('');

    const handleSave = async () => {
        // Validação dos campos
        if (!nome_timeAdversario || !endereco_timeAdversario) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Enviando os dados para a API (supondo que a API seja 'http://192.168.1.219:3000/timeadversario')
            const response = await axios.post('http://192.168.255.212:3000/timeadversario', {//work 192.168.1.219 home:192.168.0.10 roteador:192.168.255.212
                nome_timeAdversario,
                endereco_timeAdversario
            });

            // Mensagem de sucesso, caso os dados sejam enviados corretamente
            Alert.alert('Sucesso', response.data.message); // Supondo que a resposta da API tenha uma mensagem
            navigation.navigate('menuCadastros'); // Navega para a tela de opções do menu após sucesso

        } catch (error) {
            // Tratamento de erro caso algo dê errado na requisição
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o time adversário. Tente novamente.');
            console.error(error);
        }
    }; 

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste para iOS
            keyboardVerticalOffset={100} // Ajuste conforme necessário
        >
            <Text style={styles.title}>Cadastrar Time Adversário</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNome_timeAdversario}
                value={nome_timeAdversario}
                placeholder="Digite o nome do time adversário"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setEndereco_timeAdversario}
                value={endereco_timeAdversario}
                placeholder="Digite o endereço"
            />

            {/* Botão para salvar o time adversário */}
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            {/* Botão para voltar para a tela anterior */}
            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            
            {/* Logo da aplicação 
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            /> */}
        </KeyboardAvoidingView>
    );
};

export default FormTimeAdversario;