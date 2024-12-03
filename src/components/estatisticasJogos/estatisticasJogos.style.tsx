import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,  // Garante que o ScrollView ocupe o espaço total
        padding: 16,  // Ajuste conforme necessário
        
        
        backgroundColor: '#415d43'
    },
    viewProbabilidade:{
        backgroundColor: '#2d6a4f',
        marginTop:3,
        height:120,
        borderRadius:5,
        borderWidth:2,
        borderColor:'white',
        alignSelf:'center',
        width:'98%',
    },
    viewGols:{
        backgroundColor: '#52b788',
        marginTop:3,
        height:120,
        borderRadius:5,
        borderWidth:2,
        borderColor:'white',
        alignSelf:'center',
        width:'98%',
    },
    viewJogos:{
        backgroundColor: '#40916c',
        marginTop:3,
        height:120,
        borderRadius:5,
        borderWidth:2,
        borderColor:'white',
        alignSelf:'center',
        width:'98%',
    },
    viewRegressao:{
        backgroundColor: '#1b4332',
        marginTop:3,
        alignSelf:'center',
        width:'98%',
        height:150,
        borderRadius:5,
        borderWidth:2,
        borderColor:'white'
    },
    title:{
        color: 'white',
        fontSize:25,
        borderBottomWidth: 5,
        borderBottomColor: 'gold',
        marginTop:16,
        alignSelf:'center'
    },
    title1:{
        color: 'white',
        fontSize:18,
        marginTop:10,
        fontWeight: 'bold',  // Adicionando negrito
        alignSelf:'center'
    },
    buttonVoltar:{
        marginTop: 40,
        backgroundColor: '#014f86',
        borderRadius:15,
        width: 300,
        height: 60,
        margin:23,
        borderWidth:2,
        borderColor:'gold'
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
        marginTop:7
    },  
    item: {
        borderBottomWidth: 5,
        borderBottomColor: 'white',
        width: 380,
      },
      text: {
        fontSize: 15,
        color:'white',
        marginTop:12,
        alignSelf:'center'

      },
      optionsButton: {
        padding: 1,
    },
    optionsText: {
        fontSize: 20,
        color:'#000f81',
        backgroundColor:'gold',
        borderRadius:50,
        width:28,
        textAlign:'center',
        alignSelf:'flex-end'
    },
    textDados: {
        fontSize: 17,
        color:'white',
        marginTop:3,
        fontWeight: 'bold',  // Adicionando negrito
      },
})
export default styles;