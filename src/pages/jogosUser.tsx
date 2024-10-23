import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ListaJogosUser from '../components/listaJogosUser';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const JogosUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#1b4332'}}>
      <ListaJogosUser navigation={navigation} />
    </View>
  );
}
export default JogosUser;