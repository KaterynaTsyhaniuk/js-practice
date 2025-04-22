'use strict';

// function myFun(x) {
//   //3. значення userValue записалося до змінної x
//   console.log(x); // 4. і тут ми його вивели у консоль
// }
// const userValue = 10; //1. змінну userValye
// myFun(userValue); // 10 /// 2. передаємо у функцію myFun

// тобто тепер ми до змінної можемо записати будь що)
// навіть ми можемо передати іншу функцію:

// function myFun1(x) {
//   console.log(x); //тобто тепер наш х = myFun2 => x() бо це вже є функція
// }
// function myFun2() {
//   console.log('hello ');
// }
// myFun1(myFun2);

// //////////////////
// // метод Map()= змінює КОЖЕН елемент
// // метод  filter = шукає елементи які задовільняють певно умову
// // метод find = шукає один елемент
// // метод every = дає відповіть про велику к-ть ел true false
// // метод some = чи є хоть один елемент який задов умову true false

/////////////////////// for each

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach((el, i, arr) => {
//   console.log(el);
// });

const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'White',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    color: 'Black',
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    color: 'Blue',
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: 'Sedan',
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    color: 'Silver',
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'Gray',
    price: 45000,
    amount: 4,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Lamborghini',
    model: 'Huracan',
    year: 2023,
    color: 'Yellow',
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2022,
    color: 'Red',
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Porsche',
    model: '911',
    year: 2021,
    color: 'White',
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Toyota',
    model: 'Golf',
    year: 2020,
    color: 'Black',
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Subaru',
    model: 'Forester',
    year: 2021,
    color: 'Green',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Orange',
    price: 35000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Kia',
    model: 'Soul',
    year: 2021,
    color: 'Yellow',
    price: 20000,
    amount: 0,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 1,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    color: 'Silver',
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Lexus',
    model: 'RX',
    year: 2021,
    color: 'Black',
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2022,
    color: 'Gray',
    price: 60000,
    amount: 1,
    isSportCar: false,
    type: 'SUV',
  },
];
/////////////////////       MAP              // не змінює оригінальний масив змінює КОЖЕН елемент
// const res = cars.map((car, i, arr) => {
//   return `${car.brand} - ${car.price}$`; //'Toyota - 25000$'
// });

// console.log(res);

//                    Щоб змінити щось в масиві потрібно зробити її копію
// const MakeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     const copy = { ...car };

//     copy.price += 1 - discount;
//     return copy;
//   });
// };

// console.table(MakeCarsWithDiscount(cars, 0.2));
// console.table(MakeCarsWithDiscount(cars, 0.5));

//.....Створити новий масив, що містить лише назви моделей усіх машин.

// const arrCarsModel = cars.map(car => car.model);
// console.log(arrCarsModel);

///....Створити масив, що містить розмітку кожної машини.

// const markupCars = cars.map(
//   car => `<ul><li>${car.brand} ${car.model} ${car.price}</li></ul>`,
// );

// console.log(markupCars.join('\n'));

//..... Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів. Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.
//  const getUserNames = users => {
//   return users.map((user, i, arr) => user.name);
// };

// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       balance: 2811,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       balance: 3821,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       balance: 3793,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       balance: 2278,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       balance: 3951,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       balance: 1498,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       balance: 2764,
//     },
//   ]),
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

///////////////////////////////////
// ////////////////////////////////       FILTER - шукає елементи які задовільняють певно умову

// const numbers = [1, 16, 1, 89, 43, 25, 2];
// const filteredNumbers = numbers.filter((el, i, err) => {
//   // if (el < 25) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   //або
//   return el < 25;
// });

// console.log(filteredNumbers); // [1,16]

// const filteredNumbers1 = numbers.filter((el, i, err) => el > i);
// console.log(filteredNumbers1); //  [1, 16, 89, 43, 25]

