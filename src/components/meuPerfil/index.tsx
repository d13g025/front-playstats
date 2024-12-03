import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from 'components/context/AuthContext';
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import styles from './meuPerfil.style';

interface Login {
    id_login: string;
    nome_timePrincipal: string;
    endereco_timePrincipal: string;
    email: string;
    senha: string;
}

const MeuPerfil: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { id_login } = useAuth(); // Usando o useAuth para pegar o id_login
    console.log('ID de login:', id_login);  // Verificando o id_login

    // Verifica se o id_login é válido, caso contrário, exibe um alerta
    if (!id_login) {
        Alert.alert('Erro', 'ID de login não encontrado');
        return null;
    }

    const [perfil, setPerfil] = useState<Login | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Função para carregar os dados do perfil
    const fetchPerfil = async () => {
        try {
            const response = await axios.get(`http://192.168.142.212:3000/login/${id_login}`);
            console.log('Resposta da API:', response.data);  // Verificando a resposta da API

            // Se a resposta for um array, pegamos o primeiro item
            if (Array.isArray(response.data) && response.data.length > 0) {
                setPerfil(response.data[0]);  // Armazenando o primeiro item se for um array
            } else if (response.data) {
                setPerfil(response.data);  // Caso seja um objeto
            } else {
                setError('Perfil não encontrado.');
            }
        } catch (err) {
            setError('Erro ao carregar os dados');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Função para excluir o perfil
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://192.168.142.212:3000/login/${id_login}`);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Perfil excluído com sucesso!');
                navigation.navigate('Home'); // Navegar para o menu após a exclusão
            } else {
                Alert.alert('Erro', 'Não foi possível excluir o perfil.');
            }
        } catch (err) {
            Alert.alert('Erro', 'Erro ao excluir o perfil.');
            console.error(err);
        }
    };

    // Função para navegar para a tela de edição
    const navigateToEditPage = () => {
        if (perfil) {
            navigation.navigate('editarMeuPerfil', { id_login });
        }
    };

    useEffect(() => {
        fetchPerfil();
    }, [id_login]); // Carregar os dados quando o id_login mudar

    // Verificando o estado 'perfil' após o carregamento dos dados
    useEffect(() => {
        if (perfil) {
            console.log('Dados do perfil:', perfil); // Verificando os dados do perfil
        }
    }, [perfil]);

    // Se estiver carregando, exibe uma mensagem
    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Carregando perfil...</Text>
            </View>
        );
    }

    // Se ocorrer um erro ao carregar os dados
    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{error}</Text>
            </View>
        );
    }

    // Se não houver perfil
    if (!perfil) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Perfil não encontrado.</Text>
            </View>
        );
    }

    console.log('Dados do perfil:', perfil);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/seuTime.png')}
                style={{ width: 115, height: 115, alignSelf: 'center', marginTop:30}}
            />

            <Text style={styles.text}>Nome: {perfil.nome_timePrincipal}</Text>
            <Text style={styles.text}>Endereço: {perfil.endereco_timePrincipal}</Text>
            <Text style={styles.text}>E-mail: {perfil.email}</Text>
            <Text style={styles.text}>Senha: {perfil.senha}</Text>

            <TouchableOpacity style={styles.buttonEditar} onPress={navigateToEditPage}>
                <Text style={styles.textButtonEditar}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonExcluir} onPress={handleDelete}>
                <Text style={styles.textButtonExcluir}>Excluir Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuOpcoes')}>
                <Text style={styles.textButtonVoltar}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MeuPerfil;