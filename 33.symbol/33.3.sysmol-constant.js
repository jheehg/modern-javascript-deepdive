// 만약 자바에서의 Enum처럼 변경 불가능한 객체로 사용하려면 Object.freeze() 를 사용해서
// 객체를 변경할 수 없도록 지정한다.

const Direction = Object.freeze({
    // 아래와 같이 무의미한 상수대신 심볼 사용.
    // UP: 1,
    // DOWN: 2,
    // LEFT: 3,
    // RIGHT: 4
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
});

const myDirection = Direction.UP;
console.log(myDirection);