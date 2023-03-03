import Container from '../../layouts/Container';
import Image from '../../layouts/Image';
import ItemGroup from '../../layouts/ItemGroup';

export default function BatteryUseInfoScreen() {
  return (
    <Container.Scroll>
      <ItemGroup title="배터리 교체" style={{marginTop: 0}} />
      <Image source={require('../../assets/battery/1.png')} />
      <ItemGroup title="주의사항" />
      <Image source={require('../../assets/battery/2.png')} />
    </Container.Scroll>
  );
}
