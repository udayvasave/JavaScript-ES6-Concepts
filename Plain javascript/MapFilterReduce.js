



const transactions = [100, -200, 500, 745, -807, 345];

console.log(transactions);

/////////////////////////////////    map //////////////////////////////////////////////////
// const mappedTransactions = transactions.map((trans) => {
//   return trans + 200;
// });
// console.log(mappedTransactions);

////////////////////////////////////// filter ///////////////////////////////////////
// const filteredTransaction = transactions.filter((trans) => {
//   return trans >= 100;
// });
// console.log(filteredTransaction);

//////////////////////////////////////// reduce ////////////////////////////////////

// const reduceTrans = transactions.reduce((acc, curr, index) => {
//   return acc + curr - 100 + 100 * 3;
// });

// console.log(reduceTrans);

///////////////////////////////////////////////////////////////////////////////////////////////

// example: Converting all words into separate strings and printing 1st letter of every word












const names = "Chaitanya Samiksha Ankita milind patel sakshi navidha";

const firstLetter = names.toLowerCase().split(' ').map((names)=>{
    return names[0]
}).join("");


// const firstLetter = names
//   .toLowerCase()
//   .split(" ")
//   .map((nav) =>nav[0])
//   .join("");

console.log(firstLetter);


// ///////////////////////////////////////////////////////////////