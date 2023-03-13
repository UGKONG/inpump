import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {description} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';
import Pushing from '../../layouts/Pushing';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Value = {hour: number};
type Props = {isModal?: boolean; close?: () => void};

const hours = [1, 2, 3, 4, 5, 6, 7, 8]?.map(d => ({text: String(d), value: d}));

export default function OutMealSettingScreen({
  isModal = false,
  close = () => {},
}: Props) {
  const navigation = useNavigation();
  const [value, setValue] = useState<Value>({hour: 1});

  const changeValue = (key: keyof Value, val: number): void => {
    setValue(prev => ({...prev, [key]: val}));
  };

  const submit = (): void => {
    Alert.alert('회식적용', '저장되었습니다.');
    close();
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.outMeal} />

      <ItemGroup title="아침주입 설정값" style={{marginTop: 0}} />
      <Item title="30U" />

      <ItemGroup title="점심주입 설정값" style={{marginTop: 0}} />
      <Item title="30U" />

      <ItemGroup title="저녁주입 설정값" style={{marginTop: 0}} />
      <Item title="32U" />

      <ItemGroup
        title="회식 시간 설정"
        subTitle="(단위: 시간)"
        style={{marginTop: 0}}
      />
      <Setting.Row>
        <Select
          value={value?.hour}
          list={hours}
          onChange={x => changeValue('hour', x)}
        />
      </Setting.Row>

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="회식적용" />
        <Button
          type="cancel"
          text="닫기"
          onPress={isModal ? close : () => navigation.goBack()}
        />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
