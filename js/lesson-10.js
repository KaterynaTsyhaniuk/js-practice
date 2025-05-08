///////////////////////   Проміси

// const promise = new Promise((resolve, reject) => {
//   console.log('Hello promise');

//   setTimeout(() => {
//     // reject(); // поверніть гроші
//     resolve(); // ням ням
//   }, 5000);
// });

// console.log(promise);

//для того щоб створити проміс ми створюємо помічника, передаємо йому колбек функцію, в якій дві кнопки зелена-куіщдму і червона-reject.

///////////////////////// Проміс зі сторони клієнта

// promise.then(onFulfilled, onRejected);

// function onFulfilled() {
//   console.log('ням ням');
// }

// function onRejected() {
//   console.log('Поверніть гроші');
// }

///////// опрацювання промісу через  then та catch(ловить помилку)

// promise
//   .then(() => { //then виконає функцію коли проміс засвітиться зеленим = resolve
//     console.log('ням ням');
//   })
//   .catch(() => {
//     console.log('Поверніть гроші');
//   });

// ////////  дублювання коду можна обєднати у finally

// promise
//   .then(() => {
//     //
//     console.log('ням ням');
//   })
//   .catch(() => {
//     console.log('Поверніть гроші');
//   })
//   .finally(() => {
//     console.log('Гарного дня'); /// використовується рідко
//   });

///////////////////////////////////////////////////////////////

function createPromise(value, delay, status) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve(value);
      else reject(value);
    }, delay);
  });
  return promise;
}

const p1 = createPromise('Data 1', 5000, true);
const p2 = createPromise('Data 2', 1000, true);
const p3 = createPromise('Data 3', 3000, true);
const p4 = createPromise('Data 4', 2000, false);
const p5 = createPromise('Data 5', 4000, true);

const arr = [p1, p2, p3, p4, p5]; //масив промісів
// console.log(arr);

// const res1 = Promise.all(arr); //товариш який взяв результат і поклав у новий масив і повернув мені масив результатів якщо всі зелені
// console.log(res1); //

// res1
//   .then(data => {
//     console.log(data); //['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5']
//   })
//   .catch(err => {
//     console.log(err); // відловили Data 4=false на якому сталася помилка
//   }); // тобто якщо є хочаб одна помилка тоді завдання невиконано

// //////////////////////////////////////////////////////////////////////

// const res2 = Promise.allSettled(arr).then(data => {
//   console.log(data); // повертає будь який результат, позитивний та негативний
// });

// console.log(res2); // [{f}, {f}, {f}, {r}, {f}]  тобто всеж 4-й має помилку

////////////////////////////////////////////////////////////////////////

const res3 = Promise.race(arr)
  .then(data => {
    //виведе перший результат який повернеться позитивний або негативний який перший по часу
    console.log(data); //  ('Data 2', 1000, true)
  })
  .catch(err => {
    console.log(err);
  });

console.log(res3);

/////////////////////////////////////////////////////////////////////////
