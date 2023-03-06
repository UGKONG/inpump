import {useEffect, useMemo} from 'react';
import {
  Platform,
  StatusBar,
  StatusBarStyle,
  AppState,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import Navigation from './layouts/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import Modal from './layouts/Modal';
import DeviceScreen from './modals/Device';
import PinScreen from './modals/Pin';
import useBleInit from './hooks/useBleInit';
import useBleResponse from './hooks/useBleResponse';
import useBleConnect from './hooks/useBleConnect';
import useStorage from './hooks/useStorage';

const os = Platform.OS;
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default function App(): JSX.Element {
  const storage = useStorage();
  const dispatch = useDispatch();
  const bleInit = useBleInit();
  const bleConnect = useBleConnect();
  const bleResponse = useBleResponse();
  const isPin = useSelector((x: Store) => x?.isPin);
  const device = useSelector((x: Store) => x?.device);

  const barStyle = useMemo<StatusBarStyle>(() => {
    return os === 'ios' ? 'dark-content' : 'light-content';
  }, [os]);

  const isModal = useMemo<{pin: boolean; device: boolean}>(() => {
    if (!isPin) return {pin: true, device: false};
    if (!device) return {pin: false, device: true};
    return {pin: false, device: false};
  }, [isPin, device]);

  const statusChange = (): (() => void) => {
    const status = AppState.addEventListener('change', state => {
      if (state !== 'active') return;
      dispatch({type: 'isPin', payload: false});
    });

    return () => status.remove();
  };

  const autoDeviceConnect = async (): Promise<void> => {
    let {error: getError, result} = await storage.getItem('device', 'json');
    if (getError || !result) {
      storage.removeItem('device');
      return;
    }

    let {error: connectError} = await bleConnect(result?.id);
    if (connectError) return;

    dispatch({type: 'device', payload: result});
  };

  const init = (): (() => void) => {
    // storage.removeItem('device'); // DEV

    console.log(os, ': App Reloaded.');
    setTimeout(() => SplashScreen.hide(), 1000);

    statusChange();
    bleInit(() => autoDeviceConnect());

    // 응답
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      bleResponse,
    );

    return () => {
      bleManagerEmitter.removeAllListeners(
        'BleManagerDidUpdateValueForCharacteristic',
      );
    };
  };

  useEffect(init, []);

  return (
    <>
      {/* 상단바 */}
      <StatusBar barStyle={barStyle} />

      {/* 화면 리스트 */}
      <Navigation />

      {/* 잠금 모달 */}
      <Modal visible={isModal.pin} style="overFullScreen">
        <PinScreen />
      </Modal>

      {/* 장치 연결 모달 */}
      <Modal visible={isModal.device} style="overFullScreen">
        <DeviceScreen />
      </Modal>
    </>
  );
}
