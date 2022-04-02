/*
Map은 key, value 쌍으로 이루어진 컬렉션. 객체와 비슷하지만 차이점이 있음.

1) key로 객체를 포함한 모든 값 사용 가능. 객체는 문자열 또는 심벌 값만 가능하다.
2) 객체와는 다르게 이터러블.
3) 요소 갯수 확인: map.size

*/

// 빈 map객체 생성 가능
const map = new Map();
console.log(map);

// key, value 쌍의 컬렉션이므로 2차원 배열 리터럴로 입력해야 한다.
const map2 = new Map([[1,2]]);
console.log(map2);

// 중복된 키 허용하지 않으므로 가장 나중에 들어온 중복키에 매칭된 value값으로 덮어쓴다.
const map3 = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map3);



