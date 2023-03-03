import styled from 'styled-components/native';
import {colors} from '../assets/strings';

type Props = {
  title: string;
  description?: string;
  close?: () => void;
};

export default function ModalTitle({title, description, close}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      {close ? (
        <CloseBtn onPress={close}>
          <CloseText>닫기</CloseText>
        </CloseBtn>
      ) : description ? (
        <Description>{description}</Description>
      ) : null}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
`;
const Title = styled.Text`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 0 10px;
`;
const Description = styled.Text`
  padding: 0 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.error};
`;
const CloseBtn = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  padding: 10px 13px;
`;
const CloseText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.disable};
`;
