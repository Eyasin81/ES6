/* 

Manipulating Array Contents:


unshift(): 
push(): 
pop() :
shift():
splice():

*/
const  letter = ["a","b","c"]; // simple Array
// unshift() Array Method প্রথম দিকে যোগ করে ।
letter.unshift('aa','bb') // ['aa', 'bb', 'a', 'b', 'c']

console.log(letter);
//"push Array Method শেষের  দিকে যোগ করে"
letter.push("d","e");
console.log(letter);//['aa', 'bb', 'a', 'b', 'c', 'd', 'e']
// ///////////////pop() :
// pop () Array Method  সর্বশেষ উপাদান প্রিন্ট হবে:
const lastLetter = letter.pop();

console.log(lastLetter); // সর্বশেষ উপাদান প্রিন্ট হবে: e

console.log(letter); // এখন এই এরে হল: e বাদে সব ['aa', 'bb', 'a', 'b', 'c', 'd', ]

// shift(): shift() মেথড সাধারণভাবে একটি এরের শুরুতে উপাদান সরাতে ব্যবহৃত হয় হবে । 
letter.shift()
console.log(letter);// aa বাদে সব // ['bb', 'a', 'b', 'c', 'd'] হবে।  
// splice():

const colors = ["লাল", "সবুজ", "নীল", "হলুদ", "কাল"];
const removedColors = colors.splice(2, 2, "গোল্ড", "সিলভার");

console.log(removedColors); // সরানো হয়ে যাওয়া উপাদান: ["নীল", "হলুদ"]

console.log(colors); // মধ্যে পরিবর্তিত হয়ে যাওয়া এই এই এই এরে: ["লাল", "সবুজ", "গোল্ড", "সিলভার", "কাল"]
