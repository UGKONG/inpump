import Container from '../../layouts/Container';
import Item from '../../layouts/Item';
import ItemGroup from '../../layouts/ItemGroup';

export default function AppInfoScreen() {
  return (
    <Container.Scroll>
      <ItemGroup title="펌웨어 버전" style={{marginTop: 0}} />
      <Item title="1.0" />
      <ItemGroup title="앱 버전" style={{marginTop: 0}} />
      <Item title="1.0.0" />
      <ItemGroup title="약관" style={{marginTop: 0}} />
      <Item title="이용약관" />
      <Item title="개인정보처리방침" />
      <Item title="법적공지" />
    </Container.Scroll>
  );
}
