import {useMemo} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../assets/strings';

type Props = {
  title: string;
  date?: string;
  style?: StyleProp<ViewStyle>;
  fontStyle?: StyleProp<TextStyle>;
  nonePress?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
};

export default function Item({
  title,
  date,
  style,
  fontStyle,
  nonePress = false,
  onPress = () => {},
  onLongPress = () => {},
}: Props) {
  const isBig = useMemo<boolean>(() => {
    return date ? true : false;
  }, [date]);

  return (
    <Container
      isBig={isBig}
      style={style ?? {}}
      underlayColor={nonePress ? '#fff' : '#f5f5f5'}
      onPress={nonePress ? undefined : onPress}
      onLongPress={nonePress ? undefined : onLongPress}>
      <Wrap>
        <Text isBig={isBig} style={fontStyle ?? {}}>
          {title}
        </Text>
        {date ? <Date>{date}</Date> : null}
      </Wrap>
    </Container>
  );
}

const Container = styled.TouchableHighlight<{isBig: boolean}>`
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  padding: 0 10px;
  min-height: ${x => (x?.isBig ? 55 : 50)}px;
`;
const Wrap = styled.View`
  flex: 1;
`;
const Text = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{isBig: boolean}>`
  font-size: 15px;
  color: #343434;
  width: 100%;
  line-height: ${x => (x?.isBig ? 40 : 50)}px;
  min-height: ${x => (x?.isBig ? 35 : 50)}px;
`;
const Date = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  flex: 1;
  font-size: 10px;
  color: ${colors.disable};
  text-align: right;
  margin-bottom: 4px;
`;
