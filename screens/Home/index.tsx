import {useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Container from '../../layouts/Container';
import {Text} from 'react-native';
import Loading from '../../layouts/Loading';
import {useSelector} from 'react-redux';
import ConnectDevice from '../../layouts/ConnectDevice';

export default function HomeScreen({navigation}: any) {
  const isFocus = useIsFocused();
  const [isLoad, setIsLoad] = useState<boolean>(true);

  return <Container.View>{/* <ConnectDevice /> */}</Container.View>;
}
