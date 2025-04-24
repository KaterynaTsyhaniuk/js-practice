///////////////////////////  Глобальний Контекст ---- THIS
// function foo() {
//   console.log(this); //undefined
// }
// foo(); //тут ніхто невикликає функцію, тому і undefined

// /////////////// Контекст методу обєкта
// const dog = {
//   name: 'Lord',
//   sayHello() {
//     console.log(this);
//   },
// };
// const cat = {
//   name: 'Rudik',
//   sayHello() {
//     console.log(this);
//   },
// };

// dog.sayHello(); //тут функцію викликає dog
// cat.sayHello(); // тут функцію викликає cat

// /////////////////////////////////////////////////////////////////
// function x() {
//   console.log(this);
// }
// const y = x; // y це ніби ярлик нашої функції x
// y();
// x();
// /////////////////////////////////////////////////////////////////
// function showTag() {
//   console.log(this);
// }
// const mango = {
//   tag: 'Mango',
//   test: showTag,
// };

// mango.test(); /// this це mango

//////////////////////////////////////////////////////////////////

// const user1 = {
//   name: 'Vasya',
// };
// const user2 = {
//   name: 'Olga',
// };
// const user3 = {
//   name: 'Katya',
// };

// function sayHallo() {
//   console.log(this);
// }
// sayHallo(); // this - undefined
// sayHallo.call(user3); //katya;
// sayHallo.apply(user1); //Vasya

///////////////////////////////////////////////////////////////////
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };
// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'red');
// changeColor.call(hat, 'white');
// console.log(sweater); // {color: red}

// ////////////////////////     Замикання

// function getCalc(firstName) {
//   function calc(a, b) {
//     console.log(firstName, a + b);
//   }
//   return calc;
// }

// const calc1 = getCalc('Volodka'); /// тобто ми в цій функції замкнули, зберегли змінну яка нам потрібна
// calc1(10, 20);

///////
////// 1.Який тип функції:
//-якщо звичайна - дивитися момент виклику
//-якщо стілчата - дивимося і визначаємо контекст батьківської функції

// function foo() {
//   const arrow = () => {
//     console.log(this);
//   };
//   arrow();
// }

// foo(); // undefined
// foo.call({ name: 'vasay' });

//////////////////////////////////////////////////////////////////////////

/////////                    ПРОТОТИП

// const arr = [];
// console.log(arr); //прототип нашого arr тобто його батько має безліч метоів

/////////////                КЛАСИ

/// Клас - це ніби завод який виготовляє екземпляри

// class User {
//   /// оголошення класу
//   constructor(name, age, city, country) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//   }
// }
// class User {
//   constructor(name, age, city, country) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//   }
//   showInfo() {
//     const info = `Name: ${this.name} Age: ${this.age}`;
//     console.log(info);
//   }
//   showName() {
//     console.log('Name:', this.name);
//   }
//   setAge(newValue) {
//     this.age = newValue;
//   }
// } /// тепер в нашого юзера зявилися методи

// const userExempl = new User('Katya', 33, 'Lviv', 'Ukraine'); //// створення екземпляру
// console.log(userExempl); //User {consolename: 'Katya', age: 33, city: 'Lviv', country: 'Ukraine'}

// //можемо створити всередині класу додаткові методи:

// userExempl.showInfo();

////////////////////////// приватні властивості
//     #test      // приватну властивість неможна змінювати - приватна  - записуємо перд конструктором
// інкапсуляція  -- приховування властивості

/**
 * Напиши клас User для створення об'єкта блогера з наступними властивостями:
 *  - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: User ${email} is ${age} years old and has ${numPosts} posts.
 * - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */
// class User {
//   constructor(obj) {
//     this.email = obj.email;
//     this.age = obj.age;
//     this.numberOfPosts = obj.numberOfPosts;
//     this.topics = obj.topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); //User mango@mail.com is 24 years old and has 20 posts.
// mango.updatePostCount(8);
// console.log(mango.getInfo()); //User mango@mail.com is 24 years old and has 28 posts.

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

class User1 {
  #login;
  #email;
  constructor(obj) {
    this.#login = obj.login;
    this.#email = obj.email;
  }
  get login() {
    return this.#login;
  }
  get email() {
    return this.#email;
  }

  set login(value) {
    return (this.#login = value);
  }

  set email(value) {
    return (this.#email = value);
  }
}

const mango1 = new User1({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango1.login); // Mango
mango1.login = 'Mangodoge';
console.log(mango1.login); // Mangodoge

/**
 * Напиши клас Storage який створює об'єкти для керування складом товарів.
 * При виклику отримуватиме один аргумент - початковий масив товарів і
 * записуватиме його властивість items.
 *
 * Додай методи класу:
 * - getItems() - повертає масив товарів.
 * - addItem(item) - отримує новий товар і додає його до поточних.
 * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items = this.items.filter(el => el !== item);
  }
}
const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
//
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
