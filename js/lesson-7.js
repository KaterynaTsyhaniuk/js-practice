//Методи для пошуку в DOM дереві

// ///////////////////////////////querySelector
// //Знаходимо елемент
// const magicBtn = document.querySelector('.js-magic-btn');
// console.log(magicBtn); // <button></button>
// //Можемо вивести  текст елемента
// console.log(magicBtn.textContent); // Magic button🧙‍♂️
// // ми можемо перевизначити значення
// magicBtn.textContent = 'Hello Btn'; // тобто тепер наша кнопка має назву Hello Btn

// const lastLiElem = document.querySelector('ul>li:last-child');
// console.log(lastLiElem); //знайшло останню li в нашому файлі

// //якщо querySelector незнайшов елемент - буде null;

// /////////////////////////////////     querySelectorAll
// знаходить всі елементи

// const listElem = document.querySelectorAll('ul a');
// console.log(listElem); // [a.site-nav__link, a.site-nav__link, a.site-nav__link]

// //оскільки це псевдо масив ми можемо пройтися по ньому циклом for
// for (const elem of listElem) {
//   console.log(elem.textContent); //About Portfolio Contacts
// }

// const listElement = document.querySelectorAll('a');
// console.log(listElement);
// console.log(listElement.length); //знайшли 4 <a></a>

/// якщо querySelectorAll нічого незнайшов то буде порожній масив []

//////////////////////////// Навігація по дом дереві:
// const liElem = document.querySelector('li');
// console.log(liElem); //<li>Перша лішка</li>

// ми можемо знайти її сусіда
// const sibling = liElem.nextElementSibling;
// console.log(sibling); // вивело <li>Другу лішку</li>
// // а якщо викличемо ще раз до ми отримаємо 3-тю лішку.

// // а якщо нам потрібно попередній елемент знайти:

// const prevSibling = liElem.previousElementSibling;
// console.log(prevSibling);

// // щоб звернутися до батька:
// const parent = liElem.parentElement;
// console.log(parent); // у лішки батьком буде = ul

// щоб знайти чілдренів

// const ulElement = document.querySelector('ul');
// const secondLiElem = ulElement.children[1];
// console.log(secondLiElem); // <li>друга лішка</li>

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// const imageElem = document.querySelector('.js-image');
// console.log(imageElem); //<img></img>
// console.log(imageElem.src); //https://....
// console.log(imageElem.width); //320

// // //але якщо ми хочемо працювати з властивостями нам потрібно використовувати методи
// // //........... setAtribute('test-ключ', 'test-значення')
// // console.log(imageElem.setAttribute('height', 320));
// // console.log(imageElem.height); // ми додали новий атрибут - висоту картинки

// // //..........getAtribute(те що хочемо вивести)
// // console.log(imageElem.getAttribute('alt')); // It's me

// ///  removeAttribute(elem) якщо хочемо видалити атрибут
// imageElem.removeAttribute('alt');
// console.log(imageElem); // тепер картинка в нас без алт

// // перевірка на наявність атрибута .hasAttribute()

// console.log(imageElem.hasAttribute('alt')); //false тобто немає

// /////////////////////////       Data-атрибути
// // щоб до них звернутися використовуємо .dataset
// const buttonsElem = document.querySelectorAll('button');
// const btnElem = buttonsElem[0];
// btnElem.dataset.value = 'hello world';
// console.log(btnElem); //зявився новий дата-value = 'hello world'

// //// текстконтент у інпута - у властивості value

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//                     classlist   MЕТОДИ

// const elem = document.querySelector('li');
// console.log(elem.classList.add('my-item')); // додавання додаткового класу
// const removeElem = elem.classList.remove('site-nav_item'); // видалили  клас у лішки

// // setInterval(() => {
// //   elem.classList.toggle('my-item');
// // }, 1000); /// тобто тут ми кожну секонду вмикаємо/вимикаємо клас

// // elem.classList.replace(_, _); // замінює один клас на інший

// if (elem.classList.contains('my-item')) {
//   //метод перевірки класу повертає true false
//   alert('Hello');
// } else {
//   alert('Bye');
// }

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Додаємо розмітку через insertAdjasterHTML
// const ulElem = document.querySelector('ul');
// console.log(ulElem);

