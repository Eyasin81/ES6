// method-4 every 
const numbers = [1, 2, 3,4, 5, 6, 7, 8, 9, 10];
const all=numbers.every((a)=>{
   // অ্যারের সমস্ত সংখ্যা যাদের 2 দ্বারা বিভাজ্য, তা পরীক্ষা করতে
   return a%2===0
})

console.log(all); //// false (সমস্ত সংখ্যা 2 দ্বারা বিভাজ্য নয় )