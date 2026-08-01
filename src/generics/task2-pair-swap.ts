interface Pair<T,U>{
    first:T;
    second:U;
}

function swap<T,U>(pair:Pair<T,U>):Pair<U,T>{
    return {
        first:pair.second,
        second:pair.first
    };
}

const pair = {
    first: "hello",
    second: 42,
}

const swappedPair = swap(pair);

console.log(swappedPair);