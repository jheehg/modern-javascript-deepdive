// Map.prototype.set() 을 사용해서 요소를 추가한다.
// 첫번째 프로퍼티 => key
// 두번째 프로퍼티 => value

const map = new Map();
console.log(map);

map.set('key1', 'value1');
console.log(map);

// Set.prototype.add() 처럼 요소가 추가된 새로운 객체를 반환하므로 체이닝 가능.
map.set('key2','value2').set('key3','value3');
console.log(map);

// 체이닝의 경우에도 중복은 무시되고 마지막 중복 키로 덮어씌워진다.
map.set('key4','value4').set('key4','value5');
console.log(map);

// Set객체와 같음.
// NaN을 같은 값으로 평가해 중복으로 체크. 0, +0, -0 또한 중복으로 체크.
const map2 = new Map();
map2.set(NaN, 1)
    .set(NaN, 2)
    .set(-0, 3)
    .set(0, 5);
console.log(map2);

