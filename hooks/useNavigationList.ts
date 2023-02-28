import {useMemo} from 'react';
import HomeStack from '../stacks/Home';
import HistoryStack from '../stacks/History';
import SettingStack from '../stacks/Setting';
import InfoStack from '../stacks/Info';

type Memo = {
  id: number;
  name: string;
  title: string;
  icon: {default: string; focus: string; size: number};
  component: (props: any) => JSX.Element;
};

const icons = {
  home: ['home-outline', 'home'],
  history: ['calendar-outline', 'calendar-sharp'],
  setting: ['settings-outline', 'settings-sharp'],
  info: ['information-circle-outline', 'information-circle-sharp'],
};

export default function useNavigationList() {
  const memo = useMemo<Memo[]>(
    () => [
      {
        id: 1,
        name: 'Home',
        title: '홈',
        icon: {default: icons.home[0], focus: icons.home[1], size: 24},
        component: HomeStack,
      },
      {
        id: 2,
        name: 'History',
        title: '히스토리',
        icon: {default: icons.history[0], focus: icons.history[1], size: 24},
        component: HistoryStack,
      },
      {
        id: 3,
        name: 'Setting',
        title: '설정',
        icon: {default: icons.setting[0], focus: icons.setting[1], size: 24},
        component: SettingStack,
      },
      {
        id: 4,
        name: 'Info',
        title: '정보',
        icon: {default: icons.info[0], focus: icons.info[1], size: 28},
        component: InfoStack,
      },
    ],
    [],
  );

  return memo;
}