// const filteredNumbers2 = numbers.filter((el, i, err) => el === 1);
// console.log(filteredNumbers2); //[1,1]

////////////////////////////////////////////////////////////

// const cars = [
//   {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     color: 'white',
//     price: 15000,
//   },
//   { brand: 'Honda', model: 'Civic', year: 2019, color: 'black', price: 14500 },
//   { brand: 'Ford', model: 'Focus', year: 2021, color: 'blue', price: 16000 },
//   { brand: 'BMW', model: 'X5', year: 2022, color: 'gray', price: 35000 },
//   { brand: 'Audi', model: 'A4', year: 2020, color: 'red', price: 28000 },
//   {
//     brand: 'Mercedes',
//     model: 'C-Class',
//     year: 2018,
//     color: 'silver',
//     price: 30000,
//   },
//   {
//     brand: 'Hyundai',
//     model: 'Elantra',
//     year: 2021,
//     color: 'blue',
//     price: 17000,
//   },
//   { brand: 'Kia', model: 'Sportage', year: 2019, color: 'green', price: 20000 },
//   {
//     brand: 'Volkswagen',
//     model: 'Passat',
//     year: 2020,
//     color: 'black',
//     price: 22000,
//   },
//   {
//     brand: 'Nissan',
//     model: 'Altima',
//     year: 2021,
//     color: 'white',
//     price: 19000,
//   },
//   { brand: 'Mazda', model: 'CX-5', year: 2022, color: 'red', price: 24000 },
//   {
//     brand: 'Subaru',
//     model: 'Outback',
//     year: 2020,
//     color: 'gray',
//     price: 23000,
//   },
//   {
//     brand: 'Chevrolet',
//     model: 'Malibu',
//     year: 2018,
//     color: 'white',
//     price: 16000,
//   },
//   { brand: 'Lexus', model: 'RX', year: 2021, color: 'black', price: 38000 },
//   {
//     brand: 'Tesla',
//     model: 'Model 3',
//     year: 2022,
//     color: 'white',
//     price: 45000,
//   },
// ];

/////////////////////////////////////////////////

// const filteredByPrice = (cars, threshold) => {
//   return cars.filter((car, i, err) => {
//     return car.price < threshold;
//   });
// };

// console.log(filteredByPrice(cars, 36000)); // масив зі 13 машинками Б тому що 2 незадовільняють умову

// const filteredByColor = (cars, color) => {
//   return cars.filter((car, i, arr) => {
//     return car.color === color;
//   });
// };

// console.log(filteredByColor(cars, 'black')); // повернулось масив з 3 обєктaми

// //Знайти усі спорткари///////////////////////////////////

// const findAllSportcar = cars.filter((car, i, arr) => {
//   return car.isSportCar;
// });

// console.log(findAllSportcar);

//Порахувати к-ть авто 2022року/////////////////////////////

// const countCars = cars.filter((car, i, arr) => {
//   return car.year === 2022;
// }).length;
// console.log(countCars); //5 авто 2022

// знайти всі машини з ціною вище 30000///////////////////////

// const carsExpensivePrice = cars.filter((car, i, arr) => {
//   return car.price > 30000;
// });
// console.log(carsExpensivePrice); //знайшло 12 обєктів з ціною вище 30тис

// Знайти всі машини червоного кольору.//////////////////////////////////////

// const allRedCars = cars.filter((car, i, arr) => {
//   return car.color === 'Red';
// });

// console.log(allRedCars); //знайшло 3 обєкти

//Знайти всі машини заданої марки (наприклад, Toyota)/////

// const brandCars = cars.filter((car, i, arr) => {
//   return car.brand === 'Toyota';
// });

// console.log(brandCars);

///....Знайти всі машини певного типу (наприклад, SUV).

// const filterByType = cars.filter((car, i, arr) => {
//   return car.type === 'SUV';
// });

// console.table(filterByType);

//.... Знайти всі машини певного кольору та року випуску

