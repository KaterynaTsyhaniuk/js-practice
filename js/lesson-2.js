//// Розгалудження Інструкції if

// const userAge = 20;
// console.log("Before if");

// if (userAge >= 18) {//якщо умова в дужках буде true, кад у фігурних дужках виконаєтьсяб якщо false- невиконається.
//   console.log("Hello if");
// }
// console.log("after if");

// const password = 'owerty';

// if (password.length < 8) {
//   console.log('Invalid password');
// }

// const passwordMy = 'tsyhaniyk';

// if (passwordMy.length > 8) {
//   console.log('Password is OK');
// }

// ///// інструкція   if...else

// const myAge = 33;
// if (myAge <= 33) {
//   console.log('it is my present time');
// } else {
//   console.log('it is my future');
// }

// //Завдання 1. Якщо баланс більший за 0 то вивести повідомлення Баланс позитивний, якщо ні то Негативний баланс

// const myBalance = 150;
// let message;
// // if (myBalance > 0) {
// //   message = "Positive balance";
// // } else {
// //   message = "Negative balance";
// // }

// // console.log(message);

// ///  інструкція else if..

// const userAge = 16;
// const userBalance = 100;
// const vip = true;

// if (userAge >= 18) {
//   console.log('Welcome');
// } else if (userBalance >= 150) {
//   console.log('Welcome user');
// } else if (!vip) {
//   console.log('Hello');
// } else {
//   console.log('Bye');
// }

// ///////////************Тернарний операто */

// message = myBalance > 0 ? 'Positive balance' : 'Negative balance';
// console.log(message);

// ////******Завдання 2 */
// // Напиши функцію checkAge(age), яка:
// // Якщо age менше 18, повертає "Access denied! You are too young."
// // Якщо age від 18 до 65 (включно), повертає "Access granted! Enjoy the site."
// // Якщо age більше 65, повертає "Access granted! But take care of your health."

// const age = 15;

// function checkAge(age) {
//   if (age < 18) {
//     return 'Access denied! You are too young.';
//   } else if (age >= 18 && age <= 65) {
//     return 'Access granted! Enjoy the site.';
//   } else if (age > 65) {
//     return 'Access granted! But take care of your health.';
//   }
// }

// checkAge();

// console.log(checkAge(16)); // "Access denied! You are too young."
// console.log(checkAge(25)); // "Access granted! Enjoy the site."
// console.log(checkAge(70)); // "Access granted! But take care of your health."

// function convertGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return 'A';
//   } else if (score >= 81 && score <= 90) {
//     return 'B';
//   } else if (score >= 71 && score <= 80) {
//     return 'C';
//   } else if (score >= 61 && score <= 70) {
//     return 'D';
//   } else if (score >= 51 && score <= 60) {
//     return 'F';
//   } else if (score < 51) {
//     return 'Go to school';
//   }
// }

// convertGrade();
// console.log(convertGrade(95)); // "A"
// console.log(convertGrade(85)); // "B"
// console.log(convertGrade(75)); // "C"
// console.log(convertGrade(65)); // "D"
// console.log(convertGrade(50)); // "F"
// console.log(convertGrade(77));
// console.log(convertGrade(69));
// console.log(convertGrade(90));

///*****Напиши функцію getSeason(month), яка:

// Якщо month — 12, 1 або 2, повертає "Winter"
// Якщо month — 3, 4 або 5, повертає "Spring"
// Якщо month — 6, 7 або 8, повертає "Summer"
// Якщо month — 9, 10 або 11, повертає "Autumn"
// Якщо число не входить у діапазон 1-12, повертає "Invalid month" */

// function getSeason(month) {
//   if (month === 12 || month === 1 || month === 2) {
//     return 'Winter';
//   } else if (month >= 3 && month <= 5) {
//     return 'Spring';
//   } else if (month >= 6 && month <= 8) {
//     return 'Summer';
//   } else if (month >= 9 && month <= 11) {
//     return 'Autumn';
//   } else {
//     return 'Invalid month';
//   }
// }

// getSeason();
// console.log(getSeason(1)); // "Winter"
// console.log(getSeason(4)); // "Spring"
// console.log(getSeason(7)); // "Summer"
// console.log(getSeason(10)); // "Autumn"
// console.log(getSeason(13)); // "Invalid month"

// ///*********************Визначення парного чи непарного числа
// // Напиши функцію isEven, яка приймає число num і повертає "Even" якщо число парне, і "Odd" якщо непарне. */
// function isEven(num) {
//   return num % 2 === 0 ? 'Even number' : 'Odd number';
// }
// isEven();
// console.log(isEven(4)); // "Even number"
// console.log(isEven(7)); // "Odd number"
// console.log(isEven(0)); // "Even number"

// function isNotEven(num) {
//   return num % 2 !== 0 ? 'Odd number' : 'Even number';
// }
// isNotEven();
// console.log(isNotEven(3)); // "Odd number"
// console.log(isNotEven(7)); // "Odd number"
// console.log(isNotEven(8)); // "Even number"
// console.log(isNotEven(4)); // "Even number"

//**** Перевірка повноліття
// Напиши функцію checkAdult(age), яка:
// Якщо age менше 18, повертає "Access denied"
// Інакше повертає "Access granted" */

// function checkAdult(age) {
//   return age < 18 ? 'Access denied' : 'Access granted';
// }

// checkAdult();
// console.log(checkAdult(16)); // "Access denied"
// console.log(checkAdult(18)); // "Access granted"
// console.log(checkAdult(25)); // "Access granted"
// console.log(checkAdult(14)); // "Access granted"

// ************Перевірка на кратність числа
// Напиши функцію isDivisibleBy3(num), яка:
// Якщо число кратне 3, повертає "Divisible by 3"
// Інакше повертає "Not divisible by 3"

function isDivisibleBy3(num) {
  return num % 3 === 0 ? 'Divisible by 3' : 'not divisible by 3';
}

isDivisibleBy3();
console.log(isDivisibleBy3(9)); // "Divisible by 3"
console.log(isDivisibleBy3(10)); // "Not divisible by 3"
console.log(isDivisibleBy3(21)); // "Divisible by 3"
console.log(isDivisibleBy3(3));
