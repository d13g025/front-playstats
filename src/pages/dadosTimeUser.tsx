import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FormDadosTimeUser from '../components/formDadosTimeUser';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const DadosTimeUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#161a1d'}}>
      <FormDadosTimeUser navigation={navigation} />
    </View>
  );
}
export default DadosTimeUser;