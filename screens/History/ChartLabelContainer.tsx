import {useMemo} from 'react';
import styled from 'styled-components/native';

type Props = {dateList: string[]};

export default function ChartLabelContainer({dateList}: Props) {
  const viewDateList = useMemo<string[]>(() => {
    return dateList?.map(x => {
      let [y, m, d] = x?.split('-');
      m = String(Number(m));
      d = String(Number(d));
      return m + '/' + d;
    });
  }, [dateList]);

  return (
    <Container>
      {viewDateList?.map(item => (
        <Col key={item}>
          <LineMargin />
          <Text>{item}</Text>
        </Col>
      ))}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #eee;
  align-items: center;
  padding-left: 30px;
`;
const Col = styled.View`
  min-width: ${100 / 7}%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;
const LineMargin = styled.View`
  width: 100%;
  height: 6px;
  border-left-width: 1px;
  border-left-color: #eee;
`;
const Text = styled.Text`
  font-size: 12px;
  color: #777;
  text-align: center;
`;
