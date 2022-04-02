// Map요소 순회
// Array.prototype.forEach()와 다른점은 인덱스 파라미터 사용을 못함.
// 대신 Map에 추가된 순서로 요소 순회를 한다.

// Map.prototype.forEach()
// 파라미터로는 forEach(value, key, 현재 순회중인 Map객체)를 사용할 수 있고,


const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const jung = { name: 'Jung' };

const map = new Map();
map.set(lee, 'developer').set(kim, 'designer').set(jung, 'marketer');

map.forEach((v, k, self) => console.log(v, k, self));


console.log('----------------------------------------------');
// Map객체는 이터러블.
// Map.prototype의 메서드인 Symbol.iterator를 상속받는다.
console.log(Symbol.iterator in new Map()); // true


// for .. of 로 순회
for(const entry of map) {
    console.log(entry);
}
console.log('----------------------------------------------');
// 이터러블이기때문에 배열리터럴로 배열화 시킬 수 있다.
const arr = [...map];
console.log(arr instanceof Array, arr);

// 디스트럭처링 사용
const [a, ...rest] = map;
console.log(a);
console.log(rest);

console.log('----------------------------------------------');
// Map은 이터러블임과 동시에 이터러블 객체를 반환하는 메서드를 갖고 있음.
// 1) keys : 저장된 key값으로 구성된 이터러블이면서 동시에 이터레이터인 객체를 반환.
console.log(map.keys());

// 2) values() : 저장된 value값으로 구성된 이터러블이면서 동시에 이터레이터인 객체를 반환.
console.log(map.values());

// 3) entries() : 저장된 key, value값 한 쌍으로 구성된 이터러블이면서 동시에 이터레이터인 객체를 반환.
console.log(map.entries());