// const carsByColorAndYear = cars.filter((car, i, arr) => {
//   return car.color === 'White' && car.year === 2021;
// });

// console.table(carsByColorAndYear);

//....Знайти всі машини, у яких кількість на складі більша за 0.

// const carsAmount = cars.filter(car => car.amount > 0);

// console.log(carsAmount);

//....Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.

// const filterCarsByPriceAndYear = cars.filter(
//   car => car.price > 30000 && car.year > 2020,
// );
// console.table(filterCarsByPriceAndYear);

//.... Знайти всі машини, які не є спортивними та доступні для продажу.
// const filterCarsBySalary = cars.filter(
//   car => !car.isSportCar && car.amount > 0,
// );
// console.table(filterCarsBySalary);

//// Знайти всі машини певного типу та кольору.

// const filterCarsByTypeAndColor = (type, color) => {
//   return cars.filter(car => car.type === type && car.color === color);
// };

// console.log(filterCarsByTypeAndColor('Sedan', 'White'));

////////////////////////////////
///////////////////////////////          FIND шукає один елемент
// const numbers3 = [2, 45, 6, 23, 8, 9, 89, 45, 23, 21, 56, 78, 34];

// const findNumbers3 = numbers3.find(el => el % 2 === 0);

// console.log(findNumbers3); //2  тобто нам повернули перший знайдений ел який ділиться на 2

//////////////////////////////

// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model);
// };

// console.log(getCarByModel(cars, 'Focus')); // {brand: 'Ford', model: 'Focus', year: 2021, color: 'blue', price: 16000}

// Знайти авто зеленого кольору ////////////////////////////////

// const findGreenAvto = cars.find((car, i, arr) => {
//   return car.color === 'Green';
// });
// console.log(findGreenAvto);

// //якщо хочемо перевірити чи взагалі є зелені авто можна перевірити:
// if (findGreenAvto) {
//   console.log('Знайдено авто:', findGreenAvto);
// } else {
//   console.log('Зеленого авто не знайдено');
// }

/////////////////////////////////
/////////////////////////////////     EVERY - дає відповіть про велику к-ть ел true false

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// const isAllOnline = players.every(player => player.online);

// console.log(isAllOnline); // false як тільки ми зайшли ел який не задовільняє буде false

/////////////////////////////////////////////////

// const arr = [1, 3, 5, 6, 7, 3, 4, 5, 6, 3];
// while (!arr.every(el => el === 0)) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr[i] -= 1;
//     }
//   }

//   console.log(arr.join(' '));
// } // 0 0 0 0 0 0 0 0 0 0 на останній ітерації

// //////////////////////////////////////
/////////////////////////////////////////         SOME -  чи є хоть один елемент який задов умову true false

//.... const isOneOnline = players.some(player => player.online);

// console.log(isOneOnline); // true тобто перший знайти який online

//....Перевірити, чи є хоч одна машина зеленого кольору.

// const thereIsGreenCar = cars.some(car => car.color === 'Green');
// console.log(thereIsGreenCar);  /// true

//////////////////////////////////////
/////////////////////////////////////           REDUCE

// const number = [1, 2, 3, 4, 5];

// // number.reduce(() => {}, aкумулятор); ///після коми в дужках нам потрібно записати якесь значення того щоб ми хотіли отримати в кінці, [],0,'' і так далі
// const res = number.reduce((acc, el, i, arr) => {
//   return acc + el;
// }, 0);

// console.log(res); // 15 сума всіх ел

// const res2 = number.reduce((acc, el, i, arr) => {
//   if (el % 2 === 0) {
//     acc.push(el);
//   }

//   return acc;
// }, []);

// console.log(res2);

/////////////////////////////////////////

// const salary = {
//   mango: 100,
//   poly: 50,
//   roma: 150,
// };

// // щоб у обєкта викликати метод reduce потрібно оюєкт перетворити на масив значень

