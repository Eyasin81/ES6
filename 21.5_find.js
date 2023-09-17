const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// প্রথম সংখ্যা যেটি 30 এর সমান বা বড়, সেটিকে ফেরত দেয়
const foundNumber = numbers.find(function (number) {
   return number >=40;
 });
 
 console.log(foundNumber); // 30
 
/*  const numbers = [1, 2, 3,4, 5, 6, 7, 8, 9, 10];

const all=numbers.find((number)=>{
   // return number==4// Equal value
   // return number===4// Equal value and type
   return number=>10// Equal value and type
})
console.log(all);//  */