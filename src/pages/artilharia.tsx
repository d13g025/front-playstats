import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaArtilharia from '../components/listaArtilharia';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const Artilharia: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#073b4c'}}>
      <ListaArtilharia navigation={navigation} />
    </View>
  );
}
export default Artilharia;