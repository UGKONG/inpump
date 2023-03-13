import styled from 'styled-components/native';
import {colors} from '../../assets/strings';
import Item, {ItemContainer, ItemContainerItem} from '../../layouts/Item';
import _ItemGroup from '../../layouts/ItemGroup';

export default function ValueContainer() {
  return (
    <Container>
      <ItemGroup
        title="1일 설정 단위"
        subTitle="(넣기로 설정된 값)"
        style={{marginTop: 0}}
      />
      <Item
        title={() => (
          <ItemContainer>
            <ItemContainerItem>기초단위 10.5</ItemContainerItem>
            <ItemContainerItem>식사단위 25.0</ItemContainerItem>
            <ItemContainerItem>전체단위 35.5</ItemContainerItem>
          </ItemContainer>
        )}
      />

      <ItemGroup title="금일 주입 내용" subTitle="(실제 넣은 값)" />
      <Item
        title={() => (
          <ItemContainer>
            <ValueItem>
              <Box color={colors?.foundation} />
              <ValueItemText>기초주입 {7.3}</ValueItemText>
            </ValueItem>
            <ValueItem>
              <Box color={colors?.meal} />
              <ValueItemText>식사주입 {15.0}</ValueItemText>
            </ValueItem>
            <ValueItem>
              <Box color={colors?.add} />
              <ValueItemText>추가주입 {5.0}</ValueItemText>
            </ValueItem>
          </ItemContainer>
        )}
      />

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
const ValueItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Box = styled.Text<{color: string}>`
  width: 14px;
  height: 14px;
  background-color: ${x => x?.color};
  margin-right: 4px;
`;
const ValueItemText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
`;
