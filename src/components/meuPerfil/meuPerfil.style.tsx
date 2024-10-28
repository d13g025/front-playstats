import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: 'column', // Alinha os itens em linha
        justifyContent: 'flex-end', // Posiciona os itens no canto direito
        alignItems: 'flex-start', // Alinha os itens no topo
        paddingHorizontal: 19,
        paddingVertical: 10, // Adiciona um pouco de espaço vertical
        backgroundColor: '#333533',
    },
    button:{
        marginTop:175,
        backgroundColor: 'green',
        borderRadius:30,
        width: 300,
        height: 65,  
    }, 
    button1:{
        marginTop: 20,
        backgroundColor: 'green',
        borderRadius:30,
        width: 300,
        height: 65,  
    },
    itemText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 15
    },
    text:{
        fontSize:20,
        color:'white',
        marginTop:30,

    }
});
export default styles;