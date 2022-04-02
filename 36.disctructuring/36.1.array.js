// 배열 디스트럭처링 할당
// 대상은 이터러블이어야 하고, 할당 기준은 배열의 인덱스 순서대로 할당됨.

const arr = [1, 2, 3];
const [one, two, three] = arr;
console.log(one, two, three);

// 배열 리터럴로 값 할당
const [x, y] = [1, 2];
console.log(x, y);

// 디스트릭처링을 선언만 하거나
// const [e3, e4];
// 이터러블이 아닐 경우 모두 오류 발생
// const [e1, e2] = {};

// 할당받는 값과 변수의 갯수가 반드시 일치하지 않아도 된다. 
const [a, b] = [1];
console.log(a, b);
const [aa, bb] = [1, 2, 3];
console.log(aa, bb);
const [, val1, val2] = [3, 4, 10]; 
console.log(val1, val2);

// 값이 할당이 안될경우 기본값을 설정할 수 도 있다.
const [c, d = 3] = [1];
console.log(c, d);

// rest 문법 적용. rest는 배열로 리턴.
const [first, ...rest] = [1,2,3,4,5];
console.log(first, rest);
