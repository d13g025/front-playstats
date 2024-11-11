import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import axios from 'axios'; // Para enviar os dados para o back
import { Picker } from '@react-native-picker/picker'; // Importando o Picker para o Dropdown
import styles from './formJogador.style';

const FormJogador: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nome_jogador, setNome_jogador] = useState('');
    const [apelido_jogador, setApelido_jogador] = useState('');
    const [posicao_jogador, setPosicao_jogador] = useState(''); // Estado para armazenar a posição selecionada

    const handleSave = async () => {
        // Validação dos campos
        if (!nome_jogador || !apelido_jogador || !posicao_jogador) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Enviando os dados para a API (supondo que a API seja 'http://192.168.1.219:3000/jogador')
            const response = await axios.post('http://192.168.255.212:3000/jogador', {//work 192.168.1.219 casa:192.168.0.10 rotiador:192.168.255.212
                nome_jogador,
                apelido_jogador,
                posicao_jogador
            });

            // Mensagem de sucesso, caso os dados sejam enviados corretamente
            Alert.alert('Sucesso', response.data.message); // Supondo que a resposta da API tenha uma mensagem
            navigation.navigate('menuCadastros'); // Navega para a tela de opções do menu após sucesso

        } catch (error) {
            // Tratamento de erro caso algo dê errado na requisição
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o jogador. Tente novamente.');
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste para iOS
            keyboardVerticalOffset={100} // Ajuste conforme necessário
        >
            <Text style={styles.title}>Cadastrar Jogadores</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNome_jogador}
                value={nome_jogador}
                placeholder="Digite o nome do jogador"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setApelido_jogador}
                value={apelido_jogador}
                placeholder="Digite o apelido do jogador"
            />

            {/* Dropdown para seleção da posição */}
            <TouchableOpacity style={styles.picker}>
            <Picker
                selectedValue={posicao_jogador}
                onValueChange={(itemValue) => setPosicao_jogador(itemValue)} // Atualiza o estado com a posição selecionada
                style={{color:'#8b8c89'}}
            >
                <Picker.Item label="Selecione a posição" value="" />
                <Picker.Item label="Goleiro" value="goleiro" />
                <Picker.Item label="Zagueiro" value="zagueiro" />
                <Picker.Item label="Volante" value="volante" />
                <Picker.Item label="Meio Campo" value="meio_campo" />
                <Picker.Item label="Lateral" value="lateral" />
                <Picker.Item label="Atacante" value="atacante" />
            </Picker>
            </TouchableOpacity>

            {/* Botão para salvar o jogador */}
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            {/* Botão para voltar para a tela anterior */}
            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            {/* Logo da aplicação */}
        </KeyboardAvoidingView>
    );
};

export default FormJogador;