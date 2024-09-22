import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './formLogin.style'

const FormLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = () =>{
        if(email === '' || password === ''){
            alert("Favor, preencher todos os campos")
            return;
        }

    const data = {
        email, password
    }
    console.log(data);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Seja bem vindo(a)</Text>

            <TextInput style={styles.input} onChangeText={setEmail}
                value={email}
                placeholder="Digite seu Email"
            />
            <TextInput style={styles.input} 
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                placeholder="Seu Senha"
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Esqueci a senha</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/logo.png')}
                style={styles.image}
            />
        </View>
    );
}
export default FormLogin;