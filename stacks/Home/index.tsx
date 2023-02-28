import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectDevice from '../../layouts/ConnectDevice';
import HomeScreen from '../../screens/Home';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerTitleAlign: 'center', headerRight: ConnectDevice}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: '메인'}}
      />
    </Stack.Navigator>
  );
}
