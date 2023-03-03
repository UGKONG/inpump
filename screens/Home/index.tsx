import {useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Container from '../../layouts/Container';
import ConnectedDeviceInfo from './ConnectedDeviceInfo';
import ControllerBox from './ControllerBox';
import StatusInfo from './StatusInfo';

export default function HomeScreen() {
  const isFocus = useIsFocused();
  const [isYes, setIsYes] = useState<boolean>(true);

  return (
    <Container.Scroll>
      <ControllerBox isYes={isYes} setIsYes={setIsYes} />
      <ConnectedDeviceInfo />
      <StatusInfo />
    </Container.Scroll>
  );
}
