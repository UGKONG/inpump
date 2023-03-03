import {Picker as _Picker} from '@react-native-picker/picker';
import styled from 'styled-components/native';

type Props<T> = {
  unit?: string;
  value: T;
  onChange: (x: T, i: number) => void;
  list?: {text: string; value: T}[];
};

export default function Select<T>({
  unit = '',
  value,
  onChange,
  list = [],
}: Props<T>) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(val, idx) => onChange(val as T, idx)}>
      {list?.map((item, i) => (
        <Picker.Item key={i} label={item?.text + unit} value={item?.value} />
      ))}
    </Picker>
  );
}

const Picker = styled(_Picker).attrs(() => ({
  mode: 'dropdown',
  itemStyle: {fontSize: 16, letterSpacing: 1},
}))`
  flex: 1;
  width: 100%;
`;
