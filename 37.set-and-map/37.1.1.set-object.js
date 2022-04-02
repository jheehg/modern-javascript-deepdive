// 배열과 유사하지만 다음과 같은 차이점이 있음.
// 1) 중복허용 X
// 2) 인덱스 또는 순서가 의미 없음.
// => 합집합, 교집합, 차집합, 여집합 생각하면 쉬움.

// new 연산자로 이터러블 객체를 파라미터로 받는다. 중복은 생략.
const set1 = new Set('hello');
console.log(set1); // Set { 'h', 'e', 'l', 'o' }
const set2 = new Set([1,2,3,3]);
console.log(set2); // Set { 1, 2, 3 }

// 중복제거에 유용함.
const arr = [3,5,7,3,11,0,4,11,-1]; 
// 1) filter()
// indexOf()를 통해 먼저 나오는 인덱스만 찾고 만약 indexOf()에서 리턴되는 인덱스보다 큰데 중복될 경우
// 필터링을 통해 중복을 제거.
const arr1 = arr.filter((v, i, self) => self.indexOf(v) === i);

// 2) set을 이용. (Set도 이터러블 객체를 리턴함.)
const arr2 = [...new Set(arr)];
console.log(arr1, arr2);
