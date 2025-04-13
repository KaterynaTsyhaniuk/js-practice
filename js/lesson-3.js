// // const arr = [1, 2, 3, 4, 5];
// // console.log(arr);

// // const user = ['kate', 'olga', 'july', 'margo'];
// // console.log(user[2]); //отримання елемента

// // user[0] = 'misha'; // перевизначення першого елемента який знах на 0 індексу
// // console.log(user);

// // console.log(user.length); ///4    довжина нашого масиву
// // const lastIndex = user.length - 1; // визначення останнього масиву
// // console.log(user[lastIndex]); //margo

// ///Методи масивів
// const courses = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'TypeScript'];
// // console.table(courses);
// //  ********************         join
// const res = courses.join('|'); //HTML|CSS|Javascript|React|Node.js|TypeScript - string
// const res1 = courses.join('-Hello-'); // HTML-Hello-CSS-Hello-Javascript-Hello-React-Hello-Node.js-Hello-TypeScript
// console.log(res);
// console.log(res1);
// const res2 = courses.join('\n'); //перенос рядка тобто всі курси удуть з нового рядка
// console.log(res2);

// //**********************         split

// const str = 'hello world';
// const res3 = str.split('*'); //  ['he', 'll', 'o wo', 'rld']
// const res4 = str.split(' '); //  ['hello', 'world']
// console.log(res3);
// console.log(res4);

// //**********************         slice

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const copyArr = arr.slice(3, 7); //[4, 5, 6, 7]
// const copyArr2 = arr.slice(3); // [4, 5, 6, 7, 8, 9, 0]
// console.log(copyArr);
// console.log(copyArr2);

// //******************             concat

// const arrX = [1, 2, 3];
// const arrY = [4, 5, 6];
// const arrC = [7, 8, 9];
// const resConcat = [].concat(arrX, arrY, arrC); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(resConcat); /// зєднання кількох масивів в один

// //*********************           index of

// const arrIndex = [4, 6, 9, 0, 4, 7, 3, 2, 7, 9, 45, 78, 3, 2];
// const index = arrIndex.indexOf(2); // 7 тобто перша 2 знах на 7 індексі
// console.log(index);

// //********************         push    pop

// const arrNew = ['Dnipro', 'Kyiv', 'Lviv', 'Odessa'];
// arrNew.push('Kharkiv'); //завжди додає вкінець ['Dnipro', 'Kyiv', 'Lviv', 'Odessa', 'Kharkiv']
// console.log(arrNew);
// arrNew.pop(); // завжди видаляє з кінця ['Dnipro', 'Kyiv', 'Lviv', 'Odessa']
// console.log(arrNew);

// //**********************           unshift       shift

// arrNew.unshift('Ternopil'); //додає на початок ['Ternopil', 'Dnipro', 'Kyiv', 'Lviv', 'Odessa']
// console.log(arrNew);
// arrNew.shift(); // видаляє з початку повертає елемент який видалено

/// *******************        видалення    splice

// const arrNew2 = ['Dnipro', 'Kyiv', 'Lviv', 'Odessa'];
// arrNew2.splice(1, 1, 'IvanoFrank'); //тобто ми видаляємо місто під першим індексом, Kyiv і можемо додати інше місто якщо потрібно
// console.log(arrNew2); //['Dnipro', 'Lviv', 'Odessa']

// ************************              ітерації по масиву

// const fruit = ['Mango', 'Kiwi', 'Berry', 'Orange', 'Banana', 'Apple'];
// // зякого фрукта будемо починати? з 0б тому і=0, скільки в нас фруктів - 6, тому моя змінна і має йти до числа 6, i++ - це ми проходимося по кожному фрукті
// for (let i = 0; i < fruit.length; i++) {
//   const message = `${i + 1}: ${fruit[i]}`;
//   console.log(message);
//   // з початку
// }
// for (let i = fruit.length; i >= 0; i--) {
//   console.log(fruit[i]);          // з кінця
// }

// const fruit1 = ['Mango', 'Kiwi', 'Berry', 'Orange', 'Banana', 'Apple'];
// for (let i = 0; i < fruit1.length; i += 1) {
//   fruit1[i] = fruit1[i].toUpperCase();
// }
// console.table(fruit1);

// const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // for (let i = 0; i < arrNumber.length; i++) {
// //   arrNumber[i] *= 10;
// // }

