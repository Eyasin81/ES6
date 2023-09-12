// Sorting and Reversing:
// sort(): 
// reverse():
// isArray(): 
// join(): 
// toString(): 

const fruits = ["apple", "banana", "kiwi", "cherry"];

// ডিফল্ট সর্টিং অর্ডার (অ্যালফাবেটিক্যাল)
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry", "kiwi"]

const numbers = [3, 1, 5, 2, 4];

// ডিফল্ট সর্টিং অর্ডার (সংখ্যাগুলি অ্যাসেনডিং অর্ডারে)
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5]

// কাস্টম কম্পেয়ার ফাংশন ব্যবহার
const customSort = (a, b) => {
  // স্ট্রিং গুলি কে প্রথমে অ্যালফাবেটিক অর্ডারে সাজানো
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  }
  // সংখ্যাগুলি কে অ্যাসেনডিং অর্ডারে সাজানো
  return a - b;
};

const mixedValues = [5, "apple", 2, "banana", 1, "cherry"];

mixedValues.sort(customSort);
console.log(mixedValues); // [1, 2, 5, "apple", "banana", "cherry"]
// Method-2  reverse():

const fruits1 = ["apple", "banana", "kiwi", "cherry"];
fruits.reverse();
console.log(fruits1); // ["cherry", "kiwi", "banana", "apple"]

const numbers2 = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers2); // [5, 4, 3, 2, 1]


////////////////method-3 isArray(): 
const arr = [1, 2, 3, 4, 5];
const obj = { name: "John", age: 30 };
const str = "Hello, World!";

console.log(Array.isArray(arr)); // true (এটি একটি এরে)
console.log(Array.isArray(obj)); // false (এটি একটি অবজেক্ট)
console.log(Array.isArray(str)); // false (এটি একটি স্ট্রিং)
//////////////////Method-4 // join(): 
const fruit = ["apple", "banana", "kiwi", "cherry"];
const fruitsString = fruit.join(", ");
console.log(fruitsString); // "apple, banana, kiwi, cherry"

/// Method-5 toString()
const num1 = [1, 2, 3, 4, 5];
const numbersString = num1.join(" - ");
console.log(numbersString); // "1 - 2 - 3 - 4 - 5"
const num = 42;
const bool = true;
const arr11 = [1, 2, 3];
const obj1 = { name: "John", age: 30 };

const numStr = num1.toString();
const boolStr = bool.toString();
const arrStr = arr11.toString();
const objStr = obj1.toString();

console.log(numStr); // "42"
console.log(boolStr); // "true"
console.log(arrStr); // "1,2,3" (এই ক্ষেত্রে এরের মৌলিক মানগুলি কমা দিয়ে স্ট্রিং হয়ে যায়)
console.log(objStr); // "[object Object]" (অবজেক্টের সাধারণ toString() মেথড)
