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

//**** Перевірка повноліття
// Напиши функцію checkAdult(age), яка:
// Якщо age менше 18, повертає "Access denied"
// Інакше повертає "Access granted" */

// function checkAdult(age) {
//   return age < 18 ? 'Access denied' : 'Access granted';
// }

// checkAdult();
// console.log(checkAdult(16)); // "Access denied"

// ************Перевірка на кратність числа
// Напиши функцію isDivisibleBy3(num), яка:
// Якщо число кратне 3, повертає "Divisible by 3"
// Інакше повертає "Not divisible by 3"

// function isDivisibleBy3(num) {
//   return num % 3 === 0 ? 'Divisible by 3' : 'not divisible by 3';
// }

// isDivisibleBy3();
// console.log(isDivisibleBy3(9)); // "Divisible by 3"

////////////////////////////////////////////////
// function getMax(a, b) {
//   // if (a > b) {
//   //   return a;
//   // } else if (b > a) {
//   //   return b;
//   // } else {
//   //   return 'Number are equal';
//   // }
//   /// або
//   return a > b ? a : b > a ? b : 'Number are equal';
// }
// getMax();
// console.log(getMax(10, 5)); // 10

/////////////////////////////////////////////////////
// function checkTemperature(temp) {
//   if (temp < 0) {
//     return 'Freezing';
//   } else if (temp >= 0 && temp < 20) {
//     return 'Cold';
//   } else if (temp >= 20 && temp < 30) {
//     return 'Warm';
//   } else if (temp >= 30) {
//     return 'Hot';
//   }
// }

// checkTemperature();

// console.log(checkTemperature(-5)); // "Freezing"

//////////////////////////////////////////////

// function isDivisibleBy5(num) {
//   return num % 5 === 0 ? 'Divisible by 5' : 'Not divisible by 5';
// }

// isDivisibleBy5();
// console.log(isDivisibleBy5(10)); // "Divisible by 5"

///////////////////////////////////////////////////

// function checkNumberType(num) {
//   return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
// }

// checkNumberType();
// console.log(checkNumberType(10)); // "Positive"

////////////////////////////////////////////////////////

// const hours = 14;
// const minutes = 25;
// let timestring;

// if (minutes === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minutes} хв. `;
// }

// console.log(timestring);

/////////////// SWITCH case///////////////////////

// function getDayName(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       return 'Monday';
//     case 2:
//       return 'Tuesday';
//     case 3:
//       return 'Wednesday';
//     case 4:
//       return 'Thursday';
//     case 5:
//       return 'Friday';
//     case 6:
//       return 'Saturday';
//     case 7:
//       return 'Sunday';

//     default:
//       return 'Invalid day number';
//   }
// }

// getDayName();
// console.log(getDayName(1)); // "Monday"

// function getSeasonSwitch(month) {
//   switch (month) {
//     case 12:
//     case 1:
//     case 2:
//       return 'Winter';
//     case 3:
//     case 4:
//     case 5:
//       return 'Spring';
//     case 6:
//     case 7:
//     case 8:
//       return 'Summer';
//     case 9:
//     case 10:
//     case 11:
//       return 'Autumn';
//     default:
//       return 'Invalid month';
//   }
// }

// getSeasonSwitch();
// console.log(getSeasonSwitch(1)); // "Winter"

////////////////////////////////////////

// function calculate(a, b, operator) {
//   switch (operator) {
//     case '+':
//       return a + b;
//     case '-':
//       return a - b;
//     case '*':
//       return a * b;
//     case '/':
//       return b !== 0 ? a / b : 'Cannot divide by zero';
//     default:
//       return 'invalid operator';
//   }
// }

// calculate();
// console.log(calculate(11, 5, '+')); // 16

///////////////////////////////////////////////////////////////////////

// function getTrafficLight(color) {
//   switch (color) {
//     case 'red':
//       return 'Stop';
//     case 'yellow':
//       return 'Get ready';
//     case 'green':
//       return 'Go';

//     default:
//       return 'Invalid color';
//   }
// }

// getTrafficLight();

// console.log(getTrafficLight('red'));

////////////   Оператор &&   (i)

// //повертає ліву частину якщо там false, в іншому вмпадку повертає праву частину коду
// console.log(0 && 1); // 0
// console.log(8 && 4); // 4

// /////////// Оператор ||    (або)

