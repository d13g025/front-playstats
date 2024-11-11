import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center'
    },
    logo:{
        width: 55, // largura da imagem
        height: 65, // altura da imagem
        resizeMode: 'cover',
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
        fontSize:35,
        fontWeight: 'normal',
        color:'white'
        
    },
    button:{
        backgroundColor: '#006400',
        borderRadius:10,
        width: 280,
        height: 40,
        margin:10
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },
    
});

export default styles;