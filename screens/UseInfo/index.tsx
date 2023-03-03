import {useNavigation} from '@react-navigation/native';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';

export default function UseInfoScreen() {
  const navigation = useNavigation();

  const onPress = (screen?: string): void => {
    if (!screen) return;
    navigation.navigate(screen as never);
  };

  return (
    <Container.Scroll>
      <Item
        title="사용 전 지침사항"
        onPress={() => onPress('UseDefaultInfoScreen')}
      />
      <Item
        title="배터리 교체 방법"
        onPress={() => onPress('BatteryUseInfoScreen')}
      />
      <Item
        title="인슐린 펌프 작동 방법"
        onPress={() => onPress('PumpUseInfoScreen')}
      />
    </Container.Scroll>
  );
}
