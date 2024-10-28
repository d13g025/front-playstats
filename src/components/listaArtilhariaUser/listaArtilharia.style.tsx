import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center',
        backgroundColor: '#1b4332'
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
        width:380,
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        
      },
      text: {
        fontSize: 16,
        color:'white'
      }
})
export default styles;