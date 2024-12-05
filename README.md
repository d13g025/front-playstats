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

## Documentação do Usuáruio

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

# **Dentro do aplicativo no  Expoo Go**


## Funcionalidades Principais
O PlayStats oferece as seguintes funcionalidades:

1. **Cadastro e Login**
   - Ao abrir o aplicativo, clique em **"Cadastrar Time"**.
   - Preencha as informações solicitadas, como:
       - Nome do seu time.
       - Endereço do seu time.
       - E-mail.
       - Senha.
   - Clique em **"Salvar"** para salvar, após isso será redirecionado a tela inicial.
   - Clique em **"Realizar Login"**.
   - Use seu e-mail e senha para fazer login.

    ![image](https://github.com/user-attachments/assets/df42e032-449e-404f-a3aa-4979b3efa6c0)


2. **Cadastro de Jogadores**:
    - Permite adicionar jogadores, incluindo nome, apelido e posição.
    - Exemplo:
      - Home, vá em "cadastros" => "cadastrar jogador".
      - Preencha as informações e salve.
        
    ![image](https://github.com/user-attachments/assets/81ae56bb-3477-49eb-85f2-34130294960d)


3. **Cadastro de Time Adversário**:
    - Permite adicionar times adversários, incluindo nome, e endereço.
    - Exemplo:
      - Home, vá em "cadastros" => "cadastrar time adversário".
      - Preencha as informações e salve.
     
    ![image](https://github.com/user-attachments/assets/ec69bd74-01e4-4ff1-802b-184150438527)


4. **Cadastro de jogo**:
    - Crie e gerencie jogos com informações com dados do adversário.
    - Exemplo:
      - Home, vá em "cadastros" => "cadastrar jogo".
      - Preencha as informações e salve.

    ![image](https://github.com/user-attachments/assets/62448f7a-64aa-4149-a6e6-8bfe70d4371a)

5. **Atualizar Desempenhos**:
    - Modulo responsável pelas atualizações dos dados cadastrados anteriomentes: atualizar desempenho dos jogadores, dos jogos e dados do time adversário.
    - Exemplo:
      - Home, vá em "Atualizar Desempenho" => selecione qual dado a ser atualizado (jogo, jogador, time adversário).
      - Preencha as informações e salve.

    ![image](https://github.com/user-attachments/assets/fd8a3b44-fbd1-4f47-ac67-9c23b8ed79f7)

6. **Atualizar Perfil**:
    - Modulo responsável pelas atualizações dos dados cadastrados inicialmente para realizar login.
    - Exemplo:
      - Home, vá em "Meu Pergil" => selecione qual opção deseja: "editar perfil" ou "excluir perfil".
          - Se "editar perfil", na nova aba a ser direcionado, edite as informações e salve.
          - Se "excluir perfil", confirme no Alerta que irá abrir, e seu perfil será excluido e você direcionado a home.

    ![image](https://github.com/user-attachments/assets/4bb32d2c-9a0e-4e71-a0bf-bb24eadac32c)

7. **Home - Visualizar Dados do Time**:  
   - Permite ao usuário acessar informações gerais do time, como estatísticas e desempenho.  
   - Exemplo:  
     - Acesse a aba **"Home"**.  
     - Visualize o resumo dos dados gerais do time, incluindo estatísticas principais.  
     - Escolha uma das opções no menu para detalhes específicos:  

       **Opções Disponíveis:**  
       - **Lista de Artilharia e Assistências**:  
         - Visualize a tabela com os jogadores que mais marcaram gols e deram assistências.  
         - Exemplo:  
           - Clique em **"Artilharia e Assistências"**.  
           - Veja os jogadores classificados por desempenho.  

       - **Lista de Jogos**:  
         - Exibe o histórico de jogos realizados pelo time.  
         - Exemplo:  
           - Clique em **"Lista de Jogos"**.  
           - Navegue pelos jogos com informações como adversário, data e resultado.  

       - **Estatísticas dos Jogos**:  
         - Detalha as estatísticas de jogos específicos, incluindo posse de bola, finalizações e cartões.  
         - Exemplo:  
           - Clique em **"Estatísticas dos Jogos"**.  
           - Escolha o jogo desejado para ver os detalhes.
             
    ![image](https://github.com/user-attachments/assets/a7f59f76-d6fe-443f-8b12-7a9aa4d40180)


8. **Visualizar Times sem Login**:  
   - Permite ao usuário visualizar informações de times cadastrados sem precisar realizar login.  
   - Exemplo:  
     - Na tela inicial, antes de realizar o login, localize o campo **"Pesquisar"**.  
     - Digite o nome de um time no campo de busca.  
     - Clique em **"Pesquisar"** para visualizar os resultados.  
     - A lista exibirá os times correspondentes ao termo pesquisado, com informações básicas como nome e endereço.  

    ![image](https://github.com/user-attachments/assets/55725595-830d-4154-9f23-f6befdf139d0)

---

# **UML**

![image](https://github.com/user-attachments/assets/6f290a57-2e72-4b22-8e00-f16e2bb8e50b)

---

# **MER**

![image](![Imagem do WhatsApp de 2024-12-04 à(s) 17 44 08_79bd47d4](https://github.com/user-attachments/assets/843d8092-0c91-4d4b-8b81-b40542451277)
)

---

# **DER**

![image](![Imagem do WhatsApp de 2024-12-04 à(s) 17 32 49_c32a0f0c](https://github.com/user-attachments/assets/bf60b64e-e1d9-47f1-a1cf-9342aa2611d9)
)
)

---

# **Tecnologias Utilizadas**

- **Frontend**: React Native com Expo.
- **Backend**: Node.js com Express.
- **Banco de Dados**: MySQL.
- **Outras Dependências**:
  - Axios (para consumo de APIs).
  - React Navigation (para navegação no app).
  - [Adicionar mais tecnologias utilizadas, se necessário.]

---

# **Como Contribuir**

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

# **Licença**

Este projeto está sob a licença [MIT](LICENSE).  



  
