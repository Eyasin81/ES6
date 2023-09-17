//findIndex(): 
// const numbers = [10, 20, 30, 40, 50];

// 30 এর সমান বা বড় সংখ্যার প্রথম উপাংশের ইনডেক্স খুঁজে পেতে
const index = numbers.findIndex(function (number) {
   return number == 30;
 });
 console.log(index); // 2 (ইনডেক্স হলো 2)