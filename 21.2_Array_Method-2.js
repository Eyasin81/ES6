// Aggregation:

// reduce(): 
// reduceRight(): 
// some():
// every(): 
// includes(): 

// method-1 Reduce 
let numbers=[1,2,3,4]
let sum=numbers.reduce((a,b)=>{
   return a+b
},0)
console.log(sum);
// method-2 reduceRight
let sum2=numbers.reduceRight((a,b)=>{
   return a+b
},0)
console.log(sum2);// 4+3+2+1=10
// method-3 some
// অ্যারের কোন সংখ্যা যেটি 3 এর সমান বা বড়, সেটি খুঁজে পেতে
const hasNumber = numbers.some((number) =>{
   return number >= 3;
 });
 
 console.log(hasNumber); // true (যেকোনো সংখ্যা 3 এর সমান বা বড়)
 
// method-4 every 
const all=numbers.every((a)=>{
   // অ্যারের সমস্ত সংখ্যা যাদের 2 দ্বারা বিভাজ্য, তা পরীক্ষা করতে
   return a%2===0
})

console.log(all); //// false (সমস্ত সংখ্যা 2 দ্বারা বিভাজ্য নয় )
// let numbers=[1,2,3,4]
// 1 উপাংশটি অ্যারেতে রয়েছে কিনা পরীক্ষা করতে
const hasNumbers = numbers.includes(1);

console.log(hasNumbers); // true (1 অ্যারেতে রয়েছে)
// Array  includes() Method
const str = "Hello, World!";
console.log(str.includes("World")); // true
console.log(str.includes("Goodbye")); // false

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false
