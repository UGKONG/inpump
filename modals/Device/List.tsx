import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Container from '../../layouts/Container';
import {NativeModules, NativeEventEmitter} from 'react-native';
import BleManager from 'react-native-ble-manager';
import useBleScanning from '../../hooks/useBleScanning';
import NoneItem from '../../layouts/NoneItem';
import Item from './Item';
import {useDispatch} from 'react-redux';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

type Props = {
  setIsScanning: Dispatch<SetStateAction<boolean>>;
};

export default function List({setIsScanning}: Props) {
  const dispatch = useDispatch();
  const bleScanning = useBleScanning();
  const [list, setList] = useState<Device[]>([]);

  const startScan = (): void => {
    setIsScanning(true);
    BleManager.scan([], 10, false)
      .then(() => {})
      .catch(() => {});
  };

  const init = () => {
    let timeout: NodeJS.Timeout;

    // 스캔중
    bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', x =>
      bleScanning(x, setList),
    );
    // 스캔 정지
    bleManagerEmitter.addListener('BleManagerStopScan', () => {
      setIsScanning(false);
      timeout = setTimeout(() => startScan(), 1000);
    });

    startScan();
    return () => {
      clearTimeout(timeout);
      setIsScanning(false);
      bleManagerEmitter.removeAllListeners(
        'BleManagerDidUpdateValueForCharacteristic',
      );
      bleManagerEmitter.removeAllListeners('BleManagerDiscoverPeripheral');
      bleManagerEmitter.removeAllListeners('BleManagerStopScan');
    };
  };

  useEffect(init, []);

  return (
    <Container.Scroll onRefresh={startScan}>
      <>
        <Item
          key={'12345-67890'}
          data={{id: '12345-67890', name: 'Device-001'}}
          isPass={true}
        />
        {!list?.length ? (
          <NoneItem text="검색된 장치가 없습니다." />
        ) : (
          list?.map(item => <Item key={item?.id} data={item} />)
        )}
      </>
    </Container.Scroll>
  );
}
