import styled from 'styled-components/native';
import {Dimensions, ImageSourcePropType, StyleProp} from 'react-native';
import {ImageStyle} from 'react-native';

const {width} = Dimensions.get('screen');

type Props = {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
};

export default function Image({source, style}: Props) {
  return <Container source={source} style={style ?? {}} />;
}

const Container = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: ${width * 0.9}px;
  min-height: ${width * 0.9}px;
  max-height: ${width * 1.3}px;
  margin: 0 ${width * 0.05}px;
`;
