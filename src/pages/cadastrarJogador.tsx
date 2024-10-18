import  {View} from 'react-native';
import FormJogador from '../components/formJogador/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const CadastrarJogador: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#333533'}}>
      <FormJogador navigation={navigation} />
    </View>
  );
}
export default CadastrarJogador;