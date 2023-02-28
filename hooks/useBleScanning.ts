import {Dispatch, SetStateAction} from 'react';
import type {Peripheral} from 'react-native-ble-manager';

type Device = {id: string; name: string};

export default function useBleScanning() {
  const scanning = (
    {id, name}: Peripheral,
    setState: Dispatch<SetStateAction<Device[]>>,
  ): void => {
    if (!id || !name) return;

    setState(prev => {
      let find = prev?.find(x => x?.id === id);
      if (find) return [...prev];
      return [...prev, {id, name}];
    });
  };

  return scanning;
}
