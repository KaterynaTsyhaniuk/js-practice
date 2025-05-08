///////////         Деструктуризація обєктів

// const user = {
//   username: 'Margaret',
//   age: 6,
//   city: 'Lviv',
//   country: 'Ukraine',
//   isSchoolChild: true,
//   skills: {
//     paint: true,
//     dance: true,
//     cooking: false,
//   },
// };

// коли нам потрібно дістати властивість без деструктуризації ми:

// const userName = user.username;
// console.log(userName); //Margaret
// const userCity = user.city;
// console.log(userCity); //Lviv     і так далі

// деструкуризація це можливість швидко дістати властивість з обєкта:

// const { username } = user   // = const userName = user.username;
// const { city } = user         // = const userCity = user.city;
// const { username, age, city, country, isSchoolChild, skills } = user;
// console.log(age);

/////     Поглиблена деструктуризація
// const {
//   skills: { paint, dance, cooking },
// } = user;
// console.log(paint);

// ///////    Приклади застосування  з операцією rest(який збирає новий обєкт)

// // потрібно вивести в консоль окремо name і окремо інші властивості
// const travel = {
//   travelName: 'Мачу-Пікчу',
//   country: 'Перу',
//   city: 'Куско',
//   isWorldWonder: true,
//   activities: ['Піші походи', 'Археологія', 'Природа'],
//   image:
//     'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg',
// };

// const { travelName, ...myTravel } = travel; // тобто тпер ми маємо ще додатковий обєкт з іншими властивостями окрім імя
// console.log(travelName); // тобто ми ніби створили новий обєкт без якоїсь властивості
// console.log(myTravel);

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

// /////////           Деструктуризація  Масиву

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [x1, x2, x3] = arr; // = const x1=arr[0] const x2=arr[1] const x3=arr[2]
// console.log(x1); // 1

// const [y1, y2, y3] = [10, 25, 30]; // тобто до змінної y1 записалось число 10
// console.log(y1); //10
