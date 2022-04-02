const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map();
map.set(lee, 'developer').set(kim, 'designer');

// 저장된 key값이 있는지 여부 확인할 떄 Map.prototype.has()을 사용한다.
// 있으면 true 
console.log(map.has(lee));
// 없는 키 값을 찾을 경우 false
console.log(map.has(1));