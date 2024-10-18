import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FormJogo from '../components/formJogo/index';


interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const CadastroJogo: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#333533'}}>
      <FormJogo navigation={navigation} />
    </View>
  );
}
export default CadastroJogo;