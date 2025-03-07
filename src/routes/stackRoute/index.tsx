import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, Dashboard} from '../../pages';
const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoute() {
  return (
    <Navigator>
      <Screen name="sigIn" component={SignIn} options={{headerShown: false}} />
      <Screen name="dashboard" component={Dashboard} />
    </Navigator>
  );
}
