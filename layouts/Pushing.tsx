import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import pushing0 from '../assets/pushing-0.png';
import pushing33 from '../assets/pushing-33.png';
import pushing66 from '../assets/pushing-66.png';
import pushing100 from '../assets/pushing-100.png';
import {colors} from '../assets/strings';

const imageMatch = {
  0: pushing100,
  1: pushing66,
  2: pushing33,
  3: pushing0,
} as const;
const dotMatch = {
  0: '.',
  1: '..',
  2: '...',
  3: '....',
} as const;
const {width, height} = Dimensions.get('screen');
const timer = 600 as const;

type Props = {onCancel?: () => void};

export default function Pushing({onCancel}: Props) {
  const [percent, setPercent] = useState<number>(0);

  const init = (): (() => void) => {
    let interval = setInterval(() => {
      setPercent(prev => (prev >= 3 ? 0 : prev + 1));
    }, timer);
    return () => clearInterval(interval);
  };

  useEffect(init, []);

  return (
    <>
      <Background>
        <Container>
          <Image source={(imageMatch as any)[percent]} />
          <Text>주입중{(dotMatch as any)[percent]}</Text>
          {onCancel ? (
            <Button onPress={onCancel}>
              <ButtonText>주 입 취 소</ButtonText>
            </Button>
          ) : null}
        </Container>
      </Background>
    </>
  );
}

const Background = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height}px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff50;
`;
const Container = styled.View`
  margin-bottom: ${height * 0.3}px;
`;
const Image = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: ${width * 0.5}px;
  height: ${width * 0.5}px;
`;
const Text = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  color: ${colors.main};
  letter-spacing: 1px;
`;
const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  background-color: ${colors.error};
  align-self: center;
  padding: 12px 18px;
  margin-top: 30px;
  border-radius: 4px;
`;
const ButtonText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
