import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, FlatList, Alert } from 'react-native';
import axios from 'axios'; // Para fazer requisições para a API
import styles from './formJogo.style';

const FormJogo: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nome_timeAdversario, setNome_timeAdversario] = useState('');
    const [data_jogo, setdata_jogo] = useState('');
    const [horario_jogo, sethorario_jogo] = useState('');
    const [time_adversario, settime_adversario] = useState<any[]>([]); // Estado para armazenar os times retornados pela API
    const [loading, setLoading] = useState(false); // Estado para controle de carregamento

    // Função para consultar os times adversários
    const consultartime_adversario = async () => {
        setLoading(true); // Ativa o estado de carregamento
        try {
            // Passando o valor de nome_timeAdversario na URL da requisição
            const response = await axios.get(`http://192.168.255.212:3000/timeAdversario/${nome_timeAdversario}`); //Rotiador:192.168.255.212
            
            // Mapeando os dados para adicionar o método 'toString' em cada time
            const timesComToString = response.data.map((time: any) => ({
                ...time,
                toString: `${time.nome_timeAdversario}`
            }));
    
            // Atualiza o estado com os dados dos times
            settime_adversario(timesComToString); 
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao consultar os times adversários. Tente novamente.');
            console.error(error);
        } finally {
            setLoading(false); // Desativa o estado de carregamento
        }
    };

    // Função para selecionar o time adversário
    const selecionarTimeAdversario = (time: string) => {
        setNome_timeAdversario(time); // Atualiza o campo de nome do time adversário com o time selecionado
        settime_adversario([]); // Limpa a lista de times após a seleção
    };

    // Função para salvar o jogo
    const salvarJogo = async () => {
        // Validação dos campos
        if (!nome_timeAdversario || !data_jogo || !horario_jogo) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            setLoading(true); // Ativa o estado de carregamento

            // Envia os dados do jogo para a API
            const response = await axios.post('http://192.168.255.212:3000/jogo', { //work 192.168.1.219 home 192.168.0.10 roteador 192.168.255.212
                data_jogo,
                horario_jogo
            });

            // Exibe a mensagem de sucesso recebida da API
            Alert.alert('Sucesso');
            navigation.navigate('menuCadastros'); // Navega para a tela de opções após salvar com sucesso
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o jogo. Tente novamente.');
            console.error(error);
        } finally {
            setLoading(false); // Desativa o estado de carregamento
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={100} 
        >
            <Text style={styles.title}>Cadastrar Jogo</Text>

            {/* Campo para nome do time adversário */}
            

            {/* Campos para data e horário do jogo */}
            <TextInput 
                style={styles.input} 
                onChangeText={setdata_jogo}
                value={data_jogo}
                placeholder="Digite a data do jogo. Ex: 25/02/2024"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={sethorario_jogo}
                value={horario_jogo}
                placeholder="Digite o horário do jogo"
            />

<TextInput 
                style={styles.input} 
                onChangeText={setNome_timeAdversario}
                value={nome_timeAdversario}
                placeholder="Digite o nome do time adversário"
            />

            {/* Botão de consultar */}
            <TouchableOpacity 
                style={styles.button} 
                onPress={consultartime_adversario}
                disabled={loading} // Desativa o botão enquanto está carregando
            >
                <Text style={styles.buttonText}>{loading ? 'Consultando...' : 'Consultar'}</Text>
            </TouchableOpacity>

            {/* Exibição da lista de times adversários */}
            {time_adversario.length > 0 && (
                <FlatList
                    style={{width:'58%'}}
                    data={time_adversario}
                    keyExtractor={(item) => item.id_timeAdversario.toString()} // Usando o ID único do time
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.timeItem} 
                            onPress={() => selecionarTimeAdversario(item.nome_timeAdversario)}
                        >
                            {/* Exibindo o toString do time */}
                            <Text style={styles.timeText}>{item.toString}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
            {/* Botão de salvar */}
            <TouchableOpacity 
                style={styles.button} 
                onPress={salvarJogo}
                disabled={loading} // Desativa o botão enquanto está carregando
            >
                <Text style={styles.buttonText}>{loading ? 'Salvando...' : 'Salvar'}</Text>
            </TouchableOpacity>

            {/* Botão de voltar */}
            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    );
};

export default FormJogo;