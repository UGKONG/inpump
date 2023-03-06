import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useMemo} from 'react';
import ProgressBar from '../../layouts/ProgressBar';
import {colors} from '../../assets/strings';
import ItemGroup from '../../layouts/ItemGroup';
import Item from '../../layouts/Item';

type State = {
  stateTotal: number;
  stateNow: number;
  statePercent: number;
  stateColor: string;
  batteryPercentTotal: number;
  batteryPercentNow: number;
  batteryPercent: number;
  batteryColor: string;
};

export default function ConnectedDeviceInfo() {
  const device = useSelector((x: Store) => x?.device);

  const status = useMemo<State>(() => {
    let stateTotal = 300 ?? 0;
    let stateNow = 215 ?? 0;
    let statePercent = Math.round((stateNow / stateTotal) * 100);

    let batteryPercentTotal = 100 ?? 0;
    let batteryPercentNow = 30 ?? 0;
    let batteryPercent = Math.round(
      (batteryPercentNow / batteryPercentTotal) * 100,
    );

    let stateColor: string = colors.main;
    if (statePercent <= 30) stateColor = colors.warn;
    if (statePercent <= 15) stateColor = colors.error;

    let batteryColor: string = colors.main;
    if (batteryPercent <= 30) batteryColor = colors.warn;
    if (batteryPercent <= 15) batteryColor = colors.error;

    return {
      stateTotal,
      stateNow,
      statePercent,
      batteryPercentTotal,
      batteryPercentNow,
      batteryPercent,
      stateColor,
      batteryColor,
    };
  }, [device]);

  return (
    <Container>
      <ItemGroup
        titleIcon={() => <Icon1 name="ios-bluetooth" color={colors.main} />}
        title="장치 정보"
        style={{marginTop: 0}}
      />
      <Item
        title={'UUID : ' + (device?.id ?? '-')}
        style={{minHeight: 40}}
        fontStyle={{fontSize: 13}}
        nonePress
      />
      <Item
        title={'장치명 : ' + (device?.name ?? '-')}
        style={{minHeight: 40}}
        fontStyle={{fontSize: 13}}
        nonePress
      />

      <ItemGroup
        titleIcon={() => (
          <Icon1 name="ios-battery-half-sharp" color={colors.main} />
        )}
        title="배터리 잔량"
        subTitle={`${status?.batteryPercent}%`}
        style={{marginTop: 0}}
      />
      <ProgressContainer>
        <ProgressBar
          height={6}
          percent={status.batteryPercent}
          border={status.batteryColor}
          color={status.batteryColor}
        />
      </ProgressContainer>

      <ItemGroup
        titleIcon={() => <Icon2 name="syringe" color={colors.main} />}
        title="인슐린 잔량"
        subTitle={`${status?.stateNow}U / ${status?.stateTotal}U (${status?.statePercent}%)`}
        style={{marginTop: 0}}
      />
      <ProgressContainer>
        <ProgressBar
          height={6}
          percent={60}
          border={status.stateColor}
          color={status.stateColor}
        />
      </ProgressContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
`;
const iconStyle = `
  font-size: 14px;
  margin: 0 2px;
`;
const Icon1 = styled(Ionicons)`
  ${iconStyle}
`;
const Icon2 = styled(FontAwesome5Icon)`
  ${iconStyle}
`;
const ProgressContainer = styled.View`
  height: 40px;
  justify-content: center;
  padding: 0 10px 2px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
