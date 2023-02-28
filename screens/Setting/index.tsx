import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import useStorage from '../../hooks/useStorage';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';

export default function SettingScreen({navigation}: any) {
  const dispatch = useDispatch();
  const storage = useStorage();

  const onPress = (screen?: string): void => {
    if (!screen) return;
    navigation.navigate(screen);
  };

  const alert = (text: string): void => {
    Alert.alert('오류', text);
  };

  const deviceDisConnect = async (): Promise<void> => {
    const {error} = await storage.removeItem('device');
    if (error) return alert('연결 해제에 실패하였습니다.');
    dispatch({type: 'device', payload: null});
  };

  const pinReset = async (): Promise<void> => {
    const {error} = await storage.removeItem('pin');
    if (error) return alert('암호 초기화에 실패하였습니다.');
    dispatch({type: 'isPin', payload: false});
  };

  const ask = (
    title: string,
    text: string,
    onPress: () => Promise<void>,
  ): void => {
    Alert.alert(title, text, [
      {text: '예', style: 'destructive', onPress},
      {text: '아니요'},
    ]);
  };

  return (
    <Container.Scroll>
      <ItemGroup title="기초" style={{marginTop: 0}} />
      <Item
        title="기초 설정"
        onPress={() => onPress('FoundationSettingScreen')}
      />
      <Item
        title="운동 설정"
        onPress={() => onPress('ExerciseSettingScreen')}
      />
      <Item title="일시 정지" onPress={() => onPress('StopSettingScreen')} />
      <ItemGroup title="식사" />
      <Item title="식사 설정" onPress={() => onPress('MealSettingScreen')} />
      <Item
        title="식사 주입"
        onPress={() => onPress('MealPushSettingScreen')}
      />
      <Item title="회식 주입" onPress={() => onPress('OutMealSettingScreen')} />
      <Item title="추가 주입" onPress={() => onPress('AddPushSettingScreen')} />
      <ItemGroup title="주사기" />
      <Item title="잔량 수정" onPress={() => onPress('RemainSettingScreen')} />
      <Item title="교체" onPress={() => onPress('ChangeSettingScreen')} />
      <Item title="공기 배출" onPress={() => onPress('OutAirSettingScreen')} />
      <ItemGroup title="장치" />
      <Item
        title="장치 연결 해제"
        onPress={() =>
          ask(
            '장치 연결 해제',
            '장치의 연결을 해제하시겠습니까?',
            deviceDisConnect,
          )
        }
      />
      <ItemGroup title="앱" />
      <Item
        title="앱 암호 초기화"
        onPress={() =>
          ask('앱 암호 초기화', '앱 암호를 초기화 하시겠습니까?', pinReset)
        }
      />
    </Container.Scroll>
  );
}
