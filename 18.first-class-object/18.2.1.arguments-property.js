// 함수가 가지는 property 확인
function square(number) {
    return number * number;
}
console.dir(square);


// 1. arguments 프로퍼티

// 함수 호출 시 전달된 인수들의 정보를 담고 있는 iterable 유사 배열 객체이다.
// 함수 내부에서 지역변수로 사용되며 함수 외부에서는 사용할 수 없다.

// Function.arguments 로 접근하는 방법은 권장하지 않으며
// 함수 내부에서 지역변수처럼 arguments를 참조하여 사용한다.

// 자바스크립트에서는 전달된 인수의 개수가 맞는지 확인하지 않으므로 인수의 개수가 일치하지 않아도 오류가 발생하지 않는다.
// 함수 정의 시 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급되어
// 초기에 undefined로 초기화되고 이후 인수가 들어오면 하나씩 저장한다.

// 초과된 인수는 무시되지만 버려지는 것은 아니고 암묵적으로 arguments 객체에 저장된다.
// arguments의 callee 프로퍼티: 함수 자신을 가리킴
// arguments의 length 프로퍼티: 전달된 인수의 개수 (초과된 인수 모두 포함)

function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply(2,3));


// 선언된 매개변수와 호출될 때 전달되는 인수의 개수를 확인하지 않는 특징으로 인해
// 가변 인자 함수를 구현할 수 있게 된다.

function sum() {
    // arguments 객체는 이터러블이지만 배열이 아니므로 call() 메서드를 통해 array로 변환해줘야 한다.
    // 또는 Rest파라미터 사용.
    const array = Array.prototype.slice.call(arguments);
    const arrayRest = [...arguments];
    // reduce() 로 호출 시 들어온 인수를 모두 더한 합을 리턴한다.
    return arrayRest.reduce(function(pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(1,2,3,4,5); // 15