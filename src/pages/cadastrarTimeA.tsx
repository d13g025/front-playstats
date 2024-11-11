import  {View} from 'react-native';
import FormTimeAdversario from '../components/formTimeAdversario/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const CadastrarTimeA: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#333533'}}>
      <FormTimeAdversario navigation={navigation}/>
    </View>
  );
}
export default CadastrarTimeA;