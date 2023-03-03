import styled from 'styled-components/native';
import {colors} from '../../assets/strings';
import ButtonLoading from '../../layouts/ButtonLoading';

export default function ScanningStatus() {
  return (
    <TextWrap>
      <ButtonLoading color="#666" />
      <Text>검 색 중</Text>
    </TextWrap>
  );
}

const TextWrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1px;
`;
const Text = styled.Text<{size?: number; bold?: boolean}>`
  color: ${colors.disable};
  font-size: 14px;
  font-weight: 700;
  margin-left: 5px;
`;
