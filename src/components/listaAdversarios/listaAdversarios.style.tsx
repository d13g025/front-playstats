import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#333533'
    },
    title:{
        color: 'white',
        fontSize:25,
        borderBottomWidth: 7,
        borderBottomColor: 'white',
        
    },
    button:{
        backgroundColor: 'white',
        borderRadius:20,
        width: 280,
        height: 40,
    },
    buttonText:{
        color:'#669bbc',
        fontSize: 25,
        textAlign:'center',
    },
    item: {
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        width: 380,
      },
      text: {
        fontSize: 16,
        color:'white'
      },
})
export default styles;