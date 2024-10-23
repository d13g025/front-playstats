import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center',
        backgroundColor: '#333533'
    },
    title:{
        color: 'white',
        fontSize:20,
    },
    text:{
        color: 'white',
        fontSize:18,
        marginRight:'15%',
        marginLeft:'15%',
        marginTop:'15%'
    },
    button:{
        backgroundColor: 'white',
        borderRadius:20,
        width: 280,
        height: 40,
        marginTop: '60%'
    },
    buttonText:{
        color:'#669bbc',
        fontSize: 25,
        textAlign:'center',
    }
})
export default styles;