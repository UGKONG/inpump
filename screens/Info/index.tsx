import {useIsFocused} from '@react-navigation/native';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';

export default function InfoScreen({navigation}: any) {
  const onPress = (screen?: string): void => {
    if (!screen) return;
    navigation.navigate(screen);
  };

  return (
    <Container.Scroll>
      <Item title="사용 방법 정보" onPress={() => onPress('UseInfoScreen')} />
      <Item title="제품 정보" onPress={() => onPress('DeviceInfoScreen')} />
      <Item title="앱 정보" onPress={() => onPress('AppInfoScreen')} />
    </Container.Scroll>
  );
}
