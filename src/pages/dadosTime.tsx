import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FormDadosTime from '../components/menuDadostime';


interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const DadosTime: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#333533'}}>
      <FormDadosTime navigation={navigation} />
    </View>
  );
}
export default DadosTime;