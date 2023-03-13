import styled from 'styled-components/native';
import {colors} from '../../assets/strings';
import type {Data, Max} from '.';
import {useMemo} from 'react';
import {Dimensions} from 'react-native';

type Props = {dataList: Data[]; max: Max};

const {width, height} = Dimensions.get('screen');

export default function ChartBarContainer({dataList, max}: Props) {
  const rangeArray = useMemo<number[]>(() => {
    let result = [];
    for (let i = 0; i < max?.rangeCount; i++) {
      result.push(i);
    }
    return result;
  }, [max?.rangeCount]);

  const percent = (val: number): number => {
    if (!val) return 0;
    return (val / max?.limit) * 100;
  };

  return (
    <Container>
      <TotalLabel>합</TotalLabel>
      <ColLabelContainer>
        {rangeArray?.map(i => (
          <ColLabel key={i} style={{minHeight: 100 / max?.rangeCount + '%'}}>
            <BgLine width={width - 30} />

            {i === rangeArray?.length - 1 && (
              <>
                <ColLastLabelText>{max?.limit}</ColLastLabelText>
                <ColLabelLine />
              </>
            )}
            <ColLabelText>{i * max?.range}</ColLabelText>
            <ColLabelLine />
          </ColLabel>
        ))}
      </ColLabelContainer>

      {dataList?.map((item, i) => (
        <ColBar key={item?.id} isFirst={i === 0}>
          {/* 추가 */}
          <Bar color={colors?.add} height={percent(item?.value?.add ?? 0)}>
            {item?.value?.add > 0 && (
              <BarValue isSmall={item?.value?.add < 5}>
                {item?.value?.add?.toFixed(1)}
              </BarValue>
            )}
          </Bar>

          {/* 식사 */}
          <Bar color={colors?.meal} height={percent(item?.value?.meal ?? 0)}>
            {item?.value?.meal > 0 && (
              <BarValue isSmall={false}>
                {item?.value?.meal?.toFixed(1)}
              </BarValue>
            )}
          </Bar>

          {/* 기초 */}
          <Bar
            color={colors?.foundation}
            height={percent(item?.value?.foundation ?? 0)}>
            {item?.value?.foundation && (
              <BarValue isSmall={false}>
                {item?.value?.foundation?.toFixed(1)}
              </BarValue>
            )}
          </Bar>

          {/* 토탈 */}
          <TotalValue>
            {(
              item?.value?.add +
              item?.value?.meal +
              item?.value?.foundation
            )?.toFixed(1)}
          </TotalValue>
        </ColBar>
      ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding-left: 30px;
  position: relative;
`;
const ColBar = styled.View<{isFirst: boolean}>`
  min-width: ${100 / 7}%;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;
  ${x => x?.isFirst && 'border-left-width: 1px;border-left-color: #eee;'}
  position: relative;
`;
const Bar = styled.View<{height: number; color: string}>`
  width: 70%;
  height: ${x => x?.height}%;
  background-color: ${x => x?.color ?? colors.main};
  position: relative;
  align-items: center;
  justify-content: center;
`;
const BarValue = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{isSmall: boolean}>`
  position: absolute;
  font-size: 9px;
  color: #777;
  width: auto;
  ${x => x?.isSmall && 'bottom: 100%;'}
`;
const TotalLabel = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  color: ${colors.main};
  height: 20px;
  line-height: 20px;
`;
const TotalValue = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  position: absolute;
  font-size: 11px;
  font-weight: 500;
  color: ${colors.main};
  bottom: 100%;
  height: 20px;
  line-height: 20px;
`;
const ColLabelContainer = styled.View`
  position: absolute;
  width: 30px;
  height: 100%;
  left: 0;
  padding-top: 20px;
  flex-direction: column-reverse;
`;
const ColLabel = styled.View`
  flex: 1;
  align-items: flex-end;
  position: relative;
`;
const ColLabelLine = styled.View`
  height: 100%;
  width: 6px;
  border-top-width: 1px;
  border-top-color: #eee;
`;
const BgLine = styled.View<{width: number}>`
  position: absolute;
  width: ${x => x?.width}px;
  height: 1px;
  background-color: #eeeeee77;
  left: 100%;
  top: 0;
`;
const ColLabelText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: 9px;
  color: #777;
  position: absolute;
  top: 100%;
  right: 2px;
`;
const ColLastLabelText = styled(ColLabelText)`
  top: 0;
`;
