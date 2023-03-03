import {ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../assets/strings';

type Props = {
  title: string;
  titleIcon?: () => JSX.Element;
  style?: StyleProp<ViewStyle>;
  subTitle?: string;
};

export default function ItemGroup({
  titleIcon: TitleIcon,
  title,
  subTitle,
  style,
}: Props) {
  return (
    <Container style={style ?? {}}>
      <GroupText dir="left">
        {TitleIcon ? <TitleIcon /> : null}
        <Text>
          {TitleIcon ? ' ' : ''}
          {title}
        </Text>
      </GroupText>
      <GroupText dir="right">{subTitle}</GroupText>
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const GroupText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{dir: 'left' | 'right'}>`
  color: ${colors.disable};
  font-size: 13px;
  max-width: 50%;
  text-align: ${x => x?.dir};
  flex-direction: row;
  align-items: center;
`;
const Text = styled.Text``;
