import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  min-height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const Column = styled.View`
  flex-direction: row;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;
const Buttons = styled.View`
  flex-direction: row;
  padding: 5px;
  margin-top: 10px;
`;

export default {
  Row,
  Column,
  Buttons,
};
