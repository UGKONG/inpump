// 타입
type Values<T> = {text: string; value: T}[];
type Step = 'step1' | 'step2' | 'step3';

// 색상
export const colors = {
  main: '#227D86',
  disableMain: '#669194',
  success: '#126a03',
  warn: '#ff8800',
  error: '#ee4444',
  bluetooth: '#4444ee',
  disable: '#888888',
  foundation: '#bfcbee',
  meal: '#bde3bd',
  add: '#f0e4b0',
} as const;

// Value 만들기
export const makeValues = (number: number): Values<number> => {
  let result = new Array(number + 1).fill(0).map((_n, i) => {
    return {text: String(i), value: i};
  });
  return result;
};

// 소수점 Values
export const milliValues: Values<number> = [
  {text: '.00', value: 0.0},
  {text: '.05', value: 0.05},
  {text: '.10', value: 0.1},
  {text: '.15', value: 0.15},
  {text: '.20', value: 0.2},
  {text: '.25', value: 0.25},
  {text: '.30', value: 0.3},
  {text: '.35', value: 0.35},
  {text: '.40', value: 0.4},
  {text: '.45', value: 0.45},
  {text: '.50', value: 0.5},
  {text: '.55', value: 0.55},
  {text: '.60', value: 0.6},
  {text: '.65', value: 0.65},
  {text: '.70', value: 0.7},
  {text: '.75', value: 0.75},
  {text: '.80', value: 0.8},
  {text: '.85', value: 0.85},
  {text: '.90', value: 0.9},
  {text: '.95', value: 0.95},
];

// IOS 식사설정 Values
export const stepValues: Values<Step> = [
  {text: '아침', value: 'step1'},
  {text: '점심', value: 'step2'},
  {text: '저녁', value: 'step3'},
];

// 언어 리스트
export const langList: Values<Lang> = [
  {text: '한국어 (Korea)', value: 'ko'},
  {text: 'English (U.S)', value: 'en'},
  {text: '中国话 (China)', value: 'ch'},
  {text: '日本語 (Japan)', value: 'jp'},
];

// 나라 별 추가주입 MAX 값
export const addValueOfLang: {[key in Lang]: number} = {
  ko: 30,
  en: 30,
  ch: 50,
  jp: 30,
} as const;

// 설정 화면 설명
export const description = {
  foundation: `기초설정은 24시간을 기본으로 2가지 방법으로 설정가능
- 전체 24시간을 1시간단위로 동일양 주입 설정
- 1시간 단위로 인슐린을 필요로 하는 시간대만 주입 설정`,

  exercise: `운동적용은 "운동 할 시간"과 "감량 양"을 설정한 후 설정한 시간 만큼 기초설정의 설정 값을 감량하여 주입

- 운동시간을 1시간~8시간까지 설정가능                         
- 설정된 시간마다 운동감량양을 10%~100%까지 설정, 해제가능`,

  meal: `식사설정은 식사주입 때 필요한 인슐린 단위수(unit)를 미리 설정`,

  mealPush: `식사주입은 식사설정에서 설정한 인슐린 단위수(unit) 만큼 주입
- 식사주입 1회 주입완료 후 "2시간, 3시간" 주기로 제한하여 주입가능 (과다주입, 저혈당 쇼크 방지 )
- 식사설정에 설정된 단위수를 식사주입 메뉴로 이동, 수정하여 가감된 단위수를 주입할 수 있음`,

  outMeal: `- 회식적용은 식사설정에 예약된 단위수를 비교적 적절한 회식시간을 추정하여 나누어 주입하는 기능
- 회식시간을 1시간~8시간까지 설정, 회식시간 중 인슐린 양과 횟수를 실행, 해제가능`,

  addPush: `- 추가주입은 인슐린이 부족하다고 느낄 때 추가적으로 인슐린 단위수(unit)를 설정하여 주입
- 1회 30Unit이상 연속주입가능, 1일 전체50Unit이상 주입가능
(필요시 1일 주입제한 단위수內에서 계속주입 가능)`,
} as const;

// 에러 메시지
export const errorMessage = {} as const;
