import Container from '../../layouts/Container';
import Image from '../../layouts/Image';
import ItemGroup from '../../layouts/ItemGroup';

export default function UseDefaultInfoScreen() {
  return (
    <Container.Scroll>
      <ItemGroup title="제품의 구성" style={{marginTop: 0}} />
      <Image source={require('../../assets/use/1.png')} />
      <ItemGroup title="각 부분의 명칭과 역할" />
      <Image source={require('../../assets/use/2.png')} />
      <ItemGroup title="제품사용 유의사항" />
      <Image source={require('../../assets/use/3.png')} />
      <ItemGroup title="장비관리 방법" />
      <Image source={require('../../assets/use/4.png')} />
    </Container.Scroll>
  );
}
