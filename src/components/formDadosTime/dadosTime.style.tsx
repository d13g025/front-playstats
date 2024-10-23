import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, // garante que a rolagem funcione corretamente mesmo com conteúdo menor
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 40,
      },
    container: {
        marginTop: 8,
        flexDirection: 'column', // Alinha os itens em linha
        justifyContent: 'flex-end', // Posiciona os itens no canto direito
        alignItems: 'flex-start', // Alinha os itens no topo
        paddingHorizontal: 19,
        paddingVertical: 10, // Adiciona um pouco de espaço vertical
        backgroundColor: '#161a1d',
    },
    button:{
        marginTop: 10,
        backgroundColor: '#023e8a',
        borderRadius:40,
        width: 300,
        height: 65,
        margin:15
        
    }, 
    itemText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 17,
        borderColor:'white'
    },
    logo:{
        width: 190, // largura da imagem
        height: 170, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
        alignSelf:'center',
        marginTop:30
    }
});
export default styles;