import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: 'row', // Alinha os itens em linha
        justifyContent: 'flex-end', // Posiciona os itens no canto direito
        alignItems: 'flex-start', // Alinha os itens no topo
        paddingHorizontal: 19,
        paddingVertical: 10, // Adiciona um pouco de espaço vertical
        backgroundColor: '#212529',
    },
    logo:{
        width: '19%', // largura da imagem
        height: 65, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        resizeMode: 'cover',
    },
    item: {
      
        marginVertical: 5,
        backgroundColor: '#2a9134',
        borderRadius: 5,
        width: 92,
        height: 20,
        marginHorizontal: 5 // Adiciona espaçamento horizontal entre os itens
    },
    itemText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 11,
        alignItems:'center',
        alignSelf:'center'
    },
});

export default styles;