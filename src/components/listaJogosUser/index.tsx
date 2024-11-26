import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import styles from './listaJogosUser.style';

interface Jogo {
  id_jogo: number;
  id_login: number;
  id_timeAdversario: number;
  data_jogo: string;
  hora_jogo: string;
  vencedor_jogo: string;
  placar_jogo: string;
  nome_timeAdversario: string;
  nome_timePrincipal: string;  // Agora inclui o nome do time principal
  endereco_timeAdversario: string;  // Agora inclui o endereço do time adversário
}

const ListaJogosUser: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
  const { id_login } = route.params; // Recupera o id_login da navegação

  const [jogos, setJogos] = useState<Jogo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar os dados da API
  const fetchJogos = async () => {
    try {
      // Usando o id_login na URL da requisição
      const response = await axios.get(`http://192.168.0.9:3000/jogo/porLogin/${id_login}`);
      const jogosData = response.data;

      // Buscar detalhes completos de cada jogo (nome_timePrincipal, nome_timeAdversario, endereco_timeAdversario)
      const jogosComDetalhes = await Promise.all(
        jogosData.map(async (jogo: Jogo) => {
          try {
            const jogoDetalhado = await axios.get(`http://192.168.0.9:3000/jogo/tpEta/${jogo.id_jogo}`);
            return {
              ...jogo,
              nome_timePrincipal: jogoDetalhado.data.nome_time_principal,
              nome_timeAdversario: jogoDetalhado.data.nome_time_adversario,
              endereco_timeAdversario: jogoDetalhado.data.endereco_time_adversario,
            };
          } catch (err) {
            console.error(`Erro ao buscar detalhes do jogo ${jogo.id_jogo}:`, err);
            return jogo;
          }
        })
      );

      setJogos(jogosComDetalhes);
    } catch (err) {
      setError('Erro ao carregar os dados');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJogos();
  }, [id_login]);

  // Exibe uma mensagem de carregamento ou erro, caso necessário
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando jogos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{error}</Text>
      </View>
    );
  }

  // Ordena os jogos pela data de jogo
  const orderedJogos = jogos.sort((a, b) => new Date(b.data_jogo).getTime() - new Date(a.data_jogo).getTime());

  const renderItem = ({ item }: { item: Jogo }) => (
    <View style={styles.item}>
      <Text style={styles.text}>Time Principal: {item.nome_timePrincipal || 'Não disponível'}</Text>
      <Text style={styles.text}>Time Adversário: {item.nome_timeAdversario || 'Não disponível'}</Text>
      <Text style={styles.text}>Endereço do Adversário: {item.endereco_timeAdversario || 'Não disponível'}</Text>
      <Text style={styles.text}>Data jogo: {item.data_jogo || 'Não disponível'}</Text>
      <Text style={styles.text}>Hora jogo: {item.hora_jogo || 'Não disponível'}</Text>
      <Text style={styles.text}>Placar: {item.placar_jogo}</Text>
      <Text style={styles.text}>Vencedor: {item.vencedor_jogo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Jogos</Text>
      <FlatList
        data={orderedJogos} // Lista de jogos ordenada
        renderItem={renderItem}
        keyExtractor={(item) => item.id_jogo.toString()}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('dadosTimeUser',{id_login})}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListaJogosUser;