import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../assets/strings';

const battery = [
  'ios-battery-dead-sharp',
  'ios-battery-half-sharp',
  'ios-battery-full-sharp',
  'ios-battery-charging-sharp',
];

export default function HeaderStatus() {
  const device = useSelector((x: Store) => x?.device);

  return (
    <Container>
      <Icon name="alert-circle-outline" color={colors.error} />
      <Icon name="sync-outline" color={colors.success} />
      <Icon name="ios-bluetooth" color={colors.bluetooth} />
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Icon = styled(Ionicons)<{color?: string}>`
  font-size: 19px;
  color: ${x => x?.color ?? colors.disable};
  margin-left: 6px;
`;
