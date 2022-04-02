const { size } = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size);

// Map.prototype.size는 setter 접근자 프로퍼티가 없어서 임의로 수정이 안됨.
// Set 객체와 공통점.
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));

// 아래 코드는 무시된다.
map.size = 10;
console.log(map.size);
