import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaArtilhariaUser from '../components/listaArtilhariaUser';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const ArtilhariaUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#1b4332'}}>
      <ListaArtilhariaUser navigation={navigation} />
    </View>
  );
}
export default ArtilhariaUser;