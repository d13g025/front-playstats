import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center',
        backgroundColor:'#333533'
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
    keyAvoid:{
        width: '100%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        backgroundColor:'black'
    },
    title:{
        
        alignSelf:'center',
        fontSize:35,
        fontWeight: 'normal',
        color:'white',
        marginTop: 80
        
    },
    button:{
        backgroundColor: '#2a9134',
        borderRadius:10,
        width: 290,
        height: 40,
        marginTop: 10
    },
    buttonVoltar:{
        backgroundColor: '#006400',
        borderRadius:10,
        width: 290,
        height: 40,
        marginTop: 10
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },
       // Estilo para o item de cada time na lista
    timeItem: {
        padding: 15,  // Espaçamento interno para o item
        marginVertical: 5, // Margem vertical para separar os itens
        backgroundColor: 'white', // Cor de fundo do item
        borderRadius: 5, // Bordas arredondadas
        width:'100%'
        
    },

    // Estilo para o texto dentro de cada item (nome do time)
    timeText: {
        fontSize: 16, // Tamanho da fonte
        fontWeight: 'bold', // Negrito para destacar o nome do time
        color: '#333', // Cor do texto (cor escura para boa legibilidade)
        textAlign: 'center', // Alinhar o texto ao centro
    },
});
export default styles;