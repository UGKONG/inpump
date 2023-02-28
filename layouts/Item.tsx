import {ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
};

export default function Item({
  title,
  style,
  onPress = () => {},
  onLongPress = () => {},
}: Props) {
  return (
    <Container style={style ?? {}} onPress={onPress} onLongPress={onLongPress}>
      <Text>{title}</Text>
    </Container>
  );
}

const Container = styled.TouchableHighlight.attrs(() => ({
  underlayColor: '#f5f5f5',
}))`
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding: 0 10px;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
`;
const Text = styled.Text`
  flex: 1;
  font-size: 15px;
  color: #343434;
`;
