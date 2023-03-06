import styled from 'styled-components/native';
import Item from '../../layouts/Item';
import _ItemGroup from '../../layouts/ItemGroup';

export default function ValueContainer() {
  return (
    <Container>
      <ItemGroup
        title="1일 설정 단위"
        subTitle="(넣기로 설정된 값)"
        style={{marginTop: 0}}
      />
      <Item title={'기초단위 10.5  식사단위 25.0  전체단위 35.5'} />

      <ItemGroup title="금일 주입 내용" subTitle="(실제 넣은 값)" />
      <Item title={'기초주입 7.3  식사주입 15.0  추가주입 5.0'} />

      <ItemGroup title="히스토리" />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
`;
const ItemGroup = styled(_ItemGroup)`
  margin-top: 0;
`;
