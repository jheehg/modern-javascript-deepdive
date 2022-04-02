const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const jung = { name: 'Jung' };

const map = new Map();
map.set(lee, 'developer').set(kim, 'designer').set(jung, 'marketer');

// 저장된 key값을 삭제할 경우 떄 Map.prototype.delete()을 사용한다.
// 성공적으로 삭제 시, true 
console.log(map.delete(lee));
// 없는 키 값을 삭제할 경우 false
console.log(map.delete(1));

// 키값 삭제된 거 확인.
console.log(map);

// 저장된 키값 모두 일괄 삭제. 항상 undefined 반환.
map.clear();
// 키값 삭제된 거 확인.
console.log(map);
