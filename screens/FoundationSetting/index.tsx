import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import styled from 'styled-components/native';
import {colors, description, milliNumbers, values} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';
import Unit from '../../layouts/Unit';

type CurrentTime = {
  id: number;
  start: number;
  end: number;
  value: number;
  isActive: boolean;
};
type Value = {int: number; float: number};
const currentTime = new Array(24).fill(0).map((_, i) => ({
  id: i + 1,
  start: i,
  end: i + 1,
  value: 10,
  isActive: false,
}));

export default function FoundationSettingScreen() {
  const navigation = useNavigation();
  const [time, setTime] = useState<CurrentTime[]>(currentTime);
  const [value, setUnit] = useState<Value>({int: 15, float: 0});

  const sortValue = useMemo<CurrentTime[]>(() => {
    return time?.sort((a, b) => a?.id - b?.id);
  }, [time]);

  const changeValue = (key: keyof Value, val: number): void => {
    setUnit(prev => ({...prev, [key]: val}));
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
    let otherList = time?.filter(x => !x?.isActive);

    activeList = activeList?.map(x => ({
      ...x,
      value: value?.int + value?.float,
      isActive: false,
    }));
    otherList = otherList?.map(x => ({...x, isActive: false}));
    setTime([...otherList, ...activeList]);
  };

  const submit = (): void => {
    console.log(time);
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.foundation} />

      <ItemGroup
        title="기초단위 설정"
        subTitle="(단위: U)"
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
          list={milliNumbers}
          onChange={x => changeValue('float', x)}
        />
        <SettingBtn onPress={save}>
          <SettingBtnText>설정</SettingBtnText>
        </SettingBtn>
      </Setting.Row>

      <ItemGroup
        title="시간 설정"
        subTitle="(단위: 시)"
        style={{marginTop: 0}}
      />
      <ToggleBtnContainer>
        {sortValue?.map(item => (
          <ToggleBtn
            key={item?.id}
            isActive={item?.isActive}
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

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="저장" />
        <Button type="cancel" onPress={() => navigation.goBack()} text="취소" />
      </Setting.Buttons>
    </Container.Scroll>
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
}))<{isActive: boolean}>`
  flex: 1;
  min-width: 20%;
  max-width: 25%;
  margin: 5px;
  height: 50px;
  border: 1px solid #ddd;
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
