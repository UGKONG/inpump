import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import HeaderStatus from '../../layouts/HeaderStatus';
import HomeScreen from '../../screens/Home';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const device = useSelector((x: Store) => x?.device);

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerTitleAlign: 'center', headerRight: HeaderStatus}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: device?.name ?? '메인'}}
      />
    </Stack.Navigator>
  );
}
