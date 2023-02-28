import AsyncStorage from '@react-native-async-storage/async-storage';

type Key = string;
type Type = 'string' | 'json';
type Success<T> = {result: T | null; error: Error | null};
type Pro<T> = Promise<Success<T>>;

export default function useStorage() {
  let fn = {
    clear: (): Pro<boolean> => {
      return new Promise(success => {
        let result: boolean;
        let error: Error | null = null;
        AsyncStorage.clear()
          .then(() => (result = true))
          .catch(err => {
            error = err;
            result = false;
          })
          .finally(() => success({result, error}));
      });
    },
    getItem: <K = any>(key: Key, type?: Type): Pro<K> => {
      return new Promise(success => {
        let result: any = null;
        let error: Error | null = null;
        AsyncStorage.getItem(key)
          .then(data => {
            if (data === null) {
              result = null;
            } else {
              result = type === 'json' ? JSON.parse(data) : data;
            }
          })
          .catch(err => (error = err))
          .finally(() => {
            result = type === 'json' ? JSON.parse(result) : result;
            success({result, error});
          });
      });
    },
    setItem: (
      key: Key,
      val: number | string | object | boolean,
    ): Pro<boolean> => {
      let type = typeof val;
      val = typeof val !== 'string' ? JSON.stringify(val) : val;
      if (type === 'number' || type === 'boolean') val = String(val);
      if (type === 'object') val = JSON.stringify(val);
      return new Promise(success => {
        let result: boolean;
        let error: Error | null = null;
        AsyncStorage.setItem(key, val as string)
          .then(() => (result = true))
          .catch(err => {
            result = false;
            error = err;
          })
          .finally(() => success({result, error}));
      });
    },
    removeItem: (key: Key): Pro<boolean> => {
      return new Promise(success => {
        let result: boolean;
        let error: Error | null = null;
        AsyncStorage.removeItem(key)
          .then(() => (result = true))
          .catch(err => {
            result = false;
            error = err;
          })
          .finally(() => success({result, error}));
      });
    },
  };

  return fn;
}
