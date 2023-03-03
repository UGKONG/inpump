import {useState} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../assets/strings';
import ButtonLoading from '../../layouts/ButtonLoading';
import Container from '../../layouts/Container';
import ModalTitle from '../../layouts/ModalTitle';
import List from './List';
import ScanningStatus from './ScanningStatus';

export default function DeviceScreen() {
  const [isScanning, setIsScanning] = useState<boolean>(false);

  return (
    <Container.View>
      <ModalTitle
        title="장치연결"
        description="서비스 이용을 위해 장치 연결이 필요합니다."
      />
      <Header>
        <Text>장치를 선택해주세요.</Text>
        {isScanning && <ScanningStatus />}
      </Header>

      <List setIsScanning={setIsScanning} />
    </Container.View>
  );
}

const Header = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  background-color: #f8f8f8;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const Text = styled.Text<{size?: number; bold?: boolean}>`
  color: ${colors.disable};
  font-size: 13px;
  font-weight: 500;
`;
