//"ReactNode" tipo usado para definir qualquer tipo de conteúdo que o React pode renderizar (como elementos, strings, números, ou até arrays).
import React, { createContext, useState, useContext, ReactNode } from 'react';



/*Aqui, é definido o tipo de dados que o contexto irá gerenciar.

id_login: é o estado que armazena o identificador de login do usuário, que pode ser uma string (o ID do login) ou null (caso o usuário não esteja logado).
setIdLogin: é a função usada para atualizar o valor de id_login. Esse tipo é especificado como a função de atualização de estado retornada por useState.*/
interface AuthContextType {
    id_login: string | null;
    setIdLogin: React.Dispatch<React.SetStateAction<string | null>>;
}

/*Define o tipo para o componente AuthProvider, indicando que ele aceita uma propriedade chamada children,
que pode ser qualquer coisa que o React possa renderizar (componentes, texto, etc.).
Isso é necessário porque o AuthProvider é um componente de ordem superior que irá envolver outros componentes.*/
interface AuthProviderProps {
    children: ReactNode; // Aqui definimos que 'children' pode ser qualquer coisa que React pode renderizar
}


/*Aqui, é criado o contexto AuthContext. O tipo desse contexto é AuthContextType, ou seja, ele irá conter id_login e setIdLogin.
O valor inicial do contexto é undefined, o que significa que, quando não houver um provedor (AuthProvider) ao redor de um componente, o contexto estará indefinido.*/
const AuthContext = createContext<AuthContextType | undefined>(undefined);


/*Aqui, é criado um hook personalizado chamado useAuth que facilita o uso do contexto.
O useContext(AuthContext) acessa o valor do contexto.
Se o contexto estiver undefined (ou seja, se o hook for usado fora de um AuthProvider), ele lança um erro, pois useAuth deve ser usado apenas dentro de um AuthProvider.
Caso contrário, ele retorna o valor do contexto, ou seja, o valor de id_login e a função setIdLogin. */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};


/* Este é o componente que provê o valor do contexto para seus filhos (componentes filhos).
Ele usa o hook useState para criar o estado id_login (inicializado como null) e a função setIdLogin para atualizar esse estado.
O componente retorna um provedor de contexto (AuthContext.Provider). O valor do provedor é um objeto contendo id_login e setIdLogin.
Todos os componentes filhos dentro de AuthProvider terão acesso a esse valor.
A propriedade {children} dentro de AuthProvider indica que qualquer conteúdo passado para AuthProvider será renderizado como filhos. */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [id_login, setIdLogin] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{ id_login, setIdLogin }}>
            {children} 
        </AuthContext.Provider>
    );
};