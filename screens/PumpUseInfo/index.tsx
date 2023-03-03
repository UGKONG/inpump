import Container from '../../layouts/Container';
import Image from '../../layouts/Image';
import ItemGroup from '../../layouts/ItemGroup';

export default function PumpUseInfoScreen() {
  return (
    <Container.Scroll>
      <ItemGroup title="제품의 구성" style={{marginTop: 0}} />
      <Image source={require('../../assets/pump/1.png')} />
    </Container.Scroll>
  );
}
