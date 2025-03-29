//using hashmap to find two sum and return values (not indices)
function twoSumValues(nums, target) {
    const seen = new Set();
  
    for (let num of nums) {
      const complement = target - num;
  
      if (seen.has(complement)) {
        return [complement, num]; //  Return the values
      }
  
      seen.add(num);
    }
  
    return null; // No match found
  }

//using hashmap to find two sum and return indices
  function twoSumIndices(nums, target) {
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (map.has(complement)) {
        return [map.get(complement), i]; // 🎯 Return indices
      }
  
      map.set(nums[i], i);
    }
  
    return null; // No match found
  }

  //using two pointers to find two sum with given ordered list (values returned are indices)
  function twoSum(arr, target){
    let left = 0, right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target) return [left,right];
        sum < target? left ++ : right--;
    }
    return "pair not found";
}