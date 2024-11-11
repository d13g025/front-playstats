import  {View} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MenuDadosTimeUser from '../components/menuDadosTimeUser';

interface HomeProps {
    navigation: NativeStackNavigationProp<any>;
  }
  
  const DadosTimeUser: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View  style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'#212529'}}>
      <MenuDadosTimeUser navigation={navigation} />
    </View>
  );
}
export default DadosTimeUser;