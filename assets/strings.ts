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
export const description = {
  foundation: `• 24시간을 기본으로 주입시간대와 인슐린 단위수(unit) 설정
• 시간을 선택 한 후 기초단위를 설정하면 선택 한 시간에 기초단위가 저장됩니다.`,
  exercise: `운동시간을 1H~8H 설정가능
운동감량 범위를 10%~ 100% 설정가능`,
  meal: `아침식사 설정량이 10.0u를 보여줌
• 위, 아래 키값 세팅 • 설정 (O버튼 클릭)

점심식사 설정량이 15.0u를 보여줌
• 위, 아래 키값 세팅 • 설정 (O버튼 클릭)

저녁식사 설정량이 15.0u를 보여줌
• 위, 아래키로 값세팅 • 설정 (O버튼 클릭)`,
  mealPush: `아침식사 주입량이 10.0u를 보여줌
• 주입진행
점심식사 주입량이 15.0u를 보여줌
• 주입진행
저녁식사 주입량이 15.0u를 보여줌
• 주입진행`,
  outMeal: `• 회식 설정량이 1시간 실행을 보여줌
• 위, 아래키로 값세팅 설정 (O버튼 클릭)

• 회식 설정량이 8시간 실행을 보여줌
• 위, 아래키로 값세팅 설정 (O버튼 클릭)

• 회식 설정량을 1시간 설정 후 취소 설정 보여줌
• 위, 아래키로 값세팅 설정 (O버튼 클릭)`,
  addPush: `• 화면 오른쪽 위, 아래 버튼이용 추가주입
• 인슐린 양 선택`,
  remain: `• 현재 인슐린펌프에 잔량을 “210”으로 표시하고 있어 실제 주사기의 양을 확인하고 위, 아래 버튼을 이용하여 수정
• 실제 주사기 양이 “250u”을 확인하고 수정`,
  change: `• 화면오른쪽위,아래 버튼이용 추가주입 인슐린 양 선택
• 주입화면과 함께 인슐린 교체메뉴 주입 진행
• X버튼 클릭 시 멈추고 초기화면으로 이동`,
} as const;
