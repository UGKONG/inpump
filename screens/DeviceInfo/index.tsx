import Container from '../../layouts/Container';
import Image from '../../layouts/Image';

export default function DeviceInfoScreen() {
  return (
    <Container.Scroll>
      <Image source={require('../../assets/device/1.png')} />
    </Container.Scroll>
  );
}
