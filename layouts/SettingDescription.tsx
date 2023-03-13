import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  text?: string;
};

const {width} = Dimensions.get('screen');

export default function SettingDescription({text = '설명'}: Props) {
  return (
    <Container style={{width: width - 20}}>
      <Text>{text}</Text>
    </Container>
  );
}

const Container = styled.View`
  padding: 14px;
  margin: 10px;
  border-radius: 5px;
  background-color: #eee;
  border: 1px solid #dfdfdf;
`;
const Text = styled.Text`
  font-size: 12.5px;
  letter-spacing: 1px;
  color: #343434;
  line-height: 20px;
`;
