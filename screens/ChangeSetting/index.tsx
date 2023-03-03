import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {description, values} from '../../assets/strings';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';
import SettingDescription from '../../layouts/SettingDescription';

type Value = {value: number};

export default function ChangeSettingScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState<Value>({value: 300});

  const changeValue = (key: keyof Value, val: number): void => {
    setValue(prev => ({...prev, [key]: val}));
  };

  const submit = (): void => {
    console.log(value);
  };

  return (
    <Container.Scroll>
      <SettingDescription text={description.change} />

      <ItemGroup title="현재 잔량" style={{marginTop: 0}} />
      <Item title="250U" nonePress />
      <ItemGroup title="교체량 설정" style={{marginTop: 0}} />
      <Setting.Row>
        <Select
          unit="U"
          value={value?.value}
          list={values}
          onChange={x => changeValue('value', x)}
        />
      </Setting.Row>

      <Setting.Buttons>
        <Button type="submit" onPress={submit} />
        <Button type="cancel" onPress={() => navigation.goBack()} />
      </Setting.Buttons>
    </Container.Scroll>
  );
}
