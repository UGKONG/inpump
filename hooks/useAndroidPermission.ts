import {PermissionsAndroid} from 'react-native';

type Props = {
  success?: () => void;
  fail?: () => void;
};
type Response = {result: boolean; error: string | null | Error};

const os = 'android';
const errorMessage = '권한이 없거나 지원되지 않습니다.';

// 안드로이드 권한 요청
export default function useAndroidPermission() {
  const fn = (props?: Props): Promise<Response> => {
    let result: Response['result'];
    let error: Response['error'];

    return new Promise(success => {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      ])
        .then(res => {
          let x = res['android.permission.ACCESS_FINE_LOCATION'];
          let y = res['android.permission.BLUETOOTH_SCAN'];
          let z = res['android.permission.BLUETOOTH_CONNECT'];

          if (x === 'denied' || y === 'denied' || z === 'denied') {
            result = false;
            error = os + ' : ' + errorMessage;
            if (props?.fail) props?.fail();
            return;
          }
          if (props?.success) props?.success();
          result = true;
          error = null;
        })
        .catch(err => {
          result = false;
          error = os + ' : ' + errorMessage;
          console.log(err);
          if (props?.fail) props?.fail();
        })
        .finally(() => {
          success({result, error});
        });
    });
  };

  return fn;
}
