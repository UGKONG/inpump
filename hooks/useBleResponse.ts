export default function useBleResponse() {
  const fn = (res: any) => {
    console.log('FROM BLE', res);
  };

  return fn;
}
