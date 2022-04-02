// 객체 자신의 프로퍼티만을 확인하려면 
// for ...in 반복문 보다는 다음과 같은 메서드 사용 권장.
// in 연산자 : 프로토타입 프로퍼티까지 확인
// for ...in 반복문 :프로토타입 프로퍼티까지 확인하나 프로퍼티 속성이 Enumerable = true인것만 확인 가능.


const person = {
    name: 'lee',
    address: 'seoul',
    __proto__ : { age: 20 }
}

console.log(Object.keys(person)); // [ 'name', 'address' ]
console.log(Object.values(person)); // [ 'lee', 'seoul' ]

// Object.entries 는 key, value를 한쌍으로 묶어 하나의 배열로 구성된 2차원 배열을 리턴한다.
console.log(Object.entries(person)); // [ [ 'name', 'lee' ], [ 'address', 'seoul' ] ]

const arr = Object.entries(person);

// arr의 요소도 배열이므로 배열 안에 요소를 따로 변수로 사용하고 싶다면 [key, value]처럼 배열 리터럴로 넣어도 된다.
arr.forEach(([key, value]) => {
   console.log(key +": "+ value);
});
