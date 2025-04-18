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
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 0,
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
///////////////////// map             // не змінює оригінальний масив
// const res = cars.map((car, i, arr) => {
//   return `${car.brand} - ${car.price}$`; //'Toyota - 25000$'
// });

// console.log(res);

/////////////////////////////Щоб змінити щось в масиві потрібно зробити її копію
// const MakeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     const copy = { ...car };

//     copy.price += 1 - discount;
//     return copy;
//   });
// };

// console.table(MakeCarsWithDiscount(cars, 0.2));
// console.table(MakeCarsWithDiscount(cars, 0.5));

// //////////////////
// // метод Map()= змінює КОЖЕН елемент
// // метод  filter = шукає елементи які задовільняють певно умову
// // метод find = шукає один елемент
// // метод every = дає відповіть про велику к-ть ел true false
// // метод some = чи є хоть один елемент який задов умову true false

// ////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////
// const numbers3 = [2, 45, 6, 23, 8, 9, 89, 45, 23, 21, 56, 78, 34];

// const findNumbers3 = numbers3.find(el => el % 2 === 0);

// console.log(findNumbers3); //2  тобто нам повернули перший знайдений ел який ділиться на 2

//////////////////////////////

// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model);
// };

// console.log(getCarByModel(cars, 'Focus')); // {brand: 'Ford', model: 'Focus', year: 2021, color: 'blue', price: 16000}

/////////////////////////////////

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

// ////////////////////////////////////////////////////

// const isOneOnline = players.some(player => player.online);

// console.log(isOneOnline); // true тобто перший знайти який online

////////////////////////////////////////////////////

////////////////           metod Reduce

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

///////////////////////

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

//Відсортувати машини за роком випуску (від найстарішого до найновішого)////////

// const sortedCars = cars.toSorted((a, b) => {
//   return a.year - b.year;
// });
// console.table(sortedCars); // відсортувало від 2018 до 2022 років

//Знайти найдорощу машину//////////////////////////////

// const expensiveCar = cars.reduce((maxCar, car) => {
//   return car.price > maxCar.price ? car : maxCar;
// });

// console.log(expensiveCar);

//Знайти всі машини заданої марки (наприклад, Toyota)/////

// const brandCars = cars.filter((car, i, arr) => {
//   return car.brand === 'Toyota';
// });

// console.log(brandCars);

//Порахувати загальну кількість машин усіх типів /////////

// const totalAmount = cars
//   .map((car, i, arr) => {
//     return car.amount;
//   })
//   .reduce((acc, el) => {
//     return acc + el;
//   }, 0);

// console.log(totalAmount);

// //////////////////////////////////////////////////////////

// // Відсортувати машини за ціною (від найдешевшої до найдорожчої).

// const sortByPrice = cars.toSorted((a, b) => {
//   return a.price - b.price;
// });

// console.table(sortByPrice);
////////////////////////////////////////////////////////////////
///Знайти всі машини певного типу (наприклад, SUV).

// const filterByType = cars.filter((car, i, arr) => {
//   return car.type === 'SUV';
// });

// console.table(filterByType);

//////////////////////////////////////////////////////////////////
// Знайти всі машини певного кольору та року випуску

// const carsByColorAndYear = cars.filter((car, i, arr) => {
//   return car.color === 'White' && car.year === 2021;
// });

// console.table(carsByColorAndYear);

////////////////////////////////////////////////////////////////////

//Порахувати середню ціну всіх машин.

// const averageCarsPrice =
//   cars.reduce((acc, car, i, arr) => {
//     return acc + car.price;
//   }, 0) / cars.length;

// console.log(averageCarsPrice);

//Знайти всі машини, у яких кількість на складі більша за 0.

// const carsAmount = cars.filter(car => car.amount > 0);

// console.log(carsAmount);

//Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.

// const filterCarsByPriceAndYear = cars.filter(
//   car => car.price > 30000 && car.year > 2020,
// );
// console.table(filterCarsByPriceAndYear);

///////////////////////////////////////////////////////////////////

//Порахувати сумарну кількість всіх машин заданої марки.
// const brand = 'Toyota';
// const carsBrandTotal = cars
//   .filter(car => car.brand === brand)
//   .reduce((acc, car, i, arr) => acc + car.amount, 0);
// console.log(carsBrandTotal); // 9 шт в складах

/////////////////////////////////////////////////////////////
///Відсортувати машини за кількістю на складі (від найбільшої до найменшої).

// const sordedCarsByAmount = cars.toSorted((a, b) => {
//   return b.amount - a.amount;
// });
// console.table(sordedCarsByAmount); //від 6 шт  до 0 шт

/////////////////////////////////////////////////////////////////
// Знайти всі машини, які не є спортивними та доступні для продажу.
// const filterCarsBySalary = cars.filter(
//   car => !car.isSportCar && car.amount > 0,
// );
// console.table(filterCarsBySalary);

//////////////////////////////////////////////////////////////////////

//Порахувати загальну вартість всіх машин складі.
// const totalAmountCarsPrice = cars.reduce((acc, car, i, arr) => {
//   return acc + car.price * car.amount;
// }, 0);

// console.log(totalAmountCarsPrice); //2556000
