// Copying and Filling:
// concat(): 
// copyWithin(): 
// fill(): 

//////////////// concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combinedArray = arr1.concat(arr2, arr3);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//////////////copyWithin():
const numbers = [1, 2, 3, 4, 5];

// এরের প্রথম সদস্যটি তার পরের তিনটি সদস্যের উপর প্রতিস্থাপন করে
numbers.copyWithin(0, 1, 4);

console.log(numbers); // [2, 3, 4, 4, 5]
//////////////// fill(): 
// const numbers = [1, 2, 3, 4, 5];

// এই মেথড ব্যবহার করে 2 থেকে 4 স্থানের সদস্যের মধ্যে মৌলিক মান 0 প্রতিস্থাপন করে
numbers.fill(0, 2, 4);

console.log(numbers); // [1, 2, 0, 0, 5]

