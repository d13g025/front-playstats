import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaArtilhariaUser from '../components/listaArtilhariaUser';
import MenuArtilhariaAssistenciaUser from '../components/menuArtilhariaAssistenciaUser';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const ArtilhariaUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#1b4332'}}>
      <MenuArtilhariaAssistenciaUser navigation={navigation}/>
      <ListaArtilhariaUser navigation={navigation} />
    </View>
  );
}
export default ArtilhariaUser;