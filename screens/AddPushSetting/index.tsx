import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import styled from 'styled-components/native';
import {description, milliNumbers, values} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import _ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';
import Unit from '../../layouts/Unit';

type Value = {int: number; float: number};
type Props = {isModal?: boolean; close?: () => void};

export default function AddPushSettingScreen({
  isModal = false,
  close = () => {},
}: Props) {
  const navigation = useNavigation();
  const [value, setValue] = useState<Value>({int: 1, float: 0});

  const valid = useMemo<boolean>(() => {
    if (!value?.int) return false;
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

      <ItemGroup title="아침주입 설정값" />
      <Item title="30U" />

      <ItemGroup title="점심주입 설정값" />
      <Item title="30U" />

      <ItemGroup title="저녁주입 설정값" />
      <Item title="32U" />

      <ItemGroup title="추가 주입량 설정" subTitle="(단위: U)" />
      <Setting.Row>
        <Select
          value={value?.int}
          list={values}
          onChange={x => changeValue('int', x)}
        />
        <Select
          value={value?.float}
          list={milliNumbers}
          onChange={x => changeValue('float', x)}
        />
      </Setting.Row>

      <Setting.Buttons>
        <Button
          type="submit"
          readOnly={!valid}
          onPress={submit}
          text="추가주입"
        />
        <Button
          type="cancel"
          text="취소"
          onPress={isModal ? close : () => navigation.goBack()}
        />
      </Setting.Buttons>
    </Container.Scroll>
  );
}

const ItemGroup = styled(_ItemGroup)`
  margin-top: 0;
`;
