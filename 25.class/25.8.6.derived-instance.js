// 수퍼클래스 인스턴스 생성과 this 바인딩

// 수퍼클래스 생성자함수 안에서의 this, new.target 모두 ColorRectangle 을 가리킴.
// 서브클래스인 ColorRectangle의 인스턴스 생성 시, 수퍼클래스의 생성자함수를 사용하기 때문에
// this와 new.target이 Rectangle가 아닌 ColorRectangle이 된다.

class Rectangle {
    constructor(width, height) {
        console.log(this);       // ColorRectangle {} : 인스턴스 초기화 전.
        console.log(new.target); // [Function: ColorRectangle]

        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
        console.log(this instanceof ColorRectangle);
        console.log(this instanceof Rectangle);
        
        // 수퍼클래스의 인스턴스 초기화
        this.width = width;
        this.height = height;   
        console.log(this);       // ColorRectangle { width: 5, height: 10 } 수퍼클래스에 없는 필드는 안나옴.
        console.log(new.target); // [Function: ColorRectangle]

        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
        console.log(this instanceof ColorRectangle);
        console.log(this instanceof Rectangle);
    }
    
}

// 서브클래스에서의 this 바인딩
class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        // 별도로 인스턴스를 생성하지 않아도 super가 반환한 this를 바인딩해 사용!
        super(width, height);
        console.log(this); // ColorRectangle { width: 5, height: 10 }

        // 서브클래스의 인스턴스 초기화
        this.color = color;
        console.log(this); // ColorRectangle { width: 5, height: 10, color: 'white' }
    }
}

const colorRectangle = new ColorRectangle(5, 10, 'white');



