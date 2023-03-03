import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const os = Platform.OS;

export const HeaderTitle = () => (
  <HeaderTitleContainer>인펌프</HeaderTitleContainer>
);

export const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <SettingButton onPress={() => navigation.navigate('SearchScreen' as never)}>
      <SettingIcon />
    </SettingButton>
  );
};

const HeaderTitleContainer = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: ${os === 'android' ? '0px' : '5px'};
`;
const SettingButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;
const SettingIcon = styled(Icon).attrs(() => ({
  name: 'ios-search-outline',
}))`
  font-size: 26px;
  color: #5d5d5d;
`;
