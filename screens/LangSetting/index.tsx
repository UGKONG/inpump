import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {langList} from '../../assets/strings';
import useStorage from '../../hooks/useStorage';
import Button from '../../layouts/Button';
import Container from '../../layouts/Container';
import Select from '../../layouts/Select';
import Setting from '../../layouts/Setting';

export default function LangSettingScreen() {
  const storage = useStorage();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState<Lang>();

  const init = async (): Promise<void> => {
    const {error, result} = await storage.getItem('lang');
    if (error) return setValue('ko');
    setValue(result);
  };

  const goBack = (): void => navigation.goBack();

  const onChange = (x: Lang): void => {
    setValue(x);
  };

  const submit = async (): Promise<void> => {
    let {error} = await storage.setItem('lang', value as Lang);
    if (error) return console.log('언어 저장 실패');
    dispatch({type: 'lang', payload: value});
    console.log('언어 저장 성공 - ' + value);
    goBack();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container.View>
      <Setting.Row>
        <Select value={value ?? 'ko'} list={langList} onChange={onChange} />
      </Setting.Row>
      <Setting.Buttons>
        <Button type="submit" onPress={submit} text="저장" />
        <Button type="cancel" text="취소" onPress={goBack} />
      </Setting.Buttons>
    </Container.View>
  );
}
