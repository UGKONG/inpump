import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Container from '../../layouts/Container';
import Loading from '../../layouts/Loading';

export default function HistoryScreen() {
  const isFocus = useIsFocused();
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [list, setList] = useState([]);

  const getList = (): void => {};

  useEffect(getList, [isFocus]);

  return <Container.Scroll></Container.Scroll>;
}
