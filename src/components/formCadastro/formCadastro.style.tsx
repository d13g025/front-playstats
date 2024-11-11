import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    
    innerContainer: {
        flexGrow: 1, // Permite que o ScrollView se expanda conforme necessário
        justifyContent: 'center', // Alinha verticalmente os itens
        alignItems: 'center', // Alinha horizontalmente os itens
        padding: 20, // Adiciona um espaçamento interno
    },
    input: {
        
        width: '100%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'green',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
    },
    title:{
        
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'normal',
        color: 'white'
    },
    button:{
        backgroundColor: '#2a9134',
        borderRadius:9,
        width: 280,
        height: 40,
        marginTop:9,
    },
    buttonCancelar:{
        backgroundColor: '#006400',
        borderRadius:9,
        width: 280,
        height: 40,
        marginTop:20,
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },
});

export default styles;