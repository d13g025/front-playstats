import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center',
        backgroundColor: '#333533'
    },
    input: {
        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'green',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
    },
    logo:{
        width: '35%', // largura da imagem
        height: 150, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
        alignSelf:'center',
        marginTop:115
    },
    title:{
        alignSelf:'center',
        fontSize:32,
        fontWeight: 'normal',
        color:'white',
        marginTop: 20
    },
    button:{
        backgroundColor: 'green',
        borderRadius:20,
        width: 280,
        height: 40,
        marginTop: 10
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },
})
export default styles;