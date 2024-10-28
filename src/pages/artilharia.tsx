import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaArtilharia from '../components/listaArtilharia';
import MenuArtilhariaAssistencia from '../components/menuArtilhariaAssistencia';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const Artilharia: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, alignItems: 'center', backgroundColor:'#073b4c'}}>
      <MenuArtilhariaAssistencia navigation={navigation} />
      <ListaArtilharia navigation={navigation} />
    </View>
  );
}
export default Artilharia;