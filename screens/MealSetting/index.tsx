import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {description, milliNumbers, values} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Value = {
  step1: {int: number; float: number};
  step2: {int: number; float: number};
  step3: {int: number; float: number};
};

export default function MealSettingScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState<Value>({
    step1: {int: 15, float: 0},
    step2: {int: 15, float: 0},
    step3: {int: 15, float: 0},
  });

  const changeValue = (
    key1: keyof Value,
    key2: keyof Value[keyof Value],
    val: number,
  ): void => {
    setValue(prev => ({...prev, [key1]: {...prev[key1], [key2]: val}}));
  };

  const submit = (): void => {
    console.log(value);
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.meal} />

      <ItemGroup
        title="아침 식사"
        subTitle="(단위: U)"
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
          list={milliNumbers}
          onChange={x => changeValue('step1', 'float', x)}
        />
      </Setting.Row>

      <ItemGroup
        title="점심 식사"
        subTitle="(단위: U)"
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
          list={milliNumbers}
          onChange={x => changeValue('step2', 'float', x)}
        />
      </Setting.Row>

      <ItemGroup
        title="저녁 식사"
        subTitle="(단위: U)"
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
          list={milliNumbers}
          onChange={x => changeValue('step3', 'float', x)}
        />
      </Setting.Row>

      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="저장" />
        <Button type="cancel" onPress={() => navigation.goBack()} text="취소" />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
