// 클래스가 상속하는 건 같은 클래스 뿐 아니라 [[Construct]] 내무 메서드를 갖는 함수 객체로 평가되는 모든 표현식 사용 가능.
// 즉, 표준 빌트인 객체인 String, Array, Number등 사용가능.

class MyArray extends Array {
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }
    
    average() {
        return this.reduce((acc, curr) => acc + curr, 0) / this.length;
    }
}

const myArray = new MyArray(1,1,2,3);
console.log(myArray.uniq());
console.log(myArray.average());

// 여기서 반환되는 타입은 Array가 아니라 MyArray이다.
// 그래서 아래와 같이 메서드 체이닝도 가능하다.

console.log(myArray.filter(n => n % 2).uniq().average());

// 만약 리턴 타입을 Array로 하고 싶다면
// 아래와 같이 추가.

class MyArrayTwo extends Array {
    // 모든 인스턴스 반환 타입을 Array로 강제한다.
    static get [Symbol.species]() { return Array; }

    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }
    
    average() {
        return this.reduce((acc, curr) => acc + curr, 0) / this.length;
    }
}
const myArrayTwo = new MyArrayTwo(1,1,2,3);

console.log(myArray.uniq() instanceof Array); // true
console.log(myArray.average() instanceof MyArrayTwo); // false