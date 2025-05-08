//////      JSON
// Методи роботи з  JSON файлами

// JSON.stringify(); //заархівувати дані
// JSON.parse(); //Розархівувати дані

// //Приклад

// const user = {
//   username: 'Kateryna',
//   age: 33,
//   city: 'Lviv',
//   email: 'tsyhaniukkateryna@gmail.com',
// };

// const zip = JSON.stringify(user); //перетворили у формат JSON
// console.log(zip); //{"username":"Kateryna","age":33,"city":"Lviv","email":"tsyhaniukkateryna@gmail.com"}

// const str = `  {
//     "id": 1,
//     "title": "Spaghetti Carbonara",
//     "ingredients": ["spaghetti", "eggs", "bacon", "parmesan", "black pepper"],
//     "cookingTime": 20,
//     "image": "https://cdn.pixabay.com/photo/2017/12/09/08/18/spaghetti-3000077_1280.jpg"
//   }`;
// const data = JSON.parse(str);
// console.log(data); //{id: 1, title: 'Spaghetti Carbonara', ingredients: Array(5), cookingTime: 20, image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/spaghetti-3000077_1280.jpg'}

// //////////Помилки зі взаємодією з користувачем

// console.log('start');

// try {
//   console.log(x);
// } catch (error) {
//   console.log(error);
// }

// console.log('end');

////////////////        Local Storage -створений для зберігання корисної інформації

//Додаток -> локальна память
// ключ -значення

////////   Кладемо дані в локал сторедж
// localStorage.setItem('key', 'hello key'); //в додатку в нас зявився key-hello key

// const user = {
//   username: 'Kateryna',
//   age: 33,
//   city: 'Lviv',
//   email: 'tsyhaniukkateryna@gmail.com',
// };

// ////// перед тим як зберегти цей обєкт до локал сторидж потрібно заархівувати наші дані

// const userJson = JSON.stringify(user);
// localStorage.setItem('user', userJson);

//////////  дістаємо дані з локал сторедж

// const data = localStorage.getItem('user');
// const user = JSON.parse(data);
// console.log(user); // {username: 'Kateryna', age: 33, city: 'Lviv', email: 'tsyhaniukkateryna@gmail.com'}

// ///////////   видалення параметрів

// localStorage.removeItem('key'); //видаленя одного значення
// localStorage.clear(); //видалення всього що є в сховищі рідко викор

///////// Зберігання одразу к-кох обєктів до локал сторридж

// const user1 = {
//   username: 'Kateryna',
//   age: 33,
//   city: 'Lviv',
//   email: 'tsyhaniukkateryna@gmail.com',
// };

// const user2 = {
//   username: 'Olga',
//   age: 31,
//   city: 'Obyhiv',
//   email: 'yakumencoOlga@gmail.com',
// };

// const user3 = {
//   username: 'Galuna',
//   age: 51,
//   city: 'korsynca',
//   email: 'hlembaGaluna@gmail.com',
// };

// const user4 = {
//   username: 'Serhiy',
//   age: 55,
//   city: 'Talne',
//   email: 'hlembaSerhiy@gmail.com',
// };

// // saveToLS('user1', user1); // зберегли дані 1-го юзера
// // saveToLS('user2', user2);
// // saveToLS('user3', user3);
// // saveToLS('user4', user4);

// // function saveToLS(key, value) {
// //   const jsonData = JSON.stringify(value);
// //   localStorage.setItem(key, jsonData);
// // }

// //// отримання даних з локал сторидж

// // const data = localStorage.getItem('user1');
// // try {
// //   const user1 = JSON.parse(data);
// //   console.log(user1);
// // } catch (error) {
// //   console.log(error);
// // } /// це ми отримали user1

// /// тому напишемо функцію щоб діставати всіх

// // function loadFromLS(key) {
// //   const json = localStorage.getItem(key);
// //   try {
// //     const data = JSON.parse(json);
// //     return data;
// //   } catch {
// //     return json;
// //   }
// // }

// // const data1 = loadFromLS('user1');
// // console.log(data1);
// // const data4 = loadFromLS('user4');
// // console.log(data4);

// ///////////Збереження даних з форми
// //найкраще зберігати при події інпут

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('input', e => {
  //делегуємо інпут відразу на форму

  const formData = new FormData(form);
  const name = formData.get('name'); //дістаємо значення з інпутів
  const message = formData.get('message');
  const data = { name, message };

  saveToLS('name', name);
  saveToLS('message', message);
  saveToLS('data', data);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name'); //дістаємо значення з інпутів
  const message = formData.get('message');
  const data = { name, message };
  console.log(data);

  form.reset();
  localStorage.removeItem('name');
  localStorage.removeItem('message');
  localStorage.removeItem('data');
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

// тобто тепер під час перезавантаження сторінки дані зникають але не з локал стореджу, які ми можемо витягнути назад

window.addEventListener('DOMContentLoaded', () => {
  //тобто зараз наш сайт одразу завантажився

  const name = loadFromLS('name');
  const message = loadFromLS('message');

  form.elements.name.value = name || 'Anonymous';
  form.elements.message.value = message;
});

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
