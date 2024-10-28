import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaDesempenho from '../components/listaDesempenho';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const DesempenhoJogador: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#333533'}}>
      <ListaDesempenho navigation={navigation} />
    </View>
  );
}
export default DesempenhoJogador;