import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: 500,
        alignItems: 'center'
    },
    input: {
        marginTop:'30%',
        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 15, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'green',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white',
        textAlign: 'center'
    },
    image:{
        width: '40%', // largura da imagem
        height: '40%', // altura da imagem
        alignSelf: 'center',
        marginTop:60,
        resizeMode: 'cover',
    },
    title:{
       color: 'white',
       fontSize:40
    },
    button:{
        backgroundColor: 'green',
        borderRadius:20,
        width: 190,
        height: 30
    },
    buttonText:{
        color:'white',
        fontSize: 20,
        textAlign:'center',
    }
});

export default styles;