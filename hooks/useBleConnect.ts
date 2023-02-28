import BleManager from 'react-native-ble-manager';

type Response = {result: boolean; error: string | null | Error};

export default function useBleConnect() {
  const fn = (id: string): Promise<Response> => {
    let result: Response['result'];
    let error: Response['error'];

    return new Promise(success => {
      BleManager.connect(id)
        .then(() => {
          BleManager.retrieveServices(id)
            .then(() => {
              result = true;
              error = null;
            })
            .catch(err => {
              result = false;
              error = err;
            });
        })
        .catch(err => {
          result = false;
          error = err;
        })
        .finally(() => {
          success({result, error});
        });
    });
  };

  return fn;
}
