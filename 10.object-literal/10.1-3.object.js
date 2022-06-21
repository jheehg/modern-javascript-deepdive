
// 자바스크립트는 객체 기반 프로그래밍 언어
// 원시값을 제외한 나머지 값 (함수, 배열, 정규 표현식 등) 은 모두 객체.

// 원시 타입의 값은 변경 불가능한 값 : immutable value
// 객체 타입의 값은 변경 가능한 값  : mutable value

// 객체 내부에서 사용되는 함수는 일반함수와 구분하기 위해 [메서드] 라고 부른다.


// 자바스크립트는 프로토타입 기반 객체지향 언어로써 다양한 객체 생성 방법을 지원한다.
// 1. 객체 리터럴
// 2. Object 생성자 함수
// 3. 생성자 함수
// 4. Object.create 메서드
// 5. 클래스(ES6)

// Property

// Property값으로는 여러값을 사용할 수 있지만 일반적으로 문자열을 사용한다.
// 식별자 네이밍 규칙을 따르는 프로퍼티명일 경우 ""또는 ''를 생략해서 사용할 수 있다.
// 반대로 식별자 네이밍 규칙을 따르지 않는 프로퍼티명을 사용할 경우는 반드시 "" 또는 ''로 감싸야 한다.
// 숫자 또한 프로퍼티명으로 사용이 가능하지만 내부적으로 문자열로 변환된다.

// ==> 식별가능한 네이밍 규칙을 따르는 문자열 프로퍼티명 사용을 권장한다.

// [ ] 대괄호 프로퍼티명 접근 시 "" 또는 ''를 사용해야 한다.
// "" 또는 ''로 감싸지 않는다면 식별자로 인식하기 때문이다.

let person = {
    age: 22,
    'last-name': "Lee"
}

console.log(person.age);
console.log(person['age']);

console.log(person['last-name']);