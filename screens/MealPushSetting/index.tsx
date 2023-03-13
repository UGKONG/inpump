import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {description} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';
import Pushing from '../../layouts/Pushing';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Props = {isModal?: boolean; close?: () => void};

export default function MealPushSettingScreen({
  isModal = false,
  close = () => {},
}: Props) {
  const navigation = useNavigation();
  const [isPushing, setIsPushing] = useState<IsPushing>(0);

  const submit = (): void => {
    setIsPushing(1);
    setTimeout(() => {
      Alert.alert('식사주입', '주입이 완료되었습니다.');
      setIsPushing(2);
    }, 3000);
  };

  const onCancel = (): void => {
    close(); // 임시
  };

  useEffect(() => {
    if (isPushing === 2) close();
  }, [isPushing]);

  return (
    <Container.Scroll>
      <>
        <SettingDescription text={description.mealPush} />

        <ItemGroup title="아침주입 설정값" style={{marginTop: 0}} />
        <Item title="30U" />

        <ItemGroup title="점심주입 설정값" style={{marginTop: 0}} />
        <Item title="30U" />

        <ItemGroup title="저녁주입 설정값" style={{marginTop: 0}} />
        <Item title="30U" />

        <Setting.Buttons>
          <Button type="submit" onPress={submit} text="식사주입" />
          <Button
            type="cancel"
            text="닫기"
            onPress={isModal ? close : () => navigation.goBack()}
          />
        </Setting.Buttons>

        {isPushing === 1 ? <Pushing onCancel={onCancel} /> : null}
      </>
    </Container.Scroll>
  );
}
