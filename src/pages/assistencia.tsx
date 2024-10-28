import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaAssistencia from '../components/listaAssistencia';
import MenuArtilhariaAssistencia from '../components/menuArtilhariaAssistencia';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const Assistencias: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, alignItems: 'center', backgroundColor:'#073b4c'}}>
      <MenuArtilhariaAssistencia navigation={navigation} />
      <ListaAssistencia navigation={navigation} />
    </View>
  );
}
export default Assistencias;