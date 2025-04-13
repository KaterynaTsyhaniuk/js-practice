////////////////    Обєкти

// const user = {
//   name: 'kateryna',
//   age: 33,
//   iswork: false,
//   weight: 65,
//   city: 'lviv',
// };

// console.log(user.age); // 33
// console.log(user.location); //undefined

// console.log(user['name']); // kateryna

// ///////////////первизначення

// user.name = 'olga';
// user.age -= 2;
// user.iswork = true; //тобто тепер в нашого обєкта змінилися значення на нові
// console.log(user);

/////////////   ітерація по обєкту   for in

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(key, feedback[key]); // good 5   neutral 10 bad 3
//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback', totalFeedback); //18

//////////////////////////         for of
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const value of Object.values(feedback)) {
//   totalFeedback += value;
// }

// console.log(totalFeedback); // 18

/////////////////////////////////////////////

// const salaries = {
//   john: 100,
//   ann: 130,
//   petr: 160,
// };

// let total = 0;
// for (const salary of Object.values(salaries)) {
//   total += salary;
// }
// console.log(total);

///////////////////////////////////////////////////

// function isEnoughtCapacity(products, containerSize) {
//   let totalSize = 0;
//   for (const value of Object.values(products)) {
//     totalSize += value;
//   }
//   //   console.log(totalSize);
//   return totalSize < containerSize;
// }

// const products = {
//   apples: 2,
//   grapes: 4,
// };
// console.log(isEnoughtCapacity(products, 5));
// false; // 6<5  не вірно

//////////////////              Масив обєктів

// /
// } /// просто перебрали всі обєкти
// /////////////////////////////   або
// for (let i = 0; i < friends.length; i++) {
//   console.log(`${friends[i].name} - ${friends[i].online}`);
// }

// for (const friend of friends) {
//   if (friend.online !== true) {   ///===true
//     console.log(friend);
//   }
// }

// for (const friend of friends) {
//   friend.online = !friend.online;
// }
// console.log(friends);

///////////////////////////////////////////////////////////

//// пошук за значенням обєкта
// const friends = [
//   { name: 'Mango', online: false, price: 10, amount: 3, model: 2 },
//   { name: 'Kivi', online: true, price: 20, amount: 200, model: 1 },
//   { name: 'Poly', online: false, price: 30, amount: 50, model: 2 },
//   { name: 'Ajax', online: false, price: 40, amount: 400, model: 1 },
// ];
// function findFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return friend;
//     }
//   }
//   return 'We dont have this toys';
// }

// function findFriendByPrice(allFriends, price, minAmount) {
//   for (const friend of allFriends) {
//     if (friend.price <= price && friend.amount > minAmount) {
//       return friend;
//     }
//   }

//   return 'We dont have this toys';
// }

// console.log(findFriendByPrice(friends, 50, 5)); // знайшло першу яка підходить

// function findFriendByPrice(allFriends, price, minAmount) {
//   const res = [];
//   for (const friend of allFriends) {
//     if (friend.price <= price && friend.amount > minAmount) {
//       res.push(friend);
//     }
//   }

//   return res;
// }

// console.log(findFriendByPrice(friends, 40, 100)); // знайшло 2

/////////////////////////////////////////////////////

// const friends = [
//   { name: 'Mango', online: false, price: 10, amount: 3, model: 2 },
//   { name: 'Kivi', online: true, price: 20, amount: 200, model: 1 },
//   { name: 'Poly', online: false, price: 30, amount: 50, model: 2 },
//   { name: 'Ajax', online: false, price: 40, amount: 400, model: 1 },
// ];

// function getModel(friends) {
//   const res = [];
//   for (const friend of friends) {
//     res.push(friend.model);
//   }

//   return res;
// }

// console.log(getModel(friends)); ///[2,1,2,1]

//////////////////////////////////////////////////////////////

// function getMarKap(friends) {
//   const result = [];
//   for (const friend of friends) {
//     result.push(`<li>${friend.name}</li>`);
//   }
//   return result.join('\n');
// }

// console.log(getMarKap(friends));
////////////////////////////////// Методи обєктів

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
/////////////////////////////////////////////////////
// const car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   year: 2020,
//   color: 'white',
//   price: 15000,

//   changeBrand(newBrand) {
//     this.brand = newBrand;
//   },
// };

// car.changeBrand('Kia');
// console.log(car);
//////////////////////////////////////////////////////////
// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName('Margarets playlist');
// console.log(playlist);
// playlist.addTrack('new-track');
// console.log(playlist);
// playlist.updateRating(9);

////////////////////  Оператор Rest

// function getTotal(...numbers) {
//   ///пилосос який збирає все до купи
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }
// console.log(getTotal(1, 2, 3, 4, 5));