// // поветає ліву частину якщо там true, в іншому випадку поверне праву

// console.log(true || 6); //true
// console.log(false || 0); // 0

// // оператор ! (не)
// console.log(!true); //false
// console.log(!false); // true

////////////Домашнє завдання 2
// //1.
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totalOrder = quantity * pricePerDroid;
//   if (totalOrder > customerCredits) {
//     return 'Insufficient funds!';
//   } else {
//     return `You ordered ${quantity} droids worth ${totalOrder} credits!`;
//   }
// }

// makeTransaction();
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//2.

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return `${message.slice(0, maxLength)}...`;
//   }
// }

// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// ///3.
// function checkForSpam(message) {
//   const messageWithoutSpan = message.toLowerCase().includes('spam');
//   const messageWithoutSale = message.toLowerCase().includes('sale');
//   if (messageWithoutSpan || messageWithoutSale) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ///4.
// function getShippingCost(country) {
//   let price;
//   switch (country) {
//     case 'China':
//       price = 100;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Chile':
//       price = 250;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Australia':
//       price = 170;
//       return `Shipping to ${country} will cost ${price} credits`;
//     case 'Jamaica':
//       price = 120;
//       return `Shipping to ${country} will cost ${price} credits`;
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
// }

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// function getShortText(text) {
//   return text.slice(0, 10);
// }
// console.log(getShortText('JavaScript is awesome!')); // "JavaScript"

// function normalizeEmail(email) {
//   return email.toLowerCase();
// }
// console.log(normalizeEmail('John.Smith@Example.COM')); // "john.smith@example.com"

// function shoutMessage(message) {
//   return message.toUpperCase();
// }
// console.log(shoutMessage('hello world')); // "HELLO WORLD"

// function containsWord(text, word) {
//   return text.includes(word);
// }

// console.log(containsWord('I love JavaScript', 'love')); // true
// console.log(containsWord('I love JavaScript', 'Python')); // false
// console.log(containsWord('I love JavaScript', 'I')); // true
// console.log(containsWord('I love JavaScript', 'JavaScript')); // true
// console.log(containsWord('I love JavaScript', 'Gmail')); // true

// function getPosition(text, searchTerm) {
//   return text.indexOf(searchTerm);
// }
// console.log(getPosition('Frontend Developer', 'Dev')); // 9
// console.log(getPosition('Frontend Developer', 'React')); // -1
// console.log(getPosition('Frontend Developer', 'loper')); // 13
// console.log(getPosition('Frontend Developer', 'Fro')); // 0

// function hasKeyword(text, keyword) {
//   return text.toLowerCase().includes(keyword.toLowerCase());
// }

// console.log(hasKeyword('Learning JavaScript is fun!', 'javascript')); // true
// console.log(hasKeyword('I love coding', 'Code')); //false
// console.log(hasKeyword('Frontend developer', 'backend')); //false

// function hasKeyword(text, keyword) {
//   return text.toLowerCase().includes(keyword.toLowerCase());
// }

// console.log(hasKeyword('Learning JavaScript is fun!', 'javascript')); // true
// console.log(hasKeyword('I love coding', 'Coding')); // true ✅
// console.log(hasKeyword('Frontend developer', 'backend')); // false

/////////////  Цикл for()
// console.log('Before');

// for (let start = 1; start <= 10; start++) {
//   console.log('Hello', start);
// }

// console.log('After');

// function printEvenNumbers(n) {
//   for (let i = 2; i <= n; i += 2) {
//     console.log(i);
//   }
// }

// printEvenNumbers(30);
// // Виведе:2 4 6 8 10... ///

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if ('aeiou'.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('Hello my dear husband'));

// function countConsonant(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if ('qwrtyupsdfghjklzxcvbnm'.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countConsonant('Hello my dear husband'));

// function reverseString(str) {
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }
// console.log(reverseString('hello'));
// // "olleh"
// console.log(reverseString('JavaScript')); // "tpircSavaJ"

// function printLetters(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// }

// printReversedLetters('kateryna');

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if ('ioaue'.includes(char)) {
//       count++;
//       console.log(`${i}:`, char);
//     }
//   }
//   return count;
// }

// console.log(countVowels('moa niu lea'));
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();

//     console.log(`${i}:`, char);
//   }
//   return count;
// }

// console.log(countVowels('dog'));

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(5));
