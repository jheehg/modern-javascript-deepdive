// 교집합 구현
Set.prototype.intersection = function(set) {
    const result = new Set();
    // 파라미터로 들어온 Set과 this에 바인딩된 Set의 value가 중복된 것만 add
    for(const value of set) {
        if(this.has(value)) result.add(value);
    }
    return result;
};

const setA = new Set([1,2,3,5,7]);
const setB = new Set([1,3,7,4]);
console.log(setA.intersection(setB));

// 또는 filter를 사용하는 방법.
Set.prototype._intersection = function(set) {
    return new Set([...this].filter(v => set.has(v)));
}
console.log(setA._intersection(setB));


// 합집합 구현
Set.prototype.union = function(set) {
    // this에 바인딩된 Set객체를 result로 카피한다.
    const result = new Set(this);

    for(const value of set) {
        // 들어온 set 파라미터의 요소를 add한다. (중복은 알아서 제거)
        result.add(value);
    }
    return result;
};

// 또는 spread 사용하는 방법.
Set.prototype._union = function(set) {
    return new Set([...this, ...set]);
};

console.log(setA.union(setB));
console.log(setA._union(setB));


// 차집합 구현
Set.prototype.difference = function(set) {
    const result = new Set(this);
    // 파라미터로 들어온 Set과 this에 바인딩된 Set의 value가 중복된 것만 add
    for(const value of set) {
        result.delete(value);
    }
    return result;
};
console.log(setA.difference(setB));
console.log(setB.difference(setA));

// 또는 filter를 사용하는 방법. 
Set.prototype._difference = function(set) {
   
    return new Set([...this].filter(v => !set.has(v)));
};

console.log(setA._difference(setB));
console.log(setB._difference(setA));


// 부분 집합과 상위 집합
Set.prototype.isSuperSet = function(set) {
    for(const value of set) {
        if(!this.has(value)) return false;
    }
    return true;
};

const setC = new Set([1,2,3,4,5]);
const setD = new Set([1,2,5]);
console.log(setC.isSuperSet(setD));


Set.prototype._isSuperSet = function(subSet) {
    return [...subSet].every(v => [...this].includes(v));
};
console.log(setC._isSuperSet(setD));
