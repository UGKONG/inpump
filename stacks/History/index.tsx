import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderStatus from '../../layouts/HeaderStatus';
import HistoryScreen from '../../screens/History';

const Stack = createNativeStackNavigator();

export default function HistoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="HistoryScreen"
      screenOptions={{headerTitleAlign: 'center', headerRight: HeaderStatus}}>
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{title: '히 스 토 리'}}
      />
    </Stack.Navigator>
  );
}
