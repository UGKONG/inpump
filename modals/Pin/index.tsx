import {useEffect, useState} from 'react';
import {Dimensions, Platform, Vibration} from 'react-native';
import styled from 'styled-components/native';
import Container from '../../layouts/Container';
import Loading from '../../layouts/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import useStorage from '../../hooks/useStorage';

type Key = {element: string | JSX.Element; value: number | null};
type Value = 0 | 1 | 2;

const os = Platform.OS;
const {height} = Dimensions.get('screen');
const keys: Key[] = [
  {element: '1', value: 1},
  {element: '2', value: 2},
  {element: '3', value: 3},
  {element: '4', value: 4},
  {element: '5', value: 5},
  {element: '6', value: 6},
  {element: '7', value: 7},
  {element: '8', value: 8},
  {element: '9', value: 9},
  {element: <Icon name="key-outline" size={30} />, value: null},
  {element: '0', value: 0},
  {element: <Icon name="ios-arrow-back" size={30} />, value: -1},
];

export default function PinScreen() {
  const dispatch = useDispatch();
  const storage = useStorage();
  const [activatePin, setActivatePin] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [isPinFail, setIsPinFail] = useState<boolean>(false);

  const getActivatePin = async (): Promise<void> => {
    setActivatePin('0000'); // DEV
  };

  const active = (value: Key['value']): string => {
    let opacity = value === null ? '00' : '';
    return '#f2f2f2' + opacity;
  };

  const pinFailCallback = (): void => {
    if (os === 'ios') Vibration.vibrate();
    setIsPinFail(true);
    setValue('');
  };

  const submit = (): void => {
    // 현재 비밀번호 확인
    if (activatePin !== value) return pinFailCallback();

    // 성공
    dispatch({type: 'isPin', payload: true});
  };

  const keyPress = (val: Key['value']): void => {
    if (val === null) return;
    let result = val === -1 ? value?.slice(0, -1) : value + String(val);
    setValue(result);
  };

  useEffect(() => {
    getActivatePin();
  }, []);

  useEffect(() => {
    if (value?.length >= 4) submit();
  }, [value]);

  return (
    <Container.View>
      <InputContainer>
        <Description isPinFail={isPinFail}>암 호 입 력</Description>
        {isPinFail && <Notice>암호가 일치하지 않습니다.</Notice>}
        <ValueContainer>
          <Value isActive={value[0] ? true : false} />
          <Value isActive={value[1] ? true : false} />
          <Value isActive={value[2] ? true : false} />
          <Value isActive={value[3] ? true : false} />
        </ValueContainer>
      </InputContainer>
      <KeyContainer height={height * 0.6}>
        {keys.map(item => (
          <KeyButton
            key={item?.value}
            underlayColor={active(item?.value)}
            onPress={() => keyPress(item?.value)}>
            <KeyText>{item?.element}</KeyText>
          </KeyButton>
        ))}
      </KeyContainer>
    </Container.View>
  );
}

const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;
const Description = styled.Text<{isPinFail: boolean}>`
  font-size: 20px;
  font-weight: 700;
  color: #232323;
  margin-bottom: ${x => (x?.isPinFail ? 10 : 30)}px;
`;
const Notice = styled.Text`
  font-size: 14px;
  color: #fd3f3f;
  margin-bottom: 20px;
`;
const ValueContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Value = styled.View<{isActive: boolean}>`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin: 0 15px;
  background-color: ${x => (x?.isActive ? '#6c6cdc' : '#ddd')};
`;
const KeyContainer = styled.View<{height: number}>`
  width: 100%;
  height: ${x => x?.height}px;
  flex-wrap: wrap;
  flex-direction: row;
`;
const KeyButton = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  width: 33.3333%;
  height: 25%;
  border: 1px solid #eee;
`;
const KeyText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 60px;
  text-align: center;
  color: #333;
`;