//////////////////////   Spred Оператор

// const numbersNew = [9, 7, 5, 8, 4, 3, 6, 2, 1];

// const copyNumbers = [...numbersNew]; // висипає або розкидає в нову коробку
// console.log(copyNumbers); // [9, 7, 5, 8, 4, 3, 6, 2, 1]

///////////////////////////

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const newArray = [...arr1, ...arr2, ...arr3];
// console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//////////////////////////////////////////////////////

// const temps = [34, 56, 89, 43, 23, 13, 17, 87, 45];
// const min = Math.min(...temps);
// console.log(min); //13
// const max = Math.max(...temps);
// console.log(max); //89

/////////////////////////////////////////////////////////

// const type = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     const obj = {
//       id: Math.random(),
//       type,
//       amount,
//     };
//     return obj;
//   },
//   deposit(amount) {
//     if (this.amount <= 0) return;
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, type.DEPOSIT);
//     this.transactions.push(transaction);
//   },
//   withdraw(amount) {
//     if (this.balance < amount && amount < 0) return;
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, type.WITHDRAW);
//     this.transactions.push(transaction);
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//       if (item.id === id) return item;
//     }
//     return null;
//   },
//   getTransactionTotal(type) {
//     const res = [];
//     for (let item of this.transactions) {
//       if (item.type === type) {
//         res.push(item);
//       }
//     }
//     return res;
//   },
// };

// console.log(account);
// account.deposit(100); //+100
// account.deposit(500); // +500
// account.withdraw(300); // -300 = 300
// account.deposit(1000);

// console.log(account.getBalance());
// console.log(account.getTransactionTotal(type.DEPOSIT));

/////////////////////////////////////////////////////

// function isEnoughCapacity(products, containerSize) {
//   let total = 0;
//   for (const value of Object.values(products)) {
//     total += value;
//   }
//   return total < containerSize;
// }
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
//////////////////////////////////////////////////////////////////

// function calcAverageCalories(days) {
//   let allCalories = 0;
//   let averageCalories = 0;
//   for (const day of days) {
//     allCalories += day.calories;
//   }
//   return (averageCalories = allCalories / 7);
// }

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ]),
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ]),
// ); // 2270

// console.log(calcAverageCalories([])); // 0

///////////////////////////////////////////////////////////////////
// const profile = {
//   username: 'Jacob',
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };
// console.log(profile.getInfo());
// profile.changeUsername('Marco');
// console.log(profile);

// profile.updatePlayTime(20);
// console.log(profile);
// console.log(profile.getInfo());

///////////////////////// практика

// const book = {
//   title: '',
//   author: '',
//   year: 0,
// };

// console.log(book);
// book.year = 2025;
// console.log(book);
// book.genre = 'Novella';
// console.log(book);
//////////////////////////////
// const user = {
//   name: 'Olena',
//   age: 29,
//   city: 'Lviv',
//   isAdmin: false,
// };

// const res = [];
// for (const value of Object.values(user)) {
//   res.push(value);
// }

// console.log(res);
////////////////////////////////////

