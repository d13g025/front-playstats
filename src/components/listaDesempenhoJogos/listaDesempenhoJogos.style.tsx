import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 900,
        alignItems: 'center',
        backgroundColor: '#333533'
    },
    title:{
        color: 'white',
        fontSize:25,
        borderBottomWidth: 5,
        borderBottomColor: '#006400',
    },
    button:{
        backgroundColor: '#006400',
        borderRadius:9,
        width: 280,
        height: 40,
       marginBottom:20,
        alignItems: 'center',
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },  
    item: {
        borderBottomWidth: 5,
        borderBottomColor: 'white',
        width: 380,
      },
      text: {
        fontSize: 16,
        color:'white'
      }, 
      optionsButton: {
        padding: 1,
    },
    optionsText: {
        fontSize: 20,
        color:'white',
        backgroundColor:'gray',
        borderRadius:50,
        width:28,
        textAlign:'center',
        alignSelf:'flex-end'
    }
})
export default styles;