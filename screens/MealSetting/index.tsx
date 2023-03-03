import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {description, values} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Value = {step1: number; step2: number; step3: number};
type Props = {isModal?: boolean; close?: () => void};

export default function MealSettingScreen({
  isModal = false,
  close = () => {},
}: Props) {
  const navigation = useNavigation();
  const [value, setValue] = useState<Value>({step1: 15, step2: 15, step3: 15});

  const changeValue = (key: keyof Value, val: number): void => {
    setValue(prev => ({...prev, [key]: val}));
  };

  const submit = (): void => {
    console.log(value);
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.meal} />

      <ItemGroup title="아침 식사" style={{marginTop: 0}} />
      <Setting.Row>
        <Select
          unit="U"
          value={value?.step1}
          list={values}
          onChange={x => changeValue('step1', x)}
        />
      </Setting.Row>

      <ItemGroup title="점심 식사" style={{marginTop: 0}} />
      <Setting.Row>
        <Select
          unit="U"
          value={value?.step2}
          list={values}
          onChange={x => changeValue('step2', x)}
        />
      </Setting.Row>

      <ItemGroup title="저녁 식사" style={{marginTop: 0}} />
      <Setting.Row>
        <Select
          unit="U"
          value={value?.step3}
          list={values}
          onChange={x => changeValue('step3', x)}
        />
      </Setting.Row>

      <Setting.Buttons>
        <Button type="submit" onPress={submit} />
        <Button
          type="cancel"
          onPress={isModal ? close : () => navigation.goBack()}
        />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
