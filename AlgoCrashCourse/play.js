//before the day, make sure you can solve the following with pointer methods: reverse string,valid palindrome, Two sum (ordered/unordered list);

//reverse string using two pointer method
//two pointer method to reverse in place
//strings are immutable, need to split into array, switch in place, then rejoin the array to create string
function reverseString(string){
    //split string into array
    strArr = string.split('');
   //init pointers
   let left = 0, right = strArr.length - 1
   //create loop, conditional of left being less than right and inc left and dec right until left > right
   while(left < right){
        //destrcuturing syntax to switch strings in place
        [strArr[left],strArr[right]] = [strArr[right],strArr[left]];
        left++;
        right--;
   }
   return strArr.join('');
}

// console.log(reverseString('hello'))
// console.log(reverseString('hello there'))
// console.log(reverseString('tacocat'))

//use two pointer method to check if valid pelindrome
//
function validPalindrome(string){
    let left = 0, right = string.length - 1;
    while(left < right){
        if(string[left] !== string[right]) return false;
        left++;
        right--;
    }
    return true;
}
// console.log(validPalindrome('hello'));
// console.log(validPalindrome('radar'));
// console.log(validPalindrome('abcd i dcba'));

//two sum with two pointers when given ordered list, return indices
//init pointers, while loop and checking if sum of pointers is target, return index values
//if not, if sum greater than target, dec right pointer to decrease overall value
//else conditional will inc left
//if exit loop, return pair not found

function twoSum(arr, target){
    let left = 0, right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target) return [left,right];
        sum < target? left ++ : right--;
    }
    return "pair not found";
}
// console.log(twoSum([1,5,9,15,25,89],98));
//two sum with hashmap when given unordered list
//USE MAP
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.

//init new map obj
//looking to add the complement (target - current value)into the map as we iterate through array, 
// at each value, will find if complement exists in the map, if so, return current value/index plus value/index from map with .get method
//if not, add new complement with current value to map
function twoSumHash(arr,target){
    const map = new Map();
    for( let i = 0; i < arr.length; i++){
        let complement = target - arr[i];
        if(map.has(complement)){
            return [map.get(complement),i];
        } else{
            map.set(arr[i],i)
        }
    }
    return 'no pair was found';
}

// console.log(twoSumHash([89,50,71,5,105,17,8],79));
// console.log(twoSumHash([12,26,9,5,11,15],14));

//two sum with hash map, return number values instead of indices
//use a set instead? same concept, find complement and store in set 
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
function twoSumHashValues(list,target){
    const seen = new Set();
    for( let number of list){
        let complement = target - number;
        if(seen.has(complement)) return [complement, number];
        seen.add(number);
    }
    return "pair does not exist in this list";
    
// same concept but using map instead of set
//     const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [complement, nums[i]];
//     }
//     map.set(nums[i], i);
//   }
//   return null;
}

console.log(twoSumHashValues([5,8,1,4,90,65,31],39));