
/*Esse código define os tipos de parâmetros que podem ser passados entre as diferentes telas de um aplicativo que usa o React Navigation,
mais especificamente um Stack Navigator. O objetivo é garantir que, quando você navega entre as telas, os parâmetros passados estejam
corretos e atendam aos tipos esperados. */

export type RootStackParamList = {
  Home: undefined;  // Página inicial sem parâmetros
  fazerLogin: undefined;  // Tela de login sem parâmetros
  cadastrarTime: undefined;  // Tela para cadastro de time sem parâmetros
  menuOpcoes: undefined;  // Tela de opções sem parâmetros
  cadastrarJogador: undefined;
  cadastrarTimeA: undefined;
  cadastrarJogo: undefined;
  dadosTime: undefined;
  menuArtilhariaAssistenciaUser:{ id_login: number };
  dadosTimeUser: { id_login: number };  // A tela 'dadosTimeUser' espera um parâmetro 'id_login' do tipo número
  listaArtilhariaUser: { id_login: number };
  listaAssistenciaUser: { id_login: number };
  listaJogosUser: { id_login: number };
  estatisticasJogosUser: { id_login: number };
  listaArtilharia: undefined;
  listaAssistencia: undefined;
  listaJogos: undefined;
  estatisticasJogos: undefined;
  estatisticasJogadores: undefined;
  listaDesempenhoJogadores: undefined;
  listaDesempenhoJogos: undefined;
  menuCadastros: undefined;
  menuDesempenhos: undefined;
  meuPerfil: undefined;
  listaAdversarios: undefined;
  editarJogo: { id_jogo: number };
  editarDesempenhoJogador: { id_jogador: number };
  editarAdversario: {id_timeAdversario: number};
};

/*O que é o RootStackParamList?
O tipo RootStackParamList define os parâmetros que cada tela pode ou deve receber.
Ele é usado para garantir que, ao navegar entre as telas, os parâmetros passados estejam tipados corretamente,
ajudando a evitar erros durante o desenvolvimento.
*/