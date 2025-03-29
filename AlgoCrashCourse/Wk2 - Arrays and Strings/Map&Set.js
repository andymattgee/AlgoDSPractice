
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
//_____________________
//map.keys() - returns map iterator object  that contains thge key for each element in map in insertion order
//map.values() - return map iterator obj that containts values for each el in map in insertion order
//map.entries() - returns map iterator obj that contains [key,value] pair array 

const array = [1,2,2,5,7,9,9,10];

const newMap = new Map();
array.forEach((el, idx) => newMap.set(idx,el));
console.log(newMap);

newMap.set(8,50);
console.log(newMap);
console.log(newMap.get(3));
console.log(newMap.has(8));

// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.


const newSet = new Set (array);
console.log(newSet);
const manualSet = new Set();
for( let el of array){
    manualSet.add(el);
}
console.log(manualSet);