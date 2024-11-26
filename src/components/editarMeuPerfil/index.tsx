import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from './editarMeuPerfil.style';

const EditarMeuPerfil: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const { id_login } = route.params;  // Acessando o id_login passado como parâmetro

    // Estados para armazenar os dados do perfil do usuário
    const [perfil, setPerfil] = useState<any>(null);
    const [nome_timePrincipal, setNome_timePrincipal] = useState<string>('');
    const [endereco_timePrincipal, setEndereco_timePrincipal] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    useEffect(() => {
        console.log('id_login recebido:', id_login);  // Verificar se id_login está correto

        if (!id_login) {
            Alert.alert('Erro', 'ID do login inválido.');
            return;  // Previne que a requisição seja feita com um ID inválido
        }

        const fetchPerfil = async () => {
            try {
                const response = await axios.get(`http://192.168.0.9:3000/login/${id_login}`);
                const data = response.data;

                console.log('Dados do perfil:', data);  // Verificando os dados retornados pela API

                if (data.length > 0) {
                    // A resposta é um array, então precisamos acessar o primeiro item
                    const userProfile = data[0];  // Acessando o primeiro item do array
                    setPerfil(userProfile);  // Armazena os dados do perfil
                    setNome_timePrincipal(userProfile.nome_timePrincipal || '');  // Define o nome
                    setEndereco_timePrincipal(userProfile.endereco_timePrincipal || '');  // Define o endereço
                    setEmail(userProfile.email || '');  // Define o email
                    setSenha(userProfile.senha || '');  // Define a senha
                } else {
                    Alert.alert('Erro', 'Perfil não encontrado.');
                }
            } catch (error) {
                Alert.alert('Erro', 'Erro ao carregar os dados do perfil.');
                console.error(error);
            }
        };

        fetchPerfil();  // Carrega os dados do perfil ao montar o componente
    }, [id_login]);

    // Função para salvar as alterações
    const salvarAlteracoes = async () => {
        try {
            const response = await axios.patch(`http://192.168.0.9:3000/login/${id_login}`, {
                nome_timePrincipal: nome_timePrincipal,
                endereco_timePrincipal: endereco_timePrincipal,
                email: email,
                senha: senha,
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Perfil editado com sucesso!');
                navigation.goBack();  // Volta para a tela anterior
            } else {
                Alert.alert('Erro', 'Erro ao salvar as alterações.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar as alterações. Tente novamente.');
            console.error(error);
        }
    };

    // Verifica se o perfil foi carregado corretamente
    if (!perfil) {
        return (
            <View style={styles.container}>
                <Text>Carregando dados do perfil...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Perfil</Text>

            <Text style={styles.text}>Nome atual: {nome_timePrincipal}</Text>
            <Text style={styles.text}>Endereço atual: {endereco_timePrincipal}</Text>
            <Text style={styles.text}>E-mail: {email}</Text>
            <Text style={styles.text}>Senha: {senha}</Text>

            <Text style={styles.titleEdicao}>Atualize os dados abaixo:</Text>

            <TextInput
                style={styles.input}
                placeholder="Novo Nome"
                value={nome_timePrincipal}
                onChangeText={(text) => setNome_timePrincipal(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Novo Endereço"
                value={endereco_timePrincipal}
                onChangeText={(text) => setEndereco_timePrincipal(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Novo E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nova Senha"
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />

            <TouchableOpacity onPress={salvarAlteracoes} style={styles.buttonSalvar}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditarMeuPerfil;