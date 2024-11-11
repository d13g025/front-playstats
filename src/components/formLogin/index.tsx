import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './formLogin.style';

const FormLogin: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        if (!email || !senha) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            // Definindo a URL da API e o corpo da requisição
            const response = await fetch('http://192.168.255.212:3000/autentica', {//work 192.168.1.219 casa:192.168.0.10 Rotiador:192.168.255.212
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    senha,
                }),
            });

            const data = await response.json();

            // Verificando a resposta da API
            if (response.ok) {
                // Login bem-sucedido, navega para a tela de opções
                navigation.navigate('menuOpcoes');
            } else {
                // Exibe erro se a resposta for diferente de ok
                Alert.alert('Erro', data.message || 'Erro ao fazer login');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
        }
    };
    return (
        <View style={styles.container}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            />
            <Text style={styles.title}>Seja bem vindo(a)!</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu Email"
                value={email}
                onChangeText={setEmail} // Atualizando o estado
            />
            <TextInput
                style={styles.input}
                placeholder="Sua Senha"
                secureTextEntry // Adiciona segurança ao campo de senha
                value={senha}
                onChangeText={setSenha} // Atualizando o estado
            />
            <TouchableOpacity style={styles.button}  onPress={handleLogin}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Esqueci a senha</Text>
            </TouchableOpacity>

            
        </View>
    );
}

export default FormLogin;