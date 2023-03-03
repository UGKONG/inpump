import {useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../assets/strings';
import ItemGroup from '../../layouts/ItemGroup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Loading from '../../layouts/Loading';

export default function StatusInfo() {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  return (
    <Container>
      <ItemGroup
        titleIcon={() => (
          <Icon1 name="alert-circle-outline" color={colors.main} />
        )}
        title="현재상태"
        style={{marginTop: 0}}
      />
      <View>
        <Text color={colors.disable}>주입 가능</Text>
      </View>
      <View>
        <Text color={colors.disable}>배터리 부족</Text>
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
  padding-bottom: 10px;
`;
const View = styled.View`
  height: 40px;
  justify-content: center;
  padding: 0 10px 2px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const Text = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{color: string}>`
  font-size: 13px;
  color: ${x => x?.color ?? colors.disable};
`;
const iconStyle = `
  font-size: 14px;
  margin: 0 2px;
`;
const Icon1 = styled(Ionicons)`
  ${iconStyle}
`;
const Icon2 = styled(FontAwesome5Icon)`
  ${iconStyle}
`;
