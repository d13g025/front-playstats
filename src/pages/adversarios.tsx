import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaAdversarios from '../components/listaAdversarios';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const Adversarios: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, alignItems: 'center', backgroundColor:'#333533'}}>
      <ListaAdversarios navigation={navigation} />
    </View>
  );
}
export default Adversarios;