// const cars = [
//   {
//     brand: 'Subaru',
//     mileage: 100000,
//     year: 2020,
//     getInfo() {
//       return `Brand: ${this.brand}, Year: ${this.year}, Mileage: ${this.mileage} km'`;
//     },
//   },
//   {
//     brand: 'Chevrolet',
//     mileage: 220000,
//     year: 2018,
//     getInfo() {
//       return `Brand: ${this.brand}, Year: ${this.year}, Mileage: ${this.mileage} km'`;
//     },
//   },
//   {
//     brand: 'Tesla',
//     mileage: 60000,
//     year: 2022,
//     getInfo() {
//       return `Brand: ${this.brand}, Year: ${this.year}, Mileage: ${this.mileage} km'`;
//     },
//   },
// ];

// for (const car of cars) {
//   console.log(car.getInfo());
// }

///////////////////////////////////////////////////////////////////

// const user = {
//   name: 'Olena',
//   email: 'olena@example.com',
//   messages: ['Hi!', 'How are you?', 'Let’s meet.'],
//   getSummary() {
//     return `User ${this.name} has ${this.messages.length} messages.`;
//   },
// };

// console.log(user.getSummary());
// // "User Olena has 3 messages."

/////////////////////////////////////////////////////////

// const movie = {
//   title: 'Inception',
//   year: 2010,
//   genre: 'Sci-Fi',
//   actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
//   rating: 8.8,
// };

// function getMovieDetails(movie) {
//   const { title, year, genre, ...other } = movie;
//   console.log(movie);

//   return {
//     info: `Movie: ${title} (${year}), Genre: ${genre}`,
//     other,
//   };
// }

// console.log(getMovieDetails(movie));
///////////////////////////////////////

// function splitUserData(user) {
//   const { name, email, ...other } = user;
//   return {
//     contact: `Name: ${name}, Email: ${email}`,
//     details: other,
//   };
// }

// const user = {
//   name: 'Sofia',
//   age: 25,
//   email: 'sofia@example.com',
//   city: 'Kyiv',
//   isOnline: true,
// };

// console.log(splitUserData(user));

////////////////////////////////////////////////////////////////
// const profile1 = {
//   firstName: 'Anna',
//   lastName: 'Petrenko',
//   age: 30,
// };

// const profile2 = {
//   city: 'Lviv',
//   email: 'anna.petrenko@example.com',
// };

// function mergeProfiles(profile1, profile2) {
//   const { firstName, lastName, ...restProfile } = profile1;
//   return {
//     fullName: `${firstName} ${lastName}`, //поєднує 2 рядки в один
//     ...restProfile, //розпилення решти властивостей з profile1 (age,location)
//     ...profile2, //це знову розпилення але тепер з обєкта profile 2, якщо повторюються властивості, то вони перезапишуться, останнє значення перемагає
//   };
// }

// console.log(mergeProfiles(profile1, profile2));
// {fullName: 'Anna Petrenko', age: 30, city: 'Lviv', email: 'anna.petrenko@example.com'}

/////////////////////////////////////////////////////////////////////////
// const userMain = {
//   firstName: 'Olena',
//   lastName: 'Ivanova',
//   city: 'Kyiv',
//   age: 25,
// };

// const userUpdate = {
//   city: 'Lviv',
//   email: 'olena@example.com',
// };

// function mergeUserInfo(main, update) {
//   const { firstName, lastName, ...restInfo } = main;
//   return {
//     fullname: `${firstName} ${lastName}`,
//     ...restInfo,
//     ...update,
//   };
// }

// console.log(mergeUserInfo(userMain, userUpdate));

//{fullname: 'Olena Ivanova', city: 'Lviv', age: 25, email: 'olena@example.com'}

////////////////////////////////////////////////////////////////////////////////
const defaultSettings = {
  theme: 'light',
  notifications: true,
  compactMode: false,
};

const userSettings = {
  theme: 'dark',
  compactMode: true,
};

function applySettings(defaults, updates) {
  const allSettings = { ...defaults, ...updates }; // обєдднання через spred
  console.log(allSettings);
  if (Object.keys(updates).length === 0) {
    return false;
  } else {
    allSettings.updated = true; // додаємо updated якщо не порожній обєкт
    return allSettings; /// повертаємо новий обєкт
  }
}

applySettings(defaultSettings, userSettings);
