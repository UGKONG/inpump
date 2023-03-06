import {PERMISSIONS, requestMultiple} from 'react-native-permissions';

type Props = {
  success?: () => void;
  fail?: () => void;
};
type Response = {result: boolean; error: string | null | Error};

const os = 'ios';
const errorMessage = '권한이 없거나 지원되지 않습니다.';

// IOS 권한 요청
export default function useIosPermission() {
  const fn = (
    props?: Props,
  ): Promise<{result: boolean; error: string | null | Error}> => {
    let result: Response['result'];
    let error: Response['error'];

    return new Promise(success => {
      requestMultiple([
        PERMISSIONS.IOS.LOCATION_ALWAYS,
        PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
      ])
        .then(res => {
          let x = res['ios.permission.LOCATION_ALWAYS'];
          let y = res['ios.permission.BLUETOOTH_PERIPHERAL'];

          if (x === 'granted' && y === 'granted') {
            result = true;
            error = null;
            if (props?.success) props?.success();
            return;
          }

          result = false;
          error = os + ' : ' + errorMessage;
          if (props?.fail) props?.fail();
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
