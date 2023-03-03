import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderStatus from '../../layouts/HeaderStatus';
import AppInfoScreen from '../../screens/AppInfo';
import BatteryUseInfoScreen from '../../screens/BatteryUseInfo';
import DeviceInfoScreen from '../../screens/DeviceInfo';
import InfoScreen from '../../screens/Info';
import PumpUseInfoScreen from '../../screens/PumpUseInfo';
import UseDefaultInfoScreen from '../../screens/UseDefaultInfo';
import UseInfoScreen from '../../screens/UseInfo';

const Stack = createNativeStackNavigator();

export default function InfoStack() {
  return (
    <Stack.Navigator
      initialRouteName="InfoScreen"
      screenOptions={{headerTitleAlign: 'center', headerRight: HeaderStatus}}>
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{title: '정 보'}}
      />
      <Stack.Screen
        name="UseDefaultInfoScreen"
        component={UseDefaultInfoScreen}
        options={{title: '사용 전 지침사항'}}
      />
      <Stack.Screen
        name="UseInfoScreen"
        component={UseInfoScreen}
        options={{title: '사용 방법 정보'}}
      />
      <Stack.Screen
        name="BatteryUseInfoScreen"
        component={BatteryUseInfoScreen}
        options={{title: '배터리 교체 방법'}}
      />
      <Stack.Screen
        name="PumpUseInfoScreen"
        component={PumpUseInfoScreen}
        options={{title: '인슐린 펌프 작동 방법'}}
      />
      <Stack.Screen
        name="DeviceInfoScreen"
        component={DeviceInfoScreen}
        options={{title: '제품 정보'}}
      />
      <Stack.Screen
        name="AppInfoScreen"
        component={AppInfoScreen}
        options={{title: '앱 정보'}}
      />
    </Stack.Navigator>
  );
}
