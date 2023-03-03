import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import {description, values} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Value = {value: number};
type Props = {isModal?: boolean; close?: () => void};

export default function AddPushSettingScreen({
  isModal = false,
  close = () => {},
}: Props) {
  const navigation = useNavigation();
  const [value, setValue] = useState<Value>({value: 1});

  const valid = useMemo<boolean>(() => {
    if (!value?.value) return false;
    return true;
  }, [value]);

  const changeValue = (key: keyof Value, val: number): void => {
    setValue(prev => ({...prev, [key]: val}));
  };

  const submit = (): void => {
    console.log(value);
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.addPush} />

      <ItemGroup title="추가 주입량 설정" style={{marginTop: 0}} />
      <Setting.Row>
        <Select
          unit="U"
          value={value?.value}
          list={values}
          onChange={x => changeValue('value', x)}
        />
      </Setting.Row>

      <Setting.Buttons>
        <Button
          type="submit"
          readOnly={!valid}
          onPress={submit}
          text="추 가  주 입"
        />
        <Button
          type="cancel"
          onPress={isModal ? close : () => navigation.goBack()}
        />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
