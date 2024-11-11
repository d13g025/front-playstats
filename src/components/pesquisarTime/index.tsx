import React, { useState } from 'react';
import {View, TextInput, Image, Text,TouchableOpacity} from 'react-native';
import styles from './pesquisarTime.style'

const PesquisarTime: React.FC<{ navigation: any }> = ({ navigation }) => {

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
            <TouchableOpacity>
                <Text style={styles.title}>
                    Times
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('dadosTimeUser')} style={{alignItems:'center'}}>
                <Text style={{color:'white', marginTop:30}}>Real Madrid</Text><Image 
                source={require('../assets/seuTime.png')}
                style={{width:115, height:115}}
                />
                <Text style={{color:'white'}}> time pesquisado</Text>
            </TouchableOpacity>
        </View>
    )
}
export default PesquisarTime;