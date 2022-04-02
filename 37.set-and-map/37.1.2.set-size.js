// Set은 배열과 다르게 size(length)를 임의로 수정할 수 없다.

const set = new Set([1,2,3]);
// Set.prototype.size는 get 접근자 프로퍼티만 있고 set 접근자 프로퍼티는 없다.
// 즉 size 변경을 못함.
console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));
// { get: [Function: get size],
//     set: undefined,   **
//     enumerable: false,
//     configurable: true }

set.size = 10;
console.log(set.size); // 3