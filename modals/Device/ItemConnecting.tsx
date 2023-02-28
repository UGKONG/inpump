import styled from 'styled-components/native';
import ButtonLoading from '../../layouts/ButtonLoading';

export default function ItemConnecting() {
  return (
    <Container>
      <ButtonLoading color="#aaa" />
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  min-width: 79px;
  max-width: 79px;
  min-height: 79px;
  max-height: 79px;
`;