// const totalSalary = Object.values(salary).reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(totalSalary); //300

/////////////////////////////////////////////////////

// const totalTimePlayed = players.reduce((acc, player) => {
//   return acc + player.timePlayed;
// }, 0);

// console.log(totalTimePlayed);

//....Знайти найдорощу машину//////////////////////////////

// const expensiveCar = cars.reduce((maxCar, car) => {
//   return car.price > maxCar.price ? car : maxCar;
// });

// console.log(expensiveCar);

//....Порахувати середню ціну всіх машин.

// const averageCarsPrice =
//   cars.reduce((acc, car, i, arr) => {
//     return acc + car.price;
//   }, 0) / cars.length;

// console.log(averageCarsPrice);

//....Порахувати загальну вартість всіх машин складі.
// const totalAmountCarsPrice = cars.reduce((acc, car, i, arr) => {
//   return acc + car.price * car.amount;
// }, 0);

// console.log(totalAmountCarsPrice); //2556000

///////////////////////
//////////////////////           toSORTED

//...Відсортувати машини за роком випуску (від найстарішого до найновішого)////////

// const sortedCars = cars.toSorted((a, b) => {
//   return a.year - b.year;
// });
// console.table(sortedCars); // відсортувало від 2018 до 2022 років

//... Відсортувати машини за ціною (від найдешевшої до найдорожчої).

// const sortByPrice = cars.toSorted((a, b) => {
//   return a.price - b.price;
// });

// console.table(sortByPrice);

///....Відсортувати машини за кількістю на складі (від найбільшої до найменшої).

// const sordedCarsByAmount = cars.toSorted((a, b) => {
//   return b.amount - a.amount;
// });
// console.table(sordedCarsByAmount); //від 6 шт  до 0 шт

//...... const sortByDescendingFriendCount = users => {
//   return users.toSorted((a, b) => b.friends.length - a.friends.length);
// };

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: 'Moore Hensley',
//       friends: ['Sharron Pace'],
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       gender: 'female',
//     },
//   ]),
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

//////////////////////////////////             localeCompare()
/////////////////////////////////  Для сортування рядків в алфавітному порядку

///....Відсортувати машини за брендом та моделлю в алфавітному порядку.

// const carsSortedByModelAndBrand = cars.toSorted(
//   (a, b) => a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model),
// );
// console.log(carsSortedByModelAndBrand);

/// якщо бренди однакові — виконується друге порівняння (моделі). Якщо бренди різні — вже досить лише першого.

///////////////////////////////////
/////////////////////////////////// ЛАНЦЮЖОК ВИКЛИКІВ

//....Порахувати загальну кількість машин усіх типів /////////

// const totalAmount = cars
//   .map((car, i, arr) => {
//     return car.amount;
//   })
//   .reduce((acc, el) => {
//     return acc + el;
//   }, 0);

// console.log(totalAmount);

//....Порахувати сумарну кількість всіх машин заданої марки.
// const brand = 'Toyota';
// const carsBrandTotal = cars
//   .filter(car => car.brand === brand)
//   .reduce((acc, car, i, arr) => acc + car.amount, 0);
// console.log(carsBrandTotal); // 9 шт в складах

//.....Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName. Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// const allUsers = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//   },
//   {
//     name: 'Carey Barr',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//   },
//   {
//     name: 'Blackburn Dotson',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

//..... const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .map((user, i, arr) => user.balance)
//     .reduce((acc, el) => {
//       return acc + el;
//     }, 0);
// };
// const clients = [
//   {
//     name: 'Moore Hensley',
//     gender: 'male',
//     balance: 2811,
//   },
//   {
//     name: 'Sharlene Bush',
//     gender: 'female',
//     balance: 3821,
//   },
//   {
//     name: 'Ross Vazquez',
//     gender: 'male',
//     balance: 3793,
//   },
//   {
//     name: 'Elma Head',
//     gender: 'female',
//     balance: 2278,
//   },
//   {
//     name: 'Carey Barr',
//     gender: 'male',
//     balance: 3951,
//   },
//   {
//     name: 'Blackburn Dotson',
//     gender: 'male',
//     balance: 1498,
//   },
//   {
//     name: 'Sheree Anthony',
//     gender: 'female',
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, 'male')); // 12053

