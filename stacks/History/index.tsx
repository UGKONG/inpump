import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectDevice from '../../layouts/ConnectDevice';
import HistoryScreen from '../../screens/History';

const Stack = createNativeStackNavigator();

export default function HistoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="HistoryScreen"
      screenOptions={{headerTitleAlign: 'center', headerRight: ConnectDevice}}>
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{title: '히 스 토 리'}}
      />
    </Stack.Navigator>
  );
}
