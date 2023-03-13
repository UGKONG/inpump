import React, {useEffect, useMemo, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Container from '../../layouts/Container';
import Loading from '../../layouts/Loading';
import ValueContainer from './ValueContainer';
import NoneItem from '../../layouts/NoneItem';
import {useDate} from '../../functions/utils';
import ChartBarContainer from './ChartBarContainer';
import ChartLabelContainer from './ChartLabelContainer';
import styled from 'styled-components/native';
import ChartControllerContainer from './ChartControllerContainer';

export type Data = {
  id: number;
  date: string;
  value: {foundation: number; meal: number; add: number};
};
export type Max = {
  value: number;
  limit: number;
  range: number;
  rangeCount: number;
};

// 가데이터
const tempData = [
  {foundation: 80.5 / 3, meal: 80.5, add: 3.5},
  {foundation: 94.5 / 3, meal: 94.5, add: 2.5},
  {foundation: 85.0 / 3, meal: 85.0, add: 3.0},
  {foundation: 84.5 / 3, meal: 84.5, add: 1.0},
  {foundation: 80.5 / 3, meal: 80.5, add: 0.5},
  {foundation: 83.5 / 3, meal: 83.5, add: 1.5},
  {foundation: 80.0 / 3, meal: 80.0, add: 0.0},
];

export default function HistoryScreen() {
  const isFocus = useIsFocused();
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [date, setDate] = useState<string>(useDate(new Date(), false));
  const [dataList, setDataList] = useState<Data[]>([]);

  const max = useMemo<Max>(() => {
    let value = 0;
    let limit = 0;
    let range = 0;
    let rangeCount = 0;

    if (!dataList?.length) return {value, limit, range, rangeCount};

    let copy = dataList?.map(item => {
      let foundation = item?.value?.foundation ?? 0;
      let meal = item?.value?.meal ?? 0;
      let add = item?.value?.add ?? 0;
      let result = foundation + meal + add;
      return result;
    });

    value = Math.max(...copy);
    limit = value <= 100 ? 100 : 150;
    range = value <= 100 ? 20 : 30;
    rangeCount = 5;

    return {value, limit, range, rangeCount};
  }, [dataList]);

  const dateList = useMemo<string[]>(() => {
    if (!date) return [];
    let result = [];
    let _date = new Date(date);
    for (let i = 0; i < 7; i++) {
      result.unshift(useDate(_date, false));
      _date.setDate(_date.getDate() - 1);
    }
    return result;
  }, [date]);

  const getList = (): void => {
    setIsLoad(false);
    if (!dateList?.length) return;

    // 가데이터
    let result = dateList?.map((date, i) => ({
      id: i + 1,
      value: tempData[i],
      date: date,
    }));
    setDataList(result);
  };

  useEffect(getList, [isFocus, dateList]);

  return (
    <Container.View>
      <ValueContainer />

      <ChartContainer>
        {isLoad ? (
          <Loading />
        ) : !dataList?.length ? (
          <NoneItem text="히스토리가 없습니다." />
        ) : (
          <>
            <ChartControllerContainer date={date} setDate={setDate} />
            <ChartBarContainer dataList={dataList} max={max} />
            <ChartLabelContainer dateList={dateList} />
          </>
        )}
      </ChartContainer>
    </Container.View>
  );
}

const ChartContainer = styled.View`
  width: 100%;
  flex: 1;
`;
