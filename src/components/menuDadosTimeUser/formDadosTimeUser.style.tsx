import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: 'column', // Alinha os itens em linha
        justifyContent: 'flex-end', // Posiciona os itens no canto direito
        alignItems: 'flex-start', // Alinha os itens no topo
        paddingHorizontal: 19,
        paddingVertical: 10, // Adiciona um pouco de espaço vertical
        backgroundColor: '#212529',
    },
    logo:{
        width: 60, // largura da imagem
        height: 65, // altura da imagem
        resizeMode: 'cover',
    },
    button1:{
        marginTop: 95,
        backgroundColor: '#006400',
        borderRadius:10,
        width: 300,
        height: 65,
        margin:23 
    }, 
    button:{
        marginTop: 10,
        backgroundColor: '#006400',
        borderRadius:10,
        width: 300,
        height: 65,
        margin:23 
    }, 
    buttonVoltar:{
        marginTop: 10,
        backgroundColor: '#004b23',
        borderRadius:10,
        width: 300,
        height: 65,
        margin:23 
    }, 
    itemText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 17,
        borderColor:'white'
    },
    
});
export default styles;