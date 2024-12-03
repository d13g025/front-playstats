import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from './estatisticasJogosUser.style';

const EstatisticaJogos: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
    const { id_login } = route.params;

    const [dadosPlacar, setDadosPlacar] = useState<any>(null);
    const [dadosVitorias, setDadosVitorias] = useState<any>(null);
    const [dadosRegressao, setDadosRegressao] = useState<any>(null); // Novo estado para regressão linear

    // Função para chamar a rota /somaPlacar
    const obterPlacar = async () => {
        try {
            const response = await axios.get(`http://192.168.142.212:3000/somaPlacar/${id_login}`);
            setDadosPlacar(response.data);
        } catch (error) {
            console.error("Erro ao obter placar:", error);
            Alert.alert("Erro", "Não foi possível obter os dados de placar.");
        }
    };

    // Função para chamar a rota /contaVitorias
    const obterVitorias = async () => {
        try {
            const response = await axios.get(`http://192.168.142.212:3000/contaVitorias/${id_login}`);
            setDadosVitorias(response.data);
        } catch (error) {
            console.error("Erro ao obter vitórias:", error);
            Alert.alert("Erro", "Não foi possível obter os dados de vitórias.");
        }
    };

    // Função para chamar a rota /regressaoLinear
    const obterRegressaoLinear = async () => {
        try {
            const response = await axios.get(`http://192.168.142.212:3000/regressaoLinear/${id_login}`);
            setDadosRegressao(response.data);  // Armazena os dados de regressão linear no estado
        } catch (error) {
            console.error("Erro ao obter dados de regressão linear:", error);
            Alert.alert("Erro", "Não foi possível obter os dados de regressão linear.");
        }
    };

    // useEffect para chamar as funções quando o componente for montado
    useEffect(() => {
        obterPlacar();
        obterVitorias();
        obterRegressaoLinear(); // Chama a função de regressão linear
    }, [id_login]);

    const calcularMediaGols = () => {
        if (!dadosPlacar || !dadosVitorias) return 0;

        const totalGolsMarcados = dadosPlacar.total_gols_timePrincipal;
        const totalJogos = dadosVitorias.vitorias + dadosVitorias.empates + dadosVitorias.derrotas;

        if (totalJogos > 0) {
            return totalGolsMarcados / totalJogos;
        }
        return 0; 
    };

    const calcularProbabilidade = () => {
        if (!dadosVitorias) return { probVitoria: 0, probDerrota: 0 };

        const totalJogos = dadosVitorias.vitorias + dadosVitorias.empates + dadosVitorias.derrotas;
        const probVitoria = totalJogos > 0 ? dadosVitorias.vitorias / totalJogos : 0;
        const probDerrota = totalJogos > 0 ? dadosVitorias.derrotas / totalJogos : 0;

        return { probVitoria, probDerrota };
    };

    const { probVitoria, probDerrota } = calcularProbabilidade();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Estatísticas</Text>

            <Text style={styles.title1}>Gols</Text>
            {dadosPlacar && (
                <View style={styles.viewGols}>
                    <Text style={styles.text}>Total de Gols Marcados: <Text style={styles.textDados}>{dadosPlacar.total_gols_timePrincipal}</Text></Text>
                    <Text style={styles.text}>Total de Gols Sofridos: <Text style={styles.textDados}>{dadosPlacar.total_gols_timeAdversario}</Text></Text>
                    <Text style={styles.text}>Média de Gols por Jogo: <Text style={styles.textDados}>{calcularMediaGols().toFixed(2)}</Text></Text>
                </View>
            )}

            <Text style={styles.title1}>Jogos</Text>
            {dadosVitorias && (
                <View style={styles.viewJogos}>
                    <Text style={styles.text}>Vitórias: <Text style={styles.textDados}>{dadosVitorias.vitorias}</Text></Text>
                    <Text style={styles.text}>Empates: <Text style={styles.textDados}>{dadosVitorias.empates}</Text></Text>
                    <Text style={styles.text}>Derrotas: <Text style={styles.textDados}>{dadosVitorias.derrotas}</Text></Text>
                </View>
            )}

            <Text style={styles.title1}>Probabilidades</Text>
            {dadosVitorias && (
                <View style={styles.viewProbabilidade}>
                    <Text style={styles.text}>Probabilidade de Vitória no Próximo Jogo: <Text style={styles.textDados}>{(probVitoria * 100).toFixed(2)}%</Text></Text>
                    <Text style={styles.text}>Probabilidade de Derrota no Próximo Jogo: <Text style={styles.textDados}>{(probDerrota * 100).toFixed(2)}%</Text></Text>
                </View>
            )}

            {/* Exibindo os dados de regressão linear */}
            <Text style={styles.title1}>Previsão com Regressão Linear</Text>
            {dadosRegressao && (
                <View style={styles.viewRegressao}>
                <Text style={styles.text}>Equação de Regressão Linear: y = <Text style={styles.textDados}>{dadosRegressao.equacao[0]} * x + {dadosRegressao.equacao[1]}</Text></Text>
                <Text style={styles.text}>Coeficiente Angular: <Text style={styles.textDados}>{dadosRegressao.coeficienteAngular}</Text></Text>
                <Text style={styles.text}>Coeficiente Linear: <Text style={styles.textDados}>{dadosRegressao.coeficienteLinear}</Text></Text>
                <Text style={styles.text}>Previsão para 2 gols sofridos: <Text style={styles.textDados}>{dadosRegressao.previsaoExemplo}</Text></Text>
            </View>
            )}

            <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('dadosTimeUser', { id_login })}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default EstatisticaJogos;