// const liElem = `<li class='test_item'><a href='#'>TestLink</a></li>`;
// // ulElem.insertAdjacentHTML('beforeend', liElem);

//або ми можемо використати innerHTML коли ми хочемо очистити попередню розмітку

// ulElem.innerHTML = liElem;

// /////////////////////////////////////////
// const options = [
//   { label: 'червоний', color: '#F44336' },
//   { label: 'зелений', color: '#4CAF50' },
//   { label: 'синій', color: '#2196F3' },
//   { label: 'сірий', color: '#607D8B' },
//   { label: 'рожевий', color: '#E91E63' },
//   { label: 'індіго', color: '#3F51B5' },
// ];
// const colorPickerContainer = document.querySelector('.js-color-picker');
// console.log(colorPickerContainer);
// // якщо масив обєктів то потрібно 2 функції
// // якщо один обєкт то 1 функція

// function colorTemplate(colorObj) {
//   return `<div>${colorObj.label}</div>`;
// } //однина
// function colorsTemplate(arr) {
//   return arr.map(colorTemplate).join('\n');
// } //множина

// const markup = colorsTemplate(options);
// console.log(markup);

// console.log(colorPickerContainer);
// colorPickerContainer.innerHTML = markup;

////////////////////////////////////////////////
const cars = [
  {
    brand: 'Hyundai',
    model: 'Elantra',
    year: 2021,
    color: 'White',
    price: 22000,
    amount: 4,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    color: 'Red',
    price: 45000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Bugatti',
    model: 'Chiron',
    year: 2022,
    color: 'Blue',
    price: 3000000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Volkswagen',
    model: 'Passat',
    year: 2020,
    color: 'Black',
    price: 25000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Chevrolet',
    model: 'Tahoe',
    year: 2021,
    color: 'Gray',
    price: 55000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'BMW',
    model: 'X5',
    year: 2022,
    color: 'White',
    price: 75000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Peugeot',
    model: '208',
    year: 2019,
    color: 'Yellow',
    price: 18000,
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Ford',
    model: 'Explorer',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Renault',
    model: 'Clio',
    year: 2021,
    color: 'Red',
    price: 17000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Alfa Romeo',
    model: 'Giulia Quadrifoglio',
    year: 2022,
    color: 'Green',
    price: 80000,
    amount: 1,
    isSportCar: true,
    type: 'Sedan',
  },
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

// const ulElem = document.querySelector('.car-list');
// console.log(ulElem);

// function carTemplate(car) {
//   const myClass = car.isSportCar ? 'sport-car' : '';
//   return ` <li class="car-item ${myClass}">
// <img src="https://picsum.photos/400/300?random=${car.model}" />
//             <h5>${car.brand} ${car.model}</h5>
//             <p>Year: ${car.year}</p>
//             <p>Color: ${car.color}</p>
//             <p>Price: ${car.price}</p>
//             <p>Type: ${car.type}</p>
//         </li>`;
// }

// function carsTemplate(arr) {
//   return arr.map(carTemplate).join('');
// }

// const markup = carsTemplate(cars);

// ulElem.innerHTML = markup;

/////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     genre: 'Novel',
//     pages: 218,
//     isClassic: true,
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: 'J.K. Rowling',
//     year: 1997,
//     genre: 'Fantasy',
//     pages: 309,
//     isClassic: false,
//   },
//   {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960,
//     genre: 'Novel',
//     pages: 281,
//     isClassic: true,
//   },
//   {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     year: 1937,
//     genre: 'Fantasy',
//     pages: 310,
//     isClassic: true,
//   },
// ];

// const ulElemBooks = document.querySelector('.book-list');
// console.log(ulElemBooks);

// function bookTemplate(book) {
//   const myClass = book.isClassic ? 'classic' : '';
//   return `<li class="book-item ${myClass}">
//    <img src="https://picsum.photos/200/300?random=${book.title}" alt="${book.title}" />
//   <h5>${book.title}</h5>
//  <p>Author: ${book.author}</p>
//  <p>Genre: ${book.genre}</p>
//  <p>Year: ${book.year}</p></li>`;
// }

// function booksTemplate(arr) {
//   return arr.map(bookTemplate).join('');
// }

// const markup = booksTemplate(books);
// ulElemBooks.innerHTML = markup;

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
// const fruits = [
//   {
//     name: 'Apple',
//     color: 'Red',
//     isSeasonal: false,
//   },
//   {
//     name: 'Banana',
//     color: 'Yellow',
//     isSeasonal: false,
//   },
//   {
//     name: 'Strawberry',
//     color: 'Red',
//     isSeasonal: true,
//   },
//   {
//     name: 'Orange',
//     color: 'Orange',
//     isSeasonal: true,
//   },
// ];

// const ulElemFruit = document.querySelector('.fruit-list');
// console.log(ulElemFruit);

// function fruitTemplate(fruit) {
//   const myFruitClass = fruit.isSeasonal ? 'season' : '';
//   return `<li class="fruit-item ${myFruitClass}"><img src='https://picsum.photos/200/300?random=${fruit.name}'alt='${fruit.name}'><h5>${fruit.name}</h5><p>${fruit.color}</p></li>`;
// }

// function fruitsTemplate(arr) {
//   return arr.map(fruitTemplate).join('');
// }

// const markup = fruitsTemplate(fruits);
// ulElemFruit.innerHTML = markup;

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

///////////       Прослуховувачі подій

//////////        Подія click

// const btnElem = document.querySelector('.js-click');
// btnElem.addEventListener('click', handleBtnElemClick); //створили помічника який відслідковує клік

// function handleBtnElemClick() {
//   //інструкція для прослуховувача
//   console.log('hello click');
// }

// //тепер при натисканні на кнопку ми в консолі бачимо hello click

// function handleBtnElemClick() {
//   //інструкція для прослуховувача
//   btnElem.classList.toggle('btn-box');
// }
// // тут при натисканні на кнопку змінюється її клас -бордер на інший колір

// /////////////////////////////////////////////////////

// const btnElem1 = document.querySelector('.js-click');
// console.log(btnElem1); //знайшли кнопку

// const boxElem = document.querySelector('.js-box');
// console.log(boxElem); //знайшли наш квадрат

// const position = {
//   x: 10,
//   y: 100,
// };

// btnElem1.addEventListener('click', () => {
//   position.x += 10;
//   position.y += 10;
//   boxElem.style.left = `${position.x}px`;
//   boxElem.style.top = `${position.y}px`;
// });
// /// тепер наш квадрат змінює свою позицію при кожній зміні кліку

// const addBtnElem = document.querySelector('.js-add');
// const testBtnElem = document.querySelector('.js-test');
// const removeBtnElem = document.querySelector('.js-remove');

// addBtnElem.addEventListener('click', () => {
//   console.log('hello add');
//   testBtnElem.addEventListener('click', handleTestBtnElemClick);
// });

// removeBtnElem.addEventListener('click', () => {
//   console.log('hello remove');
//   testBtnElem.removeEventListener('click', handleTestBtnElemClick);
// });

// function handleTestBtnElemClick() {
//   console.log('Hello test');
// }

//тепер коли ми натискаємо кнопку add починає працювати кнопка test, якщо ми натиснемо кнопку ремув, кнопка тест перестане працювати)

//////////////////////////////////////////////////
/////////////////////////////////////////////////
////                    подія input

// const inputElem = document.querySelector('.js-user-name');
// console.log(inputElem);

// const btnInputElem = document.querySelector('.js-btn');
// console.log(btnInputElem);

// inputElem.addEventListener('input', handleInputElemChange);

// function handleInputElemChange() {
//   console.log('hello'); //тобто коли ми починаємо дукувати з кожним інпутом в нас буде зявлятися слово hello
// }

// ///як в консоль виводити значення з інпуту??????
// function handleInputElemChange() {
//   const value = inputElem.value;
//   console.log(value);

//   if (value.length > 6) {
//     inputElem.classList.add('valid');
//     inputElem.classList.remove('invalid');
//     btnInputElem.disabled = false;
//   } else {
//     inputElem.classList.add('invalid');
//     inputElem.classList.remove('valid');
//     btnInputElem.disabled = true;
//   }
// } //тобто якщо довжина в нас менша за 6, кнопка наша небуде активна, якщо більше - буде активна

////////////////////////////////////////////////////
///////////////////////////////////////////////////
////               подія focus

// const inputElem = document.querySelector('.js-user-name');
// console.log(inputElem);

// const btnInputElem = document.querySelector('.js-btn');
// console.log(btnInputElem);

// inputElem.addEventListener('focus', () => {
//   console.log('hello focus'); //коли ми сфокусувалися на інпуті
// });

// //////////////////   подія blur

// inputElem.addEventListener('blur', () => {
//   console.log('hello blur'); // коли ми розфокусувалися
// });

////////////////////////////////////////////////////
/////////////////     додія Форма

// const formElem = document.querySelector('.js-form');

// formElem.addEventListener('submit', event => {
//   //event - обєкт в ньому зберігається корисна інфо про подію яка відбулася
//   event.preventDefault(); //перестати оновлювати сторінку під час сабміту

//   console.log(formElem.elements); //зберігає властивості з якими можемо взаємодіти

//   const email = formElem.elements.email.value;
//   console.log(email); //kyzkakatryska@gmail.com при сабміті!!!
//   const password = formElem.elements.password.value;
//   console.log(password); //1234567890   при сабміті
//   const comment = formElem.elements.comment.value;
//   console.log(comment); // hello Katerynka  при сабміті!!!

//   /// щоб зібрати все до купки

//   const data = { email, password, comment };
//   console.log(data); //{email: 'kyzkakatryska@gmail.com', password: '0987654321', comment: 'test'}
// });

/// або скорочено

// formElem.addEventListener('submit', e => {
//   e.preventDefault();

//   const formData = new FormData(formElem); // помічник який працює з формою

//   const data = {
//     email: formData.get('email'),
//     password: formData.get('password'),
//     comment: formData.get('comment'),
//   };
//   console.log(data); //{email: 'kyzkakatryska@gmail.com', password: '123567', comment: 'hello'}
// });

// якщо у вашій формі дуже багато полів:

// formElem.addEventListener('submit', e => {
//   e.preventDefault();

//   const formData = new FormData(formElem); // помічник який працює з формою
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key] = value;
//   }); //проходиться по всіх полях
//   console.log(data);

