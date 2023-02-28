import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const battery = [
  'ios-battery-dead-sharp',
  'ios-battery-half-sharp',
  'ios-battery-full-sharp',
  'ios-battery-charging-sharp',
];

export default function ConnectDevice() {
  const device = useSelector((x: Store) => x?.device);

  return (
    <Container>
      {/* <Icon name={battery[2]} /> */}
      <Icon name="alert-circle-outline" color="#f00" />
      <Icon name="sync-outline" color="#126a03" />
      <Icon name="ios-bluetooth" color="#00f" />
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
  color: ${x => x?.color ?? '#343434'};
  margin-left: 6px;
`;
