const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map();
map.set(lee, 'developer').set(kim, 'designer');

// 저장된 key값 확인할떄는 Map.prototype.get()을 사용한다.
console.log(map.get(lee));
// 없는 키 값을 찾을 경우 undefined 반환.
console.log(map.get(1));