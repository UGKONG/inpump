export const colors = {
  main: '#227D86',
  disableMain: '#669194',
  success: '#126a03',
  warn: '#ff8800',
  error: '#ee4444',
  bluetooth: '#4444ee',
  disable: '#888888',
} as const;

export const hours = new Array(25)
  .fill(0)
  .map((_n, i) => ({text: String(i), value: i}));
export const minutes = new Array(61)
  .fill(0)
  .map((_n, i) => ({text: String(i), value: i}));
export const values = new Array(301)
  .fill(0)
  .map((_n, i) => ({text: String(i), value: i}));
export const milliNumbers = [
  {text: '.0', value: 0.0},
  {text: '.5', value: 0.5},
];

export const description = {
  foundation: `기초설정은 24시간을 기본으로 인슐린 단위수(unit)와 시간을 설정하면 설정된 시간에 저장된 인슐린 단위수(unit)만큼 나눠서 주입합니다.`,
  exercise: `운동적용은 운동 할 시간과 감량을 설정한 후 설정한 시간만큼 기초설정의 설정 값을 감량하여 주입합니다.`,
  meal: `식사설정은 식사주입 때 필요한 인슐린 단위수(unit)를 미리 설정합니다.`,
  mealPush: `식사주입은 식사설정에서 설정한 인슐린 단위수(unit)만큼 주입합니다.`,
  outMeal: `회식적용은 주입시간대를 설정하여 현재 시간때에 맞춰 식사설정의 설정 값으로 나눠서 주입합니다.`,
  addPush: `추가주입은 인슐린이 부족하다고 느낄 때 추가적으로 인슐린 단위수(unit)를 설정하여 주입합니다.`,
} as const;
