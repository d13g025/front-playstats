import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaDesempenhoJogos from '../components/listaDesempenhoJogos';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const DesempenhoJogos: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#333533'}}>
      <ListaDesempenhoJogos navigation={navigation} />
    </View>
  );
}
export default DesempenhoJogos;