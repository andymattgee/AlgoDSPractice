//recreate map method using recursion, function will take an array and callback function, return out mapped array
//input: array, callback
//output: array

//recursively work through array elements passing each element into callback and storing that in a cache
//could manipulate array using splice
const map = (array,callback, result = [],counter = 0) => {
    if(counter === array.length) return result;
    result.push(callback(array[counter]));
    return map(array,callback,result,++counter);
}
const addTwo = (value) => value + 2;
console.log(map([1,2,3],addTwo));