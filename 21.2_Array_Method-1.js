/* Creating Subarrays:

slice():
subarray(): // not supported all browser
*/

let originalArray = [1, 2, 3, 4, 5];
let slicedArray = originalArray.slice(1, 4);

console.log(slicedArray); // আউটপুট: [2, 3, 4]


/* 

/* Searching and Filtering:
filter(): 
find(): 
findIndex(): 

*/ 

// filter method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // প্রদান করা ফাংশনের মাধ্যমে শুধু বিজোড় সংখ্যা ফিল্টার করা
const all=numbers.filter((number)=>{
  return number%2===1
})
console.log(all);//[1, 3, 5, 7, 9]

// // প্রদান করা ফাংশনের মাধ্যমে শুধু জোড় সংখ্যা ফিল্টার করা

const all1=numbers.filter((number)=>{
   return number%2===1
 })
console.log(all1);//[2,4,6,8,10]

// find():

const numbers = [10, 20, 30, 40, 50];

// প্রথম সংখ্যা যেটি 30 এর সমান বা বড়, সেটিকে ফেরত দেয়
const foundNumber = numbers.find(function (number) {
  return number >=40;
});

console.log(foundNumber); // 30




//findIndex(): 
// const numbers = [10, 20, 30, 40, 50];

// 30 এর সমান বা বড় সংখ্যার প্রথম উপাংশের ইনডেক্স খুঁজে পেতে
const index = numbers.findIndex(function (number) {
  return number >= 30;
});
console.log(index); // 2 (ইনডেক্স হলো 2)

