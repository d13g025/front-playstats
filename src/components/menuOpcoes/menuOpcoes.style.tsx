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
    button:{
        marginTop: 10,
        backgroundColor: '#2a9134',
        borderRadius:15,
        width: 300,
        height: 65,
        margin:23
        
    },
    buttonDesconectar:{
        marginTop: 10,
        backgroundColor: '#006400',
        borderRadius:15,
        width: 300,
        height: 65,
        margin:23
        
    },  
    itemText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 15
    },
    logo:{
        width: 190, // largura da imagem
        height: 150, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
        alignSelf:'center',
        marginTop:30
    }
});
export default styles;