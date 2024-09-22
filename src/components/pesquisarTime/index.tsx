import React, { useState } from 'react';
import {View, TextInput, Image, Text,TouchableOpacity} from 'react-native';
import styles from './pesquisarTime.style'

const PesquisarTime =() =>{

    const [time, setTime] = useState('')

    const handleSignIn = () => {
        console.log(time)
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input}
            placeholder='Procure seu time aqui'
            onChangeText={setTime}
            value={time}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Procurar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>
                Times
            </Text>
        </View>
    )
}
export default PesquisarTime;