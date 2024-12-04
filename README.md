# Projeto Aplicativo de Futebol

Este projeto contém códigos de Frontend de um aplicativo que organiza e retorna estatísticas referentes a uma temporada de torneios de jogos de futebol para times amadores.

## Objetivos

- O que essa aplicação faz, e quem usa essa solução?
    Essa aplicação, juntamente com o backend, oferece uma interface móvel interativa.
    O usuário administrador pode se cadastrar faz login, inseri os componentes do time e com isso, cada usuário acessa telas específicas de acordo com seu perfil.
### Personas
 - Telas do usuário ADMINISTRADOR: realiza o cadastro do usuário observador e time. Alimenta o aplicativo com as informações técnicas
 - Tela do usuário OBSERVADOR: consegue consultar dados gerados sobre seu time.
### Modelo de Negócio
 - Sem fins lucrativos
### Modelo de domínio
 - Rede Social

  ## Links
  [link](https://code.visualstudio.com/download)


  Aqui está o `README.md` atualizado com as funcionalidades detalhadas que mencionaste:

---

# **PlayStats**

### **Descrição do Projeto**
O objetivo do projeto **PlayStats** é criar um aplicativo móvel que facilite o registro, a gestão e a visualização das estatísticas dos jogos de futebol amadores.  
A aplicação busca melhorar a precisão e a organização das informações, proporcionando uma plataforma dedicada para o acompanhamento do desempenho dos jogadores e o histórico dos jogos.

---

### **Como Instalar e Rodar o Projeto**

1. **Pré-requisitos**  
   - Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
   - Instale o gerenciador de pacotes `npm` ou `yarn`.
   - Instale o [Expo CLI](https://expo.dev/), utilizando o comando:  
     ```bash
     npm install -g expo-cli
     ```

2. **Clonar o Repositório**  
   Clone este repositório para o seu ambiente local usando o seguinte comando:  
   ```bash
   git clone https://github.com/PatrickXXI/PlayStats.git
   cd PlayStats
   ```

3. **Instalar Dependências**  
   No diretório do projeto, execute o comando:  
   ```bash
   npm install
   ```
   ou, se estiver utilizando `yarn`:  
   ```bash
   yarn install
   ```

4. **Iniciar o Projeto**  
   Execute o seguinte comando para iniciar o servidor Expo:  
   ```bash
   expo start
   ```

5. **Abrir no Emulador ou Dispositivo**  
   - Use o aplicativo **Expo Go** no seu dispositivo móvel para escanear o QR Code gerado no terminal.
   - Ou escolha abrir no emulador Android/iOS diretamente no Expo.

---

### **Funcionalidades Principais**

1. **Cadastro de Jogadores**  
   - **Descrição**: Permite o cadastro de cada jogador com informações básicas, como nome, posição e número da camisa.  
   - **Benefício**: Facilita a identificação e a gestão das estatísticas individuais.

2. **Registro de Jogos**  
   - **Descrição**: Cria eventos de jogos, incluindo data, adversário e detalhes relevantes.  
   - **Benefício**: Mantém um registro organizado dos jogos e permite a inserção das estatísticas de forma sistemática.

3. **Estatísticas de Jogos**  
   - **Descrição**: Registra estatísticas individuais por jogo, como gols, assistências e cartões.  
   - **Benefício**: Proporciona um método preciso para atualizar e consultar as estatísticas.

4. **Histórico de Jogos**  
   - **Descrição**: Armazena e exibe o histórico completo dos jogos e das estatísticas associadas.  
   - **Benefício**: Facilita a análise do desempenho ao longo do tempo e a consulta a dados históricos.

5. **Relatórios Anuais**  
   - **Descrição**: Gera relatórios detalhados com estatísticas anuais, incluindo totais de gols e assistências de cada jogador.  
   - **Benefício**: Oferece uma visão abrangente do desempenho do time e dos jogadores durante o ano.

6. **Notificações e Atualizações**  
   - **Descrição**: Envia notificações sobre próximos jogos e atualizações de estatísticas.  
   - **Benefício**: Mantém os jogadores e a equipe informados e engajados.

7. **Interface Amigável**  
   - **Descrição**: Design simples e intuitivo para garantir que qualquer membro do time possa usar o aplicativo facilmente.  
   - **Benefício**: Facilita a adoção e o uso contínuo por todos os membros do time.

---

### **Tecnologias Utilizadas**

- **Frontend**: React Native com Expo.
- **Backend**: Node.js com Express.
- **Banco de Dados**: MySQL.
- **Outras Dependências**:
  - Axios (para consumo de APIs).
  - React Navigation (para navegação no app).
  - [Adicionar mais tecnologias utilizadas, se necessário.]

---

### **Como Contribuir**

1. Faça um fork deste repositório.
2. Crie um branch para suas alterações:  
   ```bash
   git checkout -b minha-contribuicao
   ```
3. Faça suas alterações e adicione os commits:  
   ```bash
   git commit -m "Descrição do que foi alterado"
   ```
4. Envie as alterações para o seu fork:  
   ```bash
   git push origin minha-contribuicao
   ```
5. Abra um Pull Request no repositório original.

---

### **Licença**

Este projeto está sob a licença [MIT](LICENSE).  

---

### **UML**

![image](https://github.com/user-attachments/assets/6f290a57-2e72-4b22-8e00-f16e2bb8e50b)

  
