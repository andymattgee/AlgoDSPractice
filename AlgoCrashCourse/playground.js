//2 sum with array sorted, return index values;
//for sorted, use 2 pointer method
function twoSum(arr, target){
    let seen = {};
    for( let i = 0; i < arr.length; i++){
        console.log(arr[i])
        let value = arr[i];
        let compliment = target - value;
        console.log(seen);
        if( compliment in seen){
            return [seen[compliment], i];
        } else {
            seen[value] = i;
        }
    }
}

console.log(twoSum([1,15,5,3,9], 10));
console.log(twoSum([1,15,5,3,9], 16));
console.log(twoSum([15,9,3,5,1], 14));