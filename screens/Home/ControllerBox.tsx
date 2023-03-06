import {Dispatch, SetStateAction, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from '../../layouts/Modal';
import AddPushSettingScreen from '../AddPushSetting';
import OutMealSettingScreen from '../OutMealSetting';
import ExerciseSettingScreen from '../ExerciseSetting';
import ModalTitle from '../../layouts/ModalTitle';
import {colors} from '../../assets/strings';
import MealPushSettingScreen from '../MealPushSetting';

type Props = {
  isYes: boolean;
  setIsYes: Dispatch<SetStateAction<boolean>>;
};

export type StopText = {
  color: string;
  text: string;
  iconName: string;
};

export default function ControllerBox({isYes, setIsYes}: Props) {
  const [isMealModal, setIsMealModal] = useState<boolean>(false);
  const [isAddModal, setIsAddModal] = useState<boolean>(false);
  const [isOutMealModal, setIsOutMealModal] = useState<boolean>(false);
  const [isExerciseModal, setIsExerciseModal] = useState<boolean>(false);

  const startOrStop = (): void => {
    if (isYes) return setIsYes(false);

    Alert.alert(
      '작동 시작',
      '장치의 작동을 시작 하시겠습니까?',
      [
        {text: '예', onPress: () => setIsYes(true)},
        {text: '아니요', style: 'destructive'},
      ],
      {cancelable: true},
    );
  };

  const stopText = useMemo<StopText>(() => {
    let color = isYes ? colors.error : colors.main;
    let text = isYes ? ' 일시 정지' : ' 작동 시작';
    let iconName = isYes ? 'stop-circle-outline' : 'play-circle-outline';
    return {color, text, iconName};
  }, [isYes]);

  return (
    <>
      <Container>
        <Button border={true} onPress={() => setIsMealModal(true)}>
          <Icon name="alarm-outline" />
          <ButtonText>식사 주입</ButtonText>
        </Button>
        <Button border={true} onPress={() => setIsAddModal(true)}>
          <Icon name="color-fill-outline" />
          <ButtonText>추가 주입</ButtonText>
        </Button>
        <Button border={true} onPress={() => setIsOutMealModal(true)}>
          <Icon name="cafe-outline" />
          <ButtonText>회식 적용</ButtonText>
        </Button>
        <Button border={true} onPress={() => setIsExerciseModal(true)}>
          <Icon name="bicycle-outline" />
          <ButtonText>운동 적용</ButtonText>
        </Button>
        <Button height={50} border={false} onPress={startOrStop}>
          <ButtonText color={stopText?.color} size={16}>
            <Icon name={stopText?.iconName} style={{fontSize: 16}} />
            {stopText?.text}
          </ButtonText>
        </Button>
      </Container>

      {/* 모달 */}
      <>
        <Modal visible={isMealModal}>
          <ModalTitle title="식사 주입" close={() => setIsMealModal(false)} />
          <MealPushSettingScreen isModal close={() => setIsMealModal(false)} />
        </Modal>
        <Modal visible={isAddModal}>
          <ModalTitle title="추가 주입" close={() => setIsAddModal(false)} />
          <AddPushSettingScreen isModal close={() => setIsAddModal(false)} />
        </Modal>
        <Modal visible={isOutMealModal}>
          <ModalTitle
            title="회식 적용"
            close={() => setIsOutMealModal(false)}
          />
          <OutMealSettingScreen
            isModal
            close={() => setIsOutMealModal(false)}
          />
        </Modal>
        <Modal visible={isExerciseModal}>
          <ModalTitle
            title="운동 적용"
            close={() => setIsExerciseModal(false)}
          />
          <ExerciseSettingScreen
            isModal
            close={() => setIsExerciseModal(false)}
          />
        </Modal>
      </>
    </>
  );
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))<{height?: number; border?: boolean}>`
  flex: 1;
  align-items: center;
  justify-content: center;
  min-width: 25%;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  border-right-width: 1px;
  border-right-color: #eee;
  height: ${x => x?.height ?? 80}px;
  padding-top: 4px;
  ${x => x?.border && 'border-top-width: 3px; border-top-color: ' + colors.main}
`;
const ButtonText = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{color?: string; size?: number}>`
  color: ${x => x?.color || '#343434'};
  font-size: ${x => x?.size ?? 13}px;
  font-weight: 700;
  margin-bottom: 1px;
`;
const Icon = styled(Ionicons)`
  font-size: 26px;
  margin-bottom: 5px;
`;
