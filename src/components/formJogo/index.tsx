import React, { useState, useEffect } from 'react';
import {Text, TextInput, TouchableOpacity, FlatList, Alert, Platform, KeyboardAvoidingView, Image} from 'react-native';
import axios from 'axios';
import styles from './formJogo.style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAuth } from 'components/context/AuthContext';

const FormJogo: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { id_login } = useAuth(); 

    const [fk_timeAdversario_id_timeAdversario, setIdTimeAdversario] = useState<number | null>(null); // Agora armazenamos o id do time
    const [nome_timeAdversario, setNomeTimeAdversario] = useState(''); // Nome do time para exibição no campo de texto
    const [data_jogo, setDataJogo] = useState<Date | null>(null); // Agora armazenamos o objeto Date
    const [hora_jogo, setHoraJogo] = useState('');
    const [time_adversario, setTimeAdversario] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false); // Estado para controlar o modal do DateTimePicker
    const [date, setDate] = useState(new Date()); // Estado para armazenar a data selecionada

    // Função para consultar os times adversários
    const consultarTimeAdversario = async () => {
        if (nome_timeAdversario.trim() === '') {
            setTimeAdversario([]);
            return;
        }
    
        setLoading(true);
        try {
            const response = await axios.get(
                `http://192.168.142.212:3000/buscarTimeAdversario?nome_timeAdversario=${nome_timeAdversario}&fk_login_id_login=${id_login}`
            );
            
            // Mapeia os dados para adicionar um 'toString' em cada time
            const timesComToString = response.data.map((time: any) => ({
                ...time,
                toString: `${time.nome_timeAdversario}`,
            }));
    
            setTimeAdversario(timesComToString);
        } catch (error) {
            Alert.alert('Erro', 'Erro ao consultar os times adversários');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Usar o useEffect para debouncing na consulta
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            consultarTimeAdversario();
        }, 500); // Espera 500ms antes de fazer a requisição

        return () => clearTimeout(timeoutId); // Limpa o timeout se o nome mudar
    }, [nome_timeAdversario]);

    // Função para selecionar o time adversário
    const selecionarTimeAdversario = (time: string, id: number) => {
        setIdTimeAdversario(id); // Armazena o ID do time
        setNomeTimeAdversario(time); // Atualiza o nome do time
        setTimeAdversario([]); // Limpa a lista após a seleção
    };

    // Função para salvar o jogo no banco de dados
    const salvarJogo = async () => {
        // Validação dos campos
        if (!fk_timeAdversario_id_timeAdversario || !data_jogo || !hora_jogo || !id_login) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            setLoading(true); // Ativa o estado de carregamento

            // Formatar a data no formato ISO para enviar para o backend
            const formattedDataJogo = data_jogo.toISOString(); // Converte o objeto Date para o formato ISO

            // Envia os dados do jogo para a API
            const response = await axios.post('http://192.168.142.212:3000/jogo', {
                fk_timeAdversario_id_timeAdversario,  // Agora envia o id do time adversário
                data_jogo: formattedDataJogo, // Envia a data no formato ISO
                hora_jogo,
                fk_login_id_login: id_login // Envia o id_login para o backend
            });

            // Exibe a mensagem de sucesso recebida da API
            Alert.alert('Sucesso', 'Jogo salvo com sucesso!');
            navigation.navigate('menuCadastros'); // Navega para a tela de opções após salvar com sucesso
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao salvar o jogo. Tente novamente.');
            console.error(error);
        } finally {
            setLoading(false); // Desativa o estado de carregamento
        }
    };

    // Função que será chamada quando a data for selecionada no DateTimePicker
    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios' ? true : false); // Para iOS, mantém o DateTimePicker aberto após a seleção
        setDate(currentDate);
        setDataJogo(currentDate); // Armazenando o objeto Date diretamente
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            keyboardVerticalOffset={100}
        >
            
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Cadastrar Jogo</Text>

            <TouchableOpacity onPress={() => setShow(true)} style={styles.input}>
                <Text>{data_jogo ? data_jogo.toLocaleDateString() : 'Selecionar data'}</Text>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="calendar"
                    onChange={onChange}
                />
            )}

            <TextInput 
                style={styles.input} 
                onChangeText={setHoraJogo}
                value={hora_jogo}
                placeholder="Digite o horário do jogo"
            />

            <TextInput
                style={styles.input}
                placeholder="Digite o nome do time adversário"
                onChangeText={setNomeTimeAdversario}
                value={nome_timeAdversario}
            />

            {time_adversario.length > 0 && (
                <FlatList
                    style={{ width: '75%', marginLeft: 75 }}
                    data={time_adversario}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.buttonTime} 
                            onPress={() => selecionarTimeAdversario(item.nome_timeAdversario, item.id_timeAdversario)}
                        >
                            <Text style={styles.buttonTextTime}>{item.toString}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id_timeAdversario.toString()} // Usando ID único
                />
            )}

            <TouchableOpacity 
                style={styles.button} 
                onPress={salvarJogo}
                disabled={loading} // Desativa o botão enquanto está carregando
            >
                <Text style={styles.buttonText}>{loading ? 'Salvando...' : 'Salvar'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('menuCadastros')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default FormJogo;