import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import {Alert, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {
  colors,
  description,
  makeValues,
  milliValues,
} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type CurrentTime = {
  id: number;
  start: number;
  end: number;
  value: number;
  isActive: boolean;
  isChange: boolean;
};
type Value = {int: number; float: number};
const currentTime = new Array(24).fill(0).map((_, i) => ({
  id: i + 1,
  start: i,
  end: i + 1,
  value: 2,
  isActive: false,
  isChange: false,
}));
const values = makeValues(3);

export default function FoundationSettingScreen() {
  const navigation = useNavigation();
  const [time, setTime] = useState<CurrentTime[]>(currentTime);
  const [value, setValue] = useState<Value>({int: 15, float: 0});

  const sortValue = useMemo(() => time?.sort((a, b) => a?.id - b?.id), [time]);

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

  const isAllChecked = useMemo<boolean>(() => {
    let result = true;
    time?.forEach(item => {
      if (!item?.isActive) return (result = false);
    });
    return result;
  }, [time]);

  const allToggle = (isTrue: boolean): void => {
    let result = time?.map(item => ({...item, isActive: isTrue}));
    setTime(result);
  };

  const toggle = (id: number): void => {
    let find = time?.find(x => x?.id === id);
    if (!find) return;
    let other = time?.filter(x => x?.id !== id);

    let copy = {...find, isActive: !find?.isActive};
    setTime([...other, copy]);
  };

  const save = (): void => {
    let activeList = time?.filter(x => x?.isActive);
    if (!activeList?.length) {
      return Alert.alert('????????????', '????????? ????????? ????????????.');
    }
    let otherList = time?.filter(x => !x?.isActive);

    activeList = activeList?.map(x => ({
      ...x,
      value: value?.int + value?.float,
      isActive: false,
      isChange: true,
    }));
    otherList = otherList?.map(x => ({...x, isActive: false}));
    setTime([...otherList, ...activeList]);
  };

  const submit = (): void => {
    if (time?.find(x => x?.isChange)) {
      console.log(time);
      Alert.alert('????????????', '?????????????????????.');
    } else {
      Alert.alert('????????????', '??????????????? ????????????.');
    }
    navigation.goBack();
  };

  return (
    <Container.View>
      <SettingDescription text={description.foundation} />

      <ItemGroup
        title="???????????? ??????"
        subTitle={`??????: ${3} (??????: U)`}
        style={{marginTop: 0}}
      />
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
        <SettingBtn onPress={save}>
          <SettingBtnText>??????</SettingBtnText>
        </SettingBtn>
      </Setting.Row>

      <ItemGroup
        title="?????? ??????"
        subTitle="(??????: ???)"
        style={{marginTop: 0}}
      />
      <Container.Scroll>
        <ToggleBtnContainer>
          <AllToggleBtn onPress={() => allToggle(true)}>
            <AllToggleBtnText>??? ??? ??? ???</AllToggleBtnText>
          </AllToggleBtn>
          <AllToggleBtn onPress={() => allToggle(false)}>
            <AllToggleBtnText>??? ??? ??? ???</AllToggleBtnText>
          </AllToggleBtn>
          {sortValue?.map(item => (
            <ToggleBtn
              key={item?.id}
              isActive={item?.isActive}
              isChange={item?.isChange}
              onPress={() => toggle(item?.id)}>
              <ToggleBtnText isActive={item?.isActive}>
                {item?.start} ~ {item?.end}
              </ToggleBtnText>
              <ToggleBtnValue isActive={item?.isActive}>
                {item?.value}U
              </ToggleBtnValue>
            </ToggleBtn>
          ))}
        </ToggleBtnContainer>
      </Container.Scroll>

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="??????" />
        <Button type="cancel" onPress={() => navigation.goBack()} text="??????" />
      </Setting.Buttons>
    </Container.View>
  );
}

const SettingBtn = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: 70px;
  background-color: ${colors.main};
  padding: 12px 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 10px;
`;
const SettingBtnText = styled.Text`
  color: #fff;
`;
const ToggleBtnContainer = styled.View`
  padding: 10px 10px 0;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ToggleBtn = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))<{isActive: boolean; isChange: boolean}>`
  flex: 1;
  min-width: 20%;
  max-width: 25%;
  margin: 5px;
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${x => (x?.isChange ? colors.disableMain : '#ddd')};
  background-color: ${x => (x?.isActive ? colors.disableMain : '#fff')};
`;
const ToggleBtnText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{isActive: boolean}>`
  text-align: center;
  flex: 1;
  line-height: 25px;
  background-color: ${x => (x?.isActive ? colors.main : '#eee')};
  color: ${x => (x?.isActive ? '#fff' : colors.disable)};
`;
const ToggleBtnValue = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{isActive: boolean}>`
  text-align: center;
  flex: 1;
  line-height: 25px;
  color: ${x => (x?.isActive ? '#fff' : colors.disable)};
`;
const AllToggleBtn = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  flex: 1;
  min-width: 40%;
  max-width: 50%;
  margin: 5px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${colors.disableMain};
  background-color: ${colors.disableMain};
  align-items: center;
  justify-content: center;
`;
const AllToggleBtnText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
