import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './formCadastro.style';

const FormCadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nomeTime, setNomeTime] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [confirmaEmail, setConfirmaEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste o comportamento para iOS
            keyboardVerticalOffset={100} // Ajuste conforme necessário
        >
            
            <Text style={styles.title}>Cadastro</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={setNomeTime}
                value={nomeTime}
                placeholder="Digite o nome do seu time"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setEndereco}
                value={endereco}
                placeholder="Digite o endereço do seu time"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu Email"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={setConfirmaEmail}
                value={confirmaEmail}
                placeholder="Confirme o Email"
            />
            <TextInput 
                style={styles.input} 
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                placeholder="Sua Senha"
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuOpcoes')}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.goBack('Portifolio')}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default FormCadastro;