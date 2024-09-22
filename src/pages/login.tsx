import {View} from 'react-native';
import FormLogin from '../components/formLogin/index';

const Login = () =>{
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10, backgroundColor:'black'}}>
            <FormLogin/>
        </View>
    );
}
export default Login;