//   formElem.reset(); // очищення форми
// });

//////////////////////////////////////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////////
////////////////////////////////////////////////////

// події keydown, keypress, keyup

// document.addEventListener('keydown', e => {
//   console.log('keydown', e.code, e.key);
// }); //keydown KeyG п , keydown KeyG g  в залежності від розкладки мови

// document.addEventListener('keypress', e => {
//   console.log('keypress', e.code, e.key);
// });

// document.addEventListener('keyup', e => {
//   console.log('keyup', e.code);
// });

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// події миші  mouseenter   mouseleave  mousemove

///////////////////////////////////////////////////////////

//Потрібно створити розмітку автомобілів, також створити пошук авто за властивостями

//спершу знайдемо елементи з якими будемо працювати і збережемо їх до обєкту

// const refs = {
//   formEllem: document.querySelector('.js-form'),
//   containerElem: document.querySelector('.js-list'),
// };

// /////////// Пошук у формі та сабміт

// refs.formEllem.addEventListener('submit', e => {
//   e.preventDefault();

//   const formData = new FormData(refs.formEllem);
//   const query = formData.get('query').toLowerCase().trim();
//   const type = formData.get('type');

//   const filtered = cars.filter(car => {
//     const isValidName = car.brand.toLowerCase().includes(query); //фільтруємо за брендом машини
//     const isValidType = type === 'all' || car.type.toLowerCase() === type;
//     return isValidName && isValidType; //перевірка за двома умовами
//   });

//   const markup = carsTemplate(filtered);
//   refs.containerElem.innerHTML = markup;
// });

// ///////////РЕДЕР

// function carTemplate(car) {
//   return `<li class="car-item">
//   <img src="https://picsum.photos/400/300?random=${car.model}" />
//   <div class="car-info">
//   <h3>${car.brand}</h3>
//   <p>Type: ${car.type}</p>
//   <p>Price: ${car.price}</p>
//   </div>
//   </li>`;
// }

// function carsTemplate(cars) {
//   return cars.map(carTemplate).join('\n');
// }
