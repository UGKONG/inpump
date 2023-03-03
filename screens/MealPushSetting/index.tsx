import {useNavigation} from '@react-navigation/native';
import {description} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

export default function MealPushSettingScreen() {
  const navigation = useNavigation();

  const submit = (): void => {
    console.log('주입진행');
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.mealPush} />

      <ItemGroup title="최근 주입시간" style={{marginTop: 0}} />
      <Item title="09시 42분 25초" />

      <ItemGroup title="최근 주입량" style={{marginTop: 0}} />
      <Item title="30U" />

      <ItemGroup title="금일 총 추가 주입량" style={{marginTop: 0}} />
      <Item title="2U" />

      <ItemGroup title="금일 총 주입량" style={{marginTop: 0}} />
      <Item title="32U" />

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="저 녁 식 사  주 입" />
        <Button type="cancel" onPress={() => navigation.goBack()} />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
