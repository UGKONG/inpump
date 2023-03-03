import {useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {colors} from '../../assets/strings';
import useBleConnect from '../../hooks/useBleConnect';
import useStorage from '../../hooks/useStorage';
import ItemConnecting from './ItemConnecting';

type Props = {
  data: Device;
  isPass?: boolean;
};

export default function Item({data, isPass = false}: Props) {
  const storage = useStorage();
  const dispatch = useDispatch();
  const bleConnect = useBleConnect();
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const passFn = (): void => {
    setTimeout(() => {
      setIsConnecting(false);
      dispatch({type: 'device', payload: data});
    }, 1000);
  };

  const onPress = async (): Promise<void> => {
    setIsConnecting(true);

    if (isPass) return passFn();

    const {error} = await bleConnect(data?.id);
    setIsConnecting(false);
    if (error) return;

    storage.setItem('device', data);
    dispatch({type: 'device', payload: data});
  };

  return (
    <Container onPress={onPress}>
      <Wrap>
        <Info>
          <Name>{data?.name || '-'}</Name>
          <Id>{data?.id || '-'}</Id>
        </Info>
        {isConnecting && <ItemConnecting />}
      </Wrap>
    </Container>
  );
}

const Container = styled.TouchableHighlight.attrs<{isItemConnecting: boolean}>(
  x => ({
    underlayColor: x?.isItemConnecting ? '#ffffff' : '#f0f0f0',
  }),
)`
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  min-height: 79px;
  max-height: 79px;
`;
const Wrap = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Info = styled.View`
  padding: 15px 0 15px 15px;
  flex: 1;
`;
const Text = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))``;
const Name = styled(Text)`
  font-size: 15px;
  color: #343434;
`;
const Id = styled(Text)`
  font-size: 13px;
  color: ${colors.disable};
`;
