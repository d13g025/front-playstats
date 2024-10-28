import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaAssistenciaUser from '../components/listaAssistenciaUser';
import MenuArtilhariaAssistenciaUser from '../components/menuArtilhariaAssistenciaUser';
interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const AssistenciasUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, alignItems: 'center', backgroundColor:'#1b4332'}}>
      <MenuArtilhariaAssistenciaUser navigation={navigation} />
      <ListaAssistenciaUser navigation={navigation} />
    </View>
  );
}
export default AssistenciasUser;