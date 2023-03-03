import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../assets/strings';
import {useMemo} from 'react';

type Props = {
  text?: string;
  type: 'submit' | 'cancel';
  readOnly?: boolean;
  onPress?: () => void;
};

export default function Button({
  text,
  type,
  onPress = () => {},
  readOnly = false,
}: Props): JSX.Element {
  const color = useMemo<string>(() => {
    if (type === 'submit') {
      if (readOnly) return colors.disableMain;
      return colors.main;
    }
    if (readOnly) return colors.disable;
    return colors.disable;
  }, [type, readOnly]);

  return (
    <Container
      readOnly={readOnly}
      text={text}
      color={color}
      onPress={readOnly ? () => {} : onPress}>
      {text ? (
        <Text>{text}</Text>
      ) : (
        <Icon name={type === 'submit' ? 'checkmark-sharp' : 'close'} />
      )}
    </Container>
  );
}

type ContainerProps = {readOnly?: boolean; color: string; text?: string};
const Container = styled.TouchableOpacity.attrs<ContainerProps>(x => ({
  activeOpacity: x?.readOnly ? 1 : 0.7,
}))<ContainerProps>`
  background-color: ${x => x?.color};
  padding: 12px;
  border-radius: 4px;
  flex: 1;
  margin: 5px;
  max-width: 700px;
  align-items: center;
  justify-content: center;
`;
const Icon = styled(Ionicons)`
  color: #fff;
  font-size: 20px;
`;
const Text = styled.Text`
  color: #fff;
  font-size: 15px;
`;
