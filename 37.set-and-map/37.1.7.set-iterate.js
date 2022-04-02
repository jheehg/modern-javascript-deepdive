// Set요소 순회
// 배열과 다른점은 인덱스 파라미터 사용을 못함. (* Set은 인덱스 개념은 없지만 추가된 순서로 순회를 한다.)

// Set.prototype.forEach()
// 파라미터로는 forEach(값1, 값2, 현재 순회중인 Set객체)를 사용할 수 있고,
// 값1, 값2는 돋일한 값으로 Array.prototype.forEach와 인터페이스를 맞추기 위해 넣은 값이다.
// (별 의미 없다고 보면 됨)

const set = new Set([1,2,3]);
set.forEach((v, v2, set) => console.log(v, v2, set));

// Set객체는 이터러블.
// Set.prototype의 메서드인 Symbol.iterator를 상속받는다.
console.log(Symbol.iterator in new Set()); // true

// for .. of 로 순회
for(const value of set) {
    console.log(value);
}

// 이터러블이기때문에 배열리터럴로 배열화 시킬 수 있다.
const arr = [...set];
console.log(arr instanceof Array, arr);

// 디스트럭처링 사용
const [a, ...rest] = set;
console.log(a, rest);
// a = 1, rest = [2, 3]

