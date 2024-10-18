import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './formLogin.style';

const FormLogin: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seja bem vindo(a)</Text>

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
                value={password}
                onChangeText={setPassword} // Atualizando o estado
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuOpcoes')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Esqueci a senha</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/logo.png')}
                style={styles.image}
            />
        </View>
    );
}

export default FormLogin;