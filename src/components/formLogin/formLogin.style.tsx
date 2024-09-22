import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center'
    },
    input: {

        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 15, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'green',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
    },
    title:{
        marginTop:80,
        alignSelf:'center',
        fontSize:40,
        fontWeight: 'normal',
        color:'white'
        
    },
    button:{
        backgroundColor: 'green',
        borderRadius:20,
        width: 280,
        height: 40,
        margin:10
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },
    image:{
        width: '54%', // largura da imagem
        height: '40%', // altura da imagem
        alignSelf: 'center',
        marginTop:10,
        resizeMode: 'cover',
    }
});

export default styles;