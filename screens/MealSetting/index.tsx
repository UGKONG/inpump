import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import {Alert, Platform} from 'react-native';
import styled from 'styled-components/native';
import {
  description,
  makeValues,
  milliValues,
  stepValues,
} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item, {ItemContainer, ItemContainerItem} from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Value = {
  step1: {int: number; float: number};
  step2: {int: number; float: number};
  step3: {int: number; float: number};
};

const os = Platform.OS;
const values = makeValues(20);

export default function MealSettingScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState<Value>({
    step1: {int: 10, float: 0},
    step2: {int: 15, float: 0},
    step3: {int: 20, float: 0},
  });
  const [stepValue, setStepValue] = useState<keyof Value>('step1');

  const valueString = useMemo<{[key in keyof Value]: number}>(() => {
    let step1 = value?.step1?.int + value?.step1?.float;
    let step2 = value?.step2?.int + value?.step2?.float;
    let step3 = value?.step3?.int + value?.step3?.float;
    return {step1, step2, step3};
  }, [value]);

  const changeValue = (
    key1: keyof Value,
    key2: keyof Value[keyof Value],
    val: number,
  ): void => {
    let maxValue = values[values?.length - 1]?.value;
    if (key2 === 'int') {
      setValue(prev => ({
        ...prev,
        [key1]: {
          int: val,
          float: val === maxValue ? 0 : prev[key1]?.float,
        },
      }));
    } else {
      setValue(prev => ({
        ...prev,
        [key1]: {
          int: prev[key1]?.int,
          float: prev[key1]?.int === maxValue ? 0 : val,
        },
      }));
    }
  };

  const submit = (): void => {
    console.log(value);
    Alert.alert('????????????', '?????????????????????.');
    navigation.goBack();
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.meal} />

      {os === 'ios' ? (
        <>
          <ItemGroup
            title="?????? ?????????"
            subTitle={`(??????: U)`}
            style={{marginTop: 0}}
          />
          <Item
            nonePress
            title={() => (
              <ItemContainer>
                <ItemContainerItem>
                  ????????? {valueString?.step1}
                </ItemContainerItem>
                <ItemContainerItem>
                  ????????? {valueString?.step2}
                </ItemContainerItem>
                <ItemContainerItem>
                  ????????? {valueString?.step3}
                </ItemContainerItem>
              </ItemContainer>
            )}
          />
          <ItemGroup
            title="??????"
            subTitle={`??????: ${20} (??????: U)`}
            style={{marginTop: 0}}
          />
          <Setting.Row>
            <Select
              value={stepValue}
              list={stepValues}
              onChange={setStepValue}
            />
            <Select
              value={value[stepValue]?.int}
              list={values}
              onChange={x => changeValue(stepValue, 'int', x)}
            />
            <Select
              value={value[stepValue]?.float}
              list={milliValues}
              onChange={x => changeValue(stepValue, 'float', x)}
            />
          </Setting.Row>
        </>
      ) : (
        <>
          <ItemGroup
            title="?????? ??????"
            subTitle={`??????: ${20} (??????: U)`}
            style={{marginTop: 0}}
          />
          <Setting.Row>
            <Select
              value={value?.step1?.int}
              list={values}
              onChange={x => changeValue('step1', 'int', x)}
            />
            <Select
              value={value?.step1?.float}
              list={milliValues}
              onChange={x => changeValue('step1', 'float', x)}
            />
          </Setting.Row>

          <ItemGroup
            title="?????? ??????"
            subTitle={`??????: ${20} (??????: U)`}
            style={{marginTop: 0}}
          />
          <Setting.Row>
            <Select
              value={value?.step2?.int}
              list={values}
              onChange={x => changeValue('step2', 'int', x)}
            />
            <Select
              value={value?.step2?.float}
              list={milliValues}
              onChange={x => changeValue('step2', 'float', x)}
            />
          </Setting.Row>

          <ItemGroup
            title="?????? ??????"
            subTitle={`??????: ${20} (??????: U)`}
            style={{marginTop: 0}}
          />
          <Setting.Row>
            <Select
              value={value?.step3?.int}
              list={values}
              onChange={x => changeValue('step3', 'int', x)}
            />
            <Select
              value={value?.step3?.float}
              list={milliValues}
              onChange={x => changeValue('step3', 'float', x)}
            />
          </Setting.Row>
        </>
      )}

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="??????" />
        <Button type="cancel" onPress={() => navigation.goBack()} text="??????" />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
