const books = [
    { Book: 'Eloquent JavaScript', Author: 'Marijn Haverbeke', publish: 2018},
    { Book: 'Dont make me thing', Author: 'Steve Kurug', publish: 2000,},
    { Book: 'Bulletproof Web Design', Author: 'Dan Cenderholm', publish: 2005,},
    { Book: 'HTML And CSS:Design and Build Websites', Author: 'Jon Duckett', publish: 2011,},
    { Book: 'JavaScrit:The Good Parts', Author: 'Douglas Crockford', publish: 2008,},
    { Book: 'You Dont Know JS', Author: 'Kle Simpson', publish: 2014,},
  ];

  let filterBooks =books.filter(value => value.publish >= 2010)

  console.log(filterBooks);

//   output: 
//   [
//     {
//       Book: 'Eloquent JavaScript',
//       Author: 'Marijn Haverbeke',
//       publish: 2018
//     },
//     {
//       Book: 'HTML And CSS:Design and Build Websites',
//       Author: 'Jon Duckett',
//       publish: 2011
//     },
//     { Book: 'You Dont Know JS', Author: 'Kle Simpson', publish: 2014 }
//   ]