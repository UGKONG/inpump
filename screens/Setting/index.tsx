import {Alert, BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useStorage from '../../hooks/useStorage';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';

export default function SettingScreen({navigation}: any) {
  const storage = useStorage();
  const dispatch = useDispatch();
  const device = useSelector((x: Store) => x?.device);

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
      <ItemGroup title="식사" />
      <Item title="식사 설정" onPress={() => onPress('MealSettingScreen')} />

      <ItemGroup title="장치" subTitle={'연결창치: ' + device?.name} />
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
      <Item title="언어" onPress={() => onPress('LangSettingScreen')} />
    </Container.Scroll>
  );
}
