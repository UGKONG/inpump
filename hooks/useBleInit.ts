import {Platform} from 'react-native';
import BleManager from 'react-native-ble-manager';
import useAndroidPermission from './useAndroidPermission';
import useIosPermission from './useIosPermission';

const os = Platform.OS;
type Callback = () => void;

export default function useBleInit() {
  const iosPermission = useIosPermission();
  const androidPermission = useAndroidPermission();

  const start = (callback?: Callback): void => {
    BleManager.start({showAlert: false})
      .then(() => {
        if (callback) callback();
      })
      .catch(err => console.log(err));
  };

  const enableBluetooth = (callback?: Callback): void => {
    if (os === 'android') {
      BleManager.enableBluetooth()
        .then(() => start(callback))
        .catch(err => console.log('Ble를 지원하지 않습니다.', err));
    } else {
      start(callback);
    }
  };

  const init = async (callback?: Callback): Promise<void> => {
    // 권한 요청
    const permissionFn = os === 'android' ? androidPermission : iosPermission;
    const {result, error} = await permissionFn();

    if (error) return console.log(error);
    if (result) enableBluetooth(callback);
  };

  return init;
}