// // console.log(arrNumber);
// for (let i = 0; i < arrNumber.length; i += 2) {
//   arrNumber[i] *= 10;
// }

// console.log(arrNumber);

///////////////////////////          for of

// const salariesCoworker = [300, 500, 200, 400, 800, 700, 100];
// let total = 0; /// проходимося по циклу і нічого не змінюємо

// for (const salary of salariesCoworker) {
//   total += salary;
// }
// console.log(total); //3000

// const fruits = ['Mango', 'Kiwi', 'Berry', 'Orange', 'Banana', 'Apple'];
// for (const fruit of fruits) {
//   console.log(fruit); //вивели фрукти всі окремо в стовпчик
// }

///////////////////////////////////////////////
// const values = '8 12';
// const numbers = values.split(' ');
// console.log(numbers);
// const width = numbers[0];
// const height = numbers[1];
// const area = width * height;
// console.log(area);

///////////////////////////////////////////////////
// const myShoes = [7, 8, 5, 4];
// let total = 0;
// for (const myShoe of myShoes) {
//   if (myShoe % 2 === 0) { // а якщо не парних !==0
//     total += myShoe;
//   }
// }

// console.log(total); //12

/////////////////////////////////////////////////////

// const names = 'olga,kateryna,margo,evelin';
// const phones = '098898765,098453456,456780456,12345689';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// console.log(namesArr);
// console.log(phonesArr);
// for (let i = 0; i < namesArr.length; i++) {
//   const message = `${namesArr[i]} - ${phonesArr[i]}`; // olga - 098898765
//   console.log(message);
// }

////////////////////////////////////////////////////////////////////

// const myStr = 'i love my daughters so match'; //видалити перше і останнє слово
// const res = myStr.split(' ').slice(1, -1).join(' '); // love my daughters so
// console.log(res);

// ////////////////////////////////////////

// const salaries = [50, 40, 10, 5, 30];
// let min = salaries[0];
// for (let salary of salaries) {
//   if (salary < min) {
//     min = salary;
//   }
// }

// console.log(min);

// const salaries2 = [100, 300, 500, 50, 700, 450, 45, 400];
// let max = salaries2[0];
// for (let salary of salaries2) {
//   if (salary > max) {
//     max = salary;
//   }
// }
// console.log(max);

////////////   Функції

// function showStr(string) {
//   for (let i = 0; i < string.length; i += 2) {
//     console.log(string[i]);
//   }
// }

// showStr('Heloo kateryna');

///////////////////////////

// function showReverseString(string) {
//   for (let i = string.length - 1; i >= 0; i--) {
//     console.log(string[i]);
//   }
// }
// showReverseString('By tsyhaniuk');

// function findSynbol(string) {
//   for (const symbol of string) {
//     console.log(symbol);
//     if (symbol === ' ') break;
//   }
// }

// findSynbol('love you');

// function sumbolToUpperCase(string) {
//   let res = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     if (i % 2 === 1) {
//       res += string[i].toUpperCase();
//     } else {
//       res += string[i].toLowerCase();
//     }
//   }
//   return res;
// }

// console.log(sumbolToUpperCase('abracadabra'));

// function sumNumber(number) {
//   let totalSum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     totalSum += i;
//   }
//   return totalSum;
// }

// console.log(sumNumber(100)); //5050

////////////////////////////////////////////
// знайти та вивести чи число просте чи ні
// function isPrime(number) {
//   if (number <= 1) {
//     return false; // 0, 1 і від'ємні числа не прості
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false; // якщо знайшли дільник, число не просте
//     }
//   }

//   return true; // якщо не знайшли дільників
// }

// // Приклад використання
// const userInput = prompt('Введи число:');
// const number = Number(userInput);

// if (isNaN(number)) {
//   console.log('Це не число!');
// } else {
//   console.log(isPrime(number) ? 'Це просте число!' : 'Це не просте число.');
// }
// (' ');
/////////////////////////////////////////

// function slugify(title) {
//   const slug = title.toLowerCase().replaceAll(' ', '-');
//   return slug;
// }

//або

// function slugify(title) {
//   const slug = title.split(' ').join('-').toLowerCase();
//   return slug;
// }

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
//////////////////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray;
//   }
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

//////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
0;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
