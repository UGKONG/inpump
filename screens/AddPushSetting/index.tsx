import {useNavigation} from '@react-navigation/native';
import {useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {
  description,
  milliValues,
  makeValues,
  addValueOfLang,
} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item, {ItemContainer, ItemContainerItem} from '../../layouts/Item';
import _ItemGroup from '../../layouts/ItemGroup';
import Pushing from '../../layouts/Pushing';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Value = {int: number; float: number};
type Props = {isModal?: boolean; close?: () => void};

export default function AddPushSettingScreen({
  isModal = false,
  close = () => {},
}: Props) {
  const navigation = useNavigation();
  const lang = useSelector((x: Store) => x?.lang);
  const [value, setValue] = useState<Value>({int: 0, float: 0});
  const [isPushing, setIsPushing] = useState<IsPushing>(0);
  const values = makeValues(addValueOfLang[lang] ?? 30);

  const valid = useMemo<boolean>(() => {
    if (!value?.int && !value?.float) return false;
    return true;
  }, [value]);

  const changeValue = (key: keyof Value, val: number): void => {
    let maxValue = values[values?.length - 1]?.value;
    if (key === 'int') {
      setValue(prev => ({
        int: val,
        float: val === maxValue ? 0 : prev?.float,
      }));
    } else {
      setValue(prev => ({
        int: prev?.int,
        float: prev?.int === maxValue ? 0 : val,
      }));
    }
  };

  const submit = (): void => {
    setIsPushing(1);
    setTimeout(() => {
      Alert.alert('추가주입', '주입이 완료되었습니다.');
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
        <SettingDescription text={description.addPush} />

        <ItemGroup
          title="금일 주입 내용"
          subTitle={`(단위: U)`}
          style={{marginTop: 0}}
        />
        <Item
          nonePress
          title={() => (
            <ItemContainer>
              <ItemContainerItem>기초주입 {7.3}</ItemContainerItem>
              <ItemContainerItem>식사주입 {15.0}</ItemContainerItem>
              <ItemContainerItem>추가주입 {5}</ItemContainerItem>
            </ItemContainer>
          )}
        />

        <ItemGroup title="추가 주입량 설정" subTitle="(단위: U)" />
        <Setting.Row>
          <Select
            value={value?.int}
            list={values}
            onChange={x => changeValue('int', x)}
          />
          <Select
            value={value?.float}
            list={milliValues}
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
            text="닫기"
            onPress={isModal ? close : () => navigation.goBack()}
          />
        </Setting.Buttons>

        {isPushing === 1 ? <Pushing onCancel={onCancel} /> : null}
      </>
    </Container.Scroll>
  );
}

const ItemGroup = styled(_ItemGroup)`
  margin-top: 0;
`;