// console.log(getTotalBalanceByGender(clients, 'female')); // 8863

////////////////////////////
///////////////////////////          FindIndex - проходиться по масиву й повертає індекс першого елемента, що задовольняє умову.

////....Знайти індекс першої машини з роком випуску 2022 року.

// const indexCar = cars.findIndex(car => car.year === 2022);

// console.log(indexCar);

////////////////// Складніші задачки

//.....Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.
// const filterCars = cars
//   .filter(car => car.price > 50000)
//   .toSorted((a, b) => b.year - a.year);

// console.table(filterCars);

//.....Перевірити, чи всі машини на складі доступні для продажу та створити новий масив, що містить лише моделі доступних машин.
// так як every повертає нам булеве значення, ми неможемо зробити з ним ланцюжок викликів
// const everyCarsSale = cars.every(car => car.amount > 0);
// console.table(everyCarsSale);

// const availableCars = cars.filter(car => car.amount > 0).map(car => car.model);
// console.table(availableCars);

//.....Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.
// const findOneCar = cars.find(car => !car.isSportCar && car.amount > 0)?.color;

// console.log(findOneCar);

// //....Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.

// const filterCars = cars
//   .filter(car => car.amount > 2 && car.price < 40000)
//   .reduce((acc, car) => {
//     return acc + car.price * car.amount;
//   }, 0);

// console.log(filterCars);

// //////.......Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.

// const filterCars = cars
//   .filter(car => car.type === 'SUV')
//   .toSorted((a, b) => a.year - b.year)
//   .map(car => car.model);

// console.log(filterCars);

////.....Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди цих машин.

// const filterIsSportCars = cars
//   .filter(car => car.isSportCar && car.price > 60000)
//   .toSorted((a, b) => b.price - a.price)
//   .map(car => car.brand);
// console.log(filterIsSportCars); ['Ferrari', 'Lamborghini', 'Porsche', 'BMW'];

///....Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин.

// const filterCars = cars
//   .filter(car => car.color === 'Red' && car.year > 2020)
//   .toSorted((a, b) => a.price - b.price)
//   .map(car => car.model);
// console.log(filterCars); //['Mustang', '488 GTB']

/////....Перевірити, чи всі машини заданої марки доступні для продажу та повернути масив, що містить лише кольори доступних машин.

// const everyCarsSale = cars.every(car => car.amount > 0);
// const availableCars = cars.filter(car => car.amount > 0).map(car => car.color);
// console.log(everyCarsSale);
// console.log(availableCars);

///....Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.

// const indexCar = cars.findIndex(car => car.price > 25000);
// const arrCarBrandAndModel = cars
//   .map(car => `${car.brand} - ${car.model}`)
//   .slice(2);

// console.log(indexCar);
// console.log(arrCarBrandAndModel);

//..Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.

// const filterCarsByPrice = cars
//   .filter(car => car.price > 40000 && car.price < 60000)
//   .toSorted((a, b) => b.year - a.year)
//   .map(car => car.model);

// console.log(filterCarsByPrice); //['Mustang', 'A4', 'RX', 'Camaro']

//.....Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.

// const onlyOneCar = cars.some(car => car.amount > 5 && car.price > 70000);
// console.log(onlyOneCar); // false

//...Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.
// const filterCarsByAmount = cars
//   .filter(car => car.amount > 0)
//   .toSorted((a, b) => b.amount - a.amount)
//   .map(car => `${car.brand} - ${car.model}`);
// console.log(filterCarsByAmount);
