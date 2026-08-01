function first<T>(arr: T[]):T | undefined {
    return arr[0];
}

const firstString = first(["a","b","c"]); // firstString is of type string | undefined
const firstNumber = first([1,2,3]); // firstNumber is of type number | undefined

console.log(firstString);
console.log(firstNumber);