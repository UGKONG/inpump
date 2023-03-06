import {useNavigation} from '@react-navigation/native';
import {description} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Props = {isModal?: boolean; close?: () => void};

export default function MealPushSettingScreen({
  isModal = false,
  close = () => {},
}: Props) {
  const navigation = useNavigation();

  const submit = (): void => {
    console.log('주입진행');
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.mealPush} />

      <ItemGroup title="아침주입 설정값" style={{marginTop: 0}} />
      <Item title="30U" />

      <ItemGroup title="점심주입 설정값" style={{marginTop: 0}} />
      <Item title="30U" />

      <ItemGroup title="저녁주입 설정값" style={{marginTop: 0}} />
      <Item title="32U" />

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="식사주입" />
        <Button
          type="cancel"
          text="취소"
          onPress={isModal ? close : () => navigation.goBack()}
        />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
