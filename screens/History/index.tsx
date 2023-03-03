import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Container from '../../layouts/Container';
import Loading from '../../layouts/Loading';
import ValueContainer from './ValueContainer';
import Item from '../../layouts/Item';
import NoneItem from '../../layouts/NoneItem';

export default function HistoryScreen() {
  const isFocus = useIsFocused();
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [list, setList] = useState<
    {
      id: number;
      value: {foundation: number; meals: number; add: number};
      date: string;
    }[]
  >([]);

  const getList = (): void => {
    setTimeout(() => setIsLoad(false), 1000);

    // 가데이터
    setList([
      {
        id: 1,
        value: {foundation: 2.4, meals: 2.4, add: 2.4},
        date: '2023-03-02 22:23:00',
      },
      {
        id: 2,
        value: {foundation: 1.2, meals: 1.2, add: 1.2},
        date: '2023-03-01 17:48:00',
      },
      {
        id: 3,
        value: {foundation: 2.0, meals: 2.0, add: 2.0},
        date: '2023-02-24 10:25:00',
      },
      {
        id: 4,
        value: {foundation: 0.9, meals: 0.9, add: 0.9},
        date: '2023-02-19 14:12:00',
      },
      {
        id: 5,
        value: {foundation: 2.4, meals: 2.4, add: 2.4},
        date: '2023-02-16 22:23:00',
      },
      {
        id: 6,
        value: {foundation: 1.2, meals: 1.2, add: 1.2},
        date: '2023-02-14 17:48:00',
      },
      {
        id: 7,
        value: {foundation: 2.0, meals: 2.0, add: 2.0},
        date: '2023-02-12 10:25:00',
      },
      {
        id: 8,
        value: {foundation: 0.9, meals: 0.9, add: 0.9},
        date: '2023-02-10 14:12:00',
      },
      {
        id: 9,
        value: {foundation: 2.4, meals: 2.4, add: 2.4},
        date: '2023-02-09 22:23:00',
      },
      {
        id: 10,
        value: {foundation: 1.2, meals: 1.2, add: 1.2},
        date: '2023-02-08 17:48:00',
      },
      {
        id: 11,
        value: {foundation: 2.0, meals: 2.0, add: 2.0},
        date: '2023-02-06 10:25:00',
      },
      {
        id: 12,
        value: {foundation: 0.9, meals: 0.9, add: 0.9},
        date: '2023-02-04 14:12:00',
      },
      {
        id: 13,
        value: {foundation: 2.4, meals: 2.4, add: 2.4},
        date: '2023-01-03 22:23:00',
      },
      {
        id: 14,
        value: {foundation: 1.2, meals: 1.2, add: 1.2},
        date: '2023-02-02 17:48:00',
      },
      {
        id: 15,
        value: {foundation: 2.0, meals: 2.0, add: 2.0},
        date: '2023-02-01 10:25:00',
      },
      {
        id: 16,
        value: {foundation: 0.9, meals: 0.9, add: 0.9},
        date: '2023-01-30 14:12:00',
      },
    ]);
  };

  const createText = (value: {
    foundation: number;
    meals: number;
    add: number;
  }): string => {
    let foundation = `기초주입 ${value?.foundation?.toFixed(1)}U`;
    let meals = `식사주입 ${value?.meals?.toFixed(1)}U`;
    let add = `추가주입 ${value?.add?.toFixed(1)}U`;
    return `${foundation}  ${meals}  ${add}`;
  };

  useEffect(getList, [isFocus]);

  return (
    <Container.View>
      <ValueContainer />

      <Container.Scroll>
        {isLoad ? (
          <Loading />
        ) : !list?.length ? (
          <NoneItem text="히스토리가 없습니다." />
        ) : (
          list?.map(item => (
            <Item
              key={item?.id}
              title={createText(item?.value)}
              date={item?.date}
              nonePress
            />
          ))
        )}
      </Container.Scroll>
    </Container.View>
  );
}
