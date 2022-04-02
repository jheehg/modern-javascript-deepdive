// 원시값은 값에 의한 전달을 함.
// 아래 예제를 참고하기

var score = 80;
var copy = score;

score = 100;

// 여기서 copy는 score의 값을 할당 받았지만, score의 값이 그 후에 재할당 된다해도
// 처음에 할당받았던 80에서 바뀌지 않음.
// 원시값 자체로 전달되었고 이 두 변수는 각각 다른 메모리를 참조하고 있으므로 서로 영향을 주지 않는다.
console.log(score, copy);

// 값에 의한 전달에 관련한 메모리 참조는 두가지 경우를 생각할 수 있다.
// 1) score를 copy에 할당할때 같은 메모리를 참조한다.
// 2) score를 copy에 할당할때 각각 다른 메모리를 참조한다.

// 아직 공식적으로 어떤 방법으로 참조하는지는 나와있지 않지만
// 같은 메모리를 참조하고 있더라도 score가 다른 값으로 재할당되는 시점에서 다른 메모리를 참조하게 되므로
// 결국 두 변수는 다른 메모리를 참조하여 서로 간섭하지 못하게 된다.
