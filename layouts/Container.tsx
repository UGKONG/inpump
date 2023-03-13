import {useState} from 'react';
import styled from 'styled-components/native';
import {
  RefreshControl,
  ScrollView,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native';

type ScrollProps = {
  onRefresh?: () => void;
  childRef?: React.Ref<ScrollView>;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[] | null;
};
type ViewProps = {
  childRef?: React.Ref<SafeAreaView>;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[] | null;
};

const Scroll = (props: ScrollProps): JSX.Element => {
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const fn = () => {
    setIsRefresh(true);
    setTimeout(() => setIsRefresh(false), 1000);
    if (props?.onRefresh) props?.onRefresh();
  };

  return (
    <ScrollContainer
      ref={props?.childRef}
      style={props?.style ?? {}}
      scrollEventThrottle={1}
      refreshControl={
        props?.onRefresh ? (
          <RefreshControl refreshing={isRefresh} onRefresh={fn} />
        ) : undefined
      }
      {...props}>
      {props?.children ?? null}
    </ScrollContainer>
  );
};

const View = (props: ViewProps): JSX.Element => {
  return (
    <ViewContainer ref={props?.childRef} style={props?.style ?? {}} {...props}>
      {props?.children ?? null}
    </ViewContainer>
  );
};

const ScrollContainer = styled.ScrollView`
  position: relative;
  width: 100%;
  flex: 1;
  background-color: #fff;
  padding-bottom: 100px;
`;
const ViewContainer = styled.SafeAreaView`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;
`;
export default {Scroll, View};
