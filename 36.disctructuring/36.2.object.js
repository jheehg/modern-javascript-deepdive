// 객체 디스트럭처링 할당 대상은 객체여야 하고, 할당 기준은 프로퍼티 키.
// 배열과는 다르게 순서는 의미가 없고 "변수이름"과 "프로퍼티 키"가 일치하면 할당된다.
const user = {
    firstName: 'yoyo', lastName: 'lee'
};

const {firstName, lastName} = user;
console.log(firstName, lastName);

// 할당을 객체 리터럴로.
const {fstName, lstName} = {fstName: 'jay', lstName: 'jung'};
console.log(fstName, lstName);

// 아래 두 경우 오류.
// const { err1, err2 };
// const { err3, err4 } = null;

// {fstName, lstName} 는 {fstName: fstName, lstName: lstName}의 축약이므로
// 아래와 같이 fn, ln처럼 다른 변수명을 지정하므로써 반드시 user의 프로퍼티를 변수명으로 사용하지 않아도 된다.
const { firstName: fn, lastName: ln } = user;
console.log(fn, ln);

// 기본값 설정 가능
const { firstNode: fd = 'nodeOne', lastNode: ld = 'nodeLast'} = { lastNode : 'this is last node'};
console.log(fd, ld);

// 원하는 프로퍼티만 추출 가능
const { length } = 'string';
console.log(length);


// 함수의 매개변수에도 객체 디스트럭처링 사용 가능.
function printTodo({ content, completed }) {
    console.log(`할일 ${content}은/는 ${completed? '완료':'비완료'} 상태입니다.`);
}
printTodo({content: '세탁기 돌리기', completed: '완료'});

// 배열 디스트럭쳐링과 혼합해서 사용 가능.
const list = [
    {id: 1, name: 'good enough for today'},
    {id: 2, name: 'it\'s tiime to have a rest'}
];
const [, {id}] = list;
console.log(id);

// 객체 중첩일 경우
const person = {
    name: 'kuuu',
    age: 20,
    address : { city : 'seoul'}
};
const { address: { city }} = person;
console.log(city);

// rest문법
const { x, ...rest } = { x: 1, y : 10, z : 30};
console.log(x, rest);


