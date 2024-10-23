import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaJogos from '../components/listaJogos';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const Jogos: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#073b4c'}}>
      <ListaJogos navigation={navigation} />
    </View>
  );
}
export default Jogos;