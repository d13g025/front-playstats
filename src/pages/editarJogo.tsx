import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import EditarJogos from '../components/editarJogos';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
    route: RouteProp<any, any>; // Adicione esta linha
}
  
const EditarJogo: React.FC<HomeProps> = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor: '#333533' }}>
            <EditarJogos navigation={navigation} route={route} /> {/* Passe a route aqui */}
        </View>
    );
}

export default EditarJogo;