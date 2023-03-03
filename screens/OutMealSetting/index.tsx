import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {description} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import ItemGroup from '../../layouts/ItemGroup';
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
    console.log('주입진행');
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.outMeal} />

      <ItemGroup title="회식 시간 설정" style={{marginTop: 0}} />
      <Setting.Row>
        <Select
          unit="시간"
          value={value?.hour}
          list={hours}
          onChange={x => changeValue('hour', x)}
        />
      </Setting.Row>

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="회 식  주 입" />
        <Button
          type="cancel"
          onPress={isModal ? close : () => navigation.goBack()}
        />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
