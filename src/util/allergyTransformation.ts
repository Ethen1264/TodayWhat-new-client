const allergyMap: { [key: number]: string } = {
  1: '난류',
  2: '우유',
  3: '메밀',
  4: '땅콩',
  5: '대두',
  6: '밀',
  7: '고등어',
  8: '게',
  9: '새우',
  10: '돼지고기',
  11: '복숭아',
  12: '토마토',
  13: '아황산류',
  14: '호두',
  15: '닭고기',
  16: '소고기',
  17: '오징어',
  18: '조개',
  19: '잣',
}

export const allergyTransformation = (allergyNums: number[]): string[] => {
  return allergyNums.map(
    (allergyNum) => allergyMap[allergyNum] || '알레르기가 없어요',
  )
}
