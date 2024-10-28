import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 900,
        alignItems: 'center',
        backgroundColor: '#073b4c'
    },
    title:{
        color: 'white',
        fontSize:20
    },
    button:{
        backgroundColor: 'white',
        borderRadius:20,
        width: 280,
        height: 40,
       marginBottom:20,
        alignItems: 'center',
    },
    buttonText:{
        color:'#669bbc',
        fontSize: 25,
        textAlign:'center',
    },  
    item: {
        width: 380,
        borderBottomWidth: 5,
        borderBottomColor: 'white',
        
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
    }
})
export default styles;