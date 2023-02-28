import {ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

export default function ItemGroup({title, style}: Props) {
  return (
    <Container style={style ?? {}}>
      <GroupText>{title}</GroupText>
    </Container>
  );
}

const Container = styled.View`
  border-top-width: 1px;
  border-top-color: #ddd;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding: 5px 10px;
  background-color: #eee;
  margin-top: 30px;
`;
const GroupText = styled.Text`
  color: #777777;
  font-size: 13px;
`;
