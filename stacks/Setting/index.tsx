import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderStatus from '../../layouts/HeaderStatus';
import SettingScreen from '../../screens/Setting';
import FoundationSettingScreen from '../../screens/FoundationSetting';
import ExerciseSettingScreen from '../../screens/ExerciseSetting';
import StopSettingScreen from '../../screens/StopSetting';
import MealSettingScreen from '../../screens/MealSetting';
import MealPushSettingScreen from '../../screens/MealPushSetting';
import OutMealSettingScreen from '../../screens/OutMealSetting';
import AddPushSettingScreen from '../../screens/AddPushSetting';
import RemainSettingScreen from '../../screens/RemainSetting';
import ChangeSettingScreen from '../../screens/ChangeSetting';
import OutAirSettingScreen from '../../screens/OutAirSetting';
import UnitSettingScreen from '../../screens/UnitSetting';

const Stack = createNativeStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{headerTitleAlign: 'center', headerRight: HeaderStatus}}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: '설 정'}}
      />
      <Stack.Screen
        name="FoundationSettingScreen"
        component={FoundationSettingScreen}
        options={{title: '기초 설정'}}
      />
      <Stack.Screen
        name="ExerciseSettingScreen"
        component={ExerciseSettingScreen}
        options={{title: '운동 주입'}}
      />
      <Stack.Screen
        name="StopSettingScreen"
        component={StopSettingScreen}
        options={{title: '일시 정지'}}
      />
      <Stack.Screen
        name="MealSettingScreen"
        component={MealSettingScreen}
        options={{title: '식사 설정'}}
      />
      <Stack.Screen
        name="MealPushSettingScreen"
        component={MealPushSettingScreen}
        options={{title: '식사 주입'}}
      />
      <Stack.Screen
        name="OutMealSettingScreen"
        component={OutMealSettingScreen}
        options={{title: '회식 주입'}}
      />
      <Stack.Screen
        name="AddPushSettingScreen"
        component={AddPushSettingScreen}
        options={{title: '추가 주입'}}
      />
      <Stack.Screen
        name="RemainSettingScreen"
        component={RemainSettingScreen}
        options={{title: '잔량 수정'}}
      />
      <Stack.Screen
        name="ChangeSettingScreen"
        component={ChangeSettingScreen}
        options={{title: '교체'}}
      />
      <Stack.Screen
        name="OutAirSettingScreen"
        component={OutAirSettingScreen}
        options={{title: '공기 배출'}}
      />
      <Stack.Screen
        name="UnitSettingScreen"
        component={UnitSettingScreen}
        options={{title: '설정 단위'}}
      />
    </Stack.Navigator>
  );
}
