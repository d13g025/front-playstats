import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center',
        backgroundColor:'#333533'
    },
    input: {

        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'green',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
    },
    title:{
        alignSelf:'center',
        fontSize:26,
        fontWeight: 'normal',
        color:'white',
        marginTop: 110,
    },
    button:{
        backgroundColor: '#2a9134',
        borderRadius:9,
        width: 290,
        height: 40,
        marginTop: 10, 
    },
    buttonVoltar:{
        backgroundColor: '#006400',
        borderRadius:9,
        width: 290,
        height: 40,
        marginTop: 20, 
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white'
      },
      picker: {  
        width: '60%',
        height: 52,
        borderColor: 'green',
        marginBottom: 20,
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
      },
});

export default styles;