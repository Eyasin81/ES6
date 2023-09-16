const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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