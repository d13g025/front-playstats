import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import styles from './formCadastro.style';

const FormCadastro: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nomeTime, setNomeTime] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [email, setEmail] = useState('');
    const [confirmaEmail, setConfirmaEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80} // Ajuste esse valor conforme necessário
    >
        <ScrollView 
                contentContainerStyle={styles.innerContainer} 
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
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
                        onChangeText={setCidade}
                        value={cidade}
                        placeholder="Digite a cidade"
                    />
                    <TextInput 
                        style={styles.input} 
                        onChangeText={setEstado}
                        value={estado}
                        placeholder="Digite o estado"
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

                    {/* Botões */}
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('menuOpcoes')}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.logo}
                        />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default FormCadastro;