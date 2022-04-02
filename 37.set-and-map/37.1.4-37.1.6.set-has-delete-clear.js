// 요소 확인
const set1 = new Set([1,2,3]);
console.log(set1.has(1));

// 요소 삭제
console.log(set1.delete(3)); // 삭제 성공 시 true 반환.
console.log(set1.has(3));

console.log(set1.delete(-1)); // 없는 요소를 삭제할때는 false 반환.

// 요소 일괄 삭제
set1.clear(); // undefined 반환
console.log(set1);
