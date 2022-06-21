// 2. caller 프로퍼티

// caller 프로퍼티는 함수 자신을 호출한 함수를 가리킨다.
// ECMAScript 에 포함되지 않은 비표준 프로퍼티
// **사용을 권장하지 않음. 내용만 알아두기

function foo(func) {
    return func();
}

function bar() {
    return 'caller: '+bar.caller;
}

console.log(foo(bar));
console.log(bar());

// foo(bar) 을 호출할 경우 foo함수가 리턴이 된다.
// foo함수 안에서 bar를 호출하고 bar내부에서 bar함수의 caller를 참조했으므로
// foo함수가 리턴된다.



