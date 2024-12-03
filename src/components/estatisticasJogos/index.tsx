import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import styles from './estatisticasJogos.style';
import { useAuth } from 'components/context/AuthContext'; // Assumindo que você tem um contexto de autenticação



const EstatisticaJogos: React.FC<{ navigation: any, route: any }> = ({ navigation }) => {
    const { id_login } = useAuth();  // Obtém o ID do login do contexto de autenticação

    const [dadosPlacar, setDadosPlacar] = useState<any>(null);
    const [dadosVitorias, setDadosVitorias] = useState<any>(null);
    const [dadosRegressao, setDadosRegressao] = useState<any>(null);  // Novo estado para regressão linear

    // Função para chamar a rota /somaPlacar
    const obterPlacar = async () => {
        try {
            const response = await axios.get(`http://192.168.142.212:3000/somaPlacar/${id_login}`); // Alterar para o URL correto do seu backend
            setDadosPlacar(response.data);
        } catch (error) {
            console.error("Erro ao obter placar:", error);
            Alert.alert("Erro", "Não foi possível obter os dados de placar.");
        }
    };

    // Função para chamar a rota /contaVitorias
    const obterVitorias = async () => {
        try {
            const response = await axios.get(`http://192.168.142.212:3000/contaVitorias/${id_login}`); // URL com o id_login
            setDadosVitorias(response.data);
        } catch (error) {
            console.error("Erro ao obter vitórias:", error);
            Alert.alert("Erro", "Não foi possível obter os dados de vitórias.");
        }
    };

    // Função para chamar a rota /regressaoLinear
    const obterRegressaoLinear = async () => {
        try {
            const response = await axios.get(`http://192.168.142.212:3000/regressaoLinear/${id_login}`); // URL com o id_login
            setDadosRegressao(response.data);  // Armazena os dados de regressão linear no estado
        } catch (error) {
            console.error("Erro ao obter dados de regressão linear:", error);
            Alert.alert("Erro", "Não foi possível obter os dados de regressão linear.");
        }
    };

    // Função para calcular a média de gols por jogo
    const calcularMediaGols = () => {
        if (!dadosPlacar || !dadosVitorias) return 0;

        const totalGolsMarcados = dadosPlacar.total_gols_timePrincipal;
        const totalJogos = dadosVitorias.vitorias + dadosVitorias.empates + dadosVitorias.derrotas;

        if (totalJogos > 0) {
            return totalGolsMarcados / totalJogos;
        }
        return 0; // Se não houver jogos, a média é zero.
    };

    // Função para calcular as probabilidades de vitória e derrota
    const calcularProbabilidade = () => {
        if (!dadosVitorias) return { probVitoria: 0, probDerrota: 0 };

        const totalJogos = dadosVitorias.vitorias + dadosVitorias.empates + dadosVitorias.derrotas;
        const probVitoria = totalJogos > 0 ? dadosVitorias.vitorias / totalJogos : 0;
        const probDerrota = totalJogos > 0 ? dadosVitorias.derrotas / totalJogos : 0;

        return { probVitoria, probDerrota };
    };

    // UseEffect para chamar as funções quando o componente for montado
    useEffect(() => {
        obterPlacar();
        obterVitorias();
        obterRegressaoLinear();  // Chama a função de regressão linear
    }, [id_login]);  // Dependência em id_login para atualizar quando ele mudar

    // Calcular as probabilidades de vitória e derrota
    const { probVitoria, probDerrota } = calcularProbabilidade();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Estatísticas</Text>

            <Text style={styles.title1}>Gols</Text>
            {dadosPlacar && (
                <View style={styles.viewGols}>
                    <Text style={styles.text}>Total de Gols Marcados: {dadosPlacar.total_gols_timePrincipal}</Text>
                    <Text style={styles.text}>Total de Gols Sofridos: {dadosPlacar.total_gols_timeAdversario}</Text>
                    <Text style={styles.text}>Média de Gols por Jogo: {calcularMediaGols().toFixed(2)}</Text>
                </View>
            )}

            <Text style={styles.title1}>Jogos</Text>
            {dadosVitorias && (
                <View style={styles.viewJogos}>
                    <Text style={styles.text}>Vitórias: {dadosVitorias.vitorias}</Text>
                    <Text style={styles.text}>Empates: {dadosVitorias.empates}</Text>
                    <Text style={styles.text}>Derrotas: {dadosVitorias.derrotas}</Text>
                </View>
            )}

            <Text style={styles.title1}>Probabilidades</Text>
            {dadosVitorias && (
                <View style={styles.viewProbabilidade}>
                    <Text style={styles.text}>Probabilidade de Vitória no Próximo Jogo: {(probVitoria * 100).toFixed(2)}%</Text>
                    <Text style={styles.text}>Probabilidade de Derrota no Próximo Jogo: {(probDerrota * 100).toFixed(2)}%</Text>
                </View>
            )}

            {/* Exibindo os dados de regressão linear */}
            <Text style={styles.title1}>Previsão com Regressão Linear</Text>
            {dadosRegressao && (
                <View style={styles.viewRegressao}>
                    <Text style={styles.text}>Equação de Regressão Linear: y = {dadosRegressao.equacao[0]} * x + {dadosRegressao.equacao[1]}</Text>
                    <Text style={styles.text}>Coeficiente Angular: {dadosRegressao.coeficienteAngular}</Text>
                    <Text style={styles.text}>Coeficiente Linear: {dadosRegressao.coeficienteLinear}</Text>
                    <Text style={styles.text}>Previsão para 2 gols sofridos: {dadosRegressao.previsaoExemplo}</Text>
                </View>
            )}

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('dadosTime', { id_login })}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default EstatisticaJogos;