import {Dispatch, SetStateAction, useMemo} from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../assets/strings';
import {useDate} from '../../functions/utils';

type Props = {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
};
type DateString = {
  prev: string;
  now: string;
  next: string;
};

export default function ChartControllerContainer({date, setDate}: Props) {
  let returnString = (dt: Date): string => {
    return dt?.getMonth() + 1 + '월 ' + dt?.getDate() + '일';
  };

  const dateString = useMemo<DateString>(() => {
    let range = 1;
    let _date = new Date(date);
    let now = returnString(_date);
    _date?.setDate(_date?.getDate() - range);
    let prev = returnString(_date);
    _date?.setDate(_date?.getDate() + range * 2);
    let next = returnString(_date);
    return {prev, now, next};
  }, [date]);

  const move = (range: -1 | 1): void => {
    setDate(prev => {
      let _date = new Date(prev);
      _date?.setDate(_date?.getDate() + range);
      return useDate(_date, false);
    });
  };

  return (
    <Container>
      <MoveBtn dir="left" onPress={() => move(-1)}>
        <Icon name="chevron-back" />
        <Text>{dateString?.prev || '-'}</Text>
      </MoveBtn>
      <ActiveDate>{dateString?.now || '-'}</ActiveDate>
      <MoveBtn dir="right" onPress={() => move(1)}>
        <Text>{dateString?.next || '-'}</Text>
        <Icon name="chevron-forward" />
      </MoveBtn>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const Text = styled.Text`
  font-weight: 500;
  align-items: center;
  color: ${colors?.disableMain};
`;
const ActiveDate = styled(Text).attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${colors?.main};
  padding: 0 10px;
`;
const MoveBtn = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))<{dir: 'left' | 'right'}>`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  justify-content: flex-${x => (x?.dir === 'left' ? 'start' : 'end')};
`;
const Icon = styled(Ionicons)`
  font-size: 20px;
  color: ${colors?.disableMain};
`;
