// // Змінні та типи даних

// /// як виводити код в консоль?? (log)
// console.log("hello world");
// console.log(20 + 20);
// console.log(50 * 2);
// console.log(100 / 2);

// 10; // числа
// ("hello world"); // рядки
// true; // boolean
// false; // boolean
// null; //пустота
// undefined; // нічого незнайдено

// // Змінна це коробка в яку ми можемо щось помістити
// let kateAge = 33;
// console.log(kateAge); // це те що знах в нашій коробці (тобто 33)

// let x; // можна створити але неоголошувати
// x = 40;
// x = 30; // перевизначення
// let y = 20;
// console.log(x + y);

// const age = 20; // перевизначати неможливо
// console.log(age);

// /////////операції з даними
// const result = typeof age; //визначення типу даних
// console.log(result);
// const isOnline = true;
// const result1 = typeof isOnline;
// console.log(result1);
// const town = "Lviv";
// const result2 = typeof town;
// console.log(result2);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof null);

///// арифметичні операції

// const x = 5;
// const y = 10;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// const apples = 33;
// const oranges = 44;
// const result = apples + oranges;
// console.log("Result:", result);

// let cars = 50;
// cars += 50; //100
// cars -= 20; // 100-20=80
// cars *= 2; // 80*2=160
// console.log(cars);

//////// Рядочки String

// const firstName = "Kateryna";
// const lastName = "Tsyhaniuk";
// const fullName = firstName + " " + lastName;
// console.log(fullName);

// // Шаблонний рядок
// /// якщо ми хочемо в рядок вставити якесь число потрібно: використовувати шаблонні рядки
// const myAge = 33;
// const myName = "Kateryna";
// const message = `Hello ${myName} Tsyhaniuk! I am ${myAge} years old.`;
// console.log(message);

// ///  Перетворення типів  String

// const x = 20;
// const myStr = String(x);
// const myStr2 = x.toString();
// console.log(myStr);
// console.log(myStr2);

// const result = 100 + 2 + "30";
// console.log(result); // 10230  100+2=102 +'30'='10230'

/// Перетворення типів Number

// const res = Number(true);
// console.log(res); //  1

// const x = Number("25");
// console.log(x); //  25

// const y = +"30"; // унарний плюс який перетворює рядок на число
// console.log(y);

// console.log(Number(undefined));
// NaN;
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number("Hello"));
// NaN;
// console.log(Number("25px"));
// NaN;

/// Оператори порівняння

// const userAge = 13;
// const result = userAge > 18;
// console.log(result); // false

// const result2 = userAge < 18;
// console.log(result2);

// = присвоєння
// == булевий оператор  нестрога рівність
// === булевий оператор строга рівність

///// Метод Number.parseInt()

// const numX = Number.parseInt("25px");
// console.log(numX); //25

// ////// Метод Number.parseFloat()

// const numY = Number.parseFloat("25.234polk");
// console.log(numY);

// const r = 4.5;

// const a = Math.round(r); //5
// const b = Math.ceil(r); // 5
// const c = Math.floor(r); //4

// console.log(a, b, c);

// ФУНКЦІЇ

// function seyHello() {
//   console.log("start");
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   console.log("end");
// }

// seyHello();
// seyHello();
// seyHello();

//********************************************** */
/// завдання 1 Замовлення дроїдів

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажіОголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда

// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// makeTransaction();

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!" ***********

// //******************************************** */
// // Завдання 2 Доставка товару
// // Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару

// // Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// // Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// getShippingMessage();
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
// //********************************************* */

// // Завдання 3. Ширина елемента
// // Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
// // Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

// function getElementWidth(content, padding, border) {
//   // переводио всі знач до чисел
//   const contentNum = Number.parseFloat(content);
//   const paddingNum = Number.parseFloat(padding);
//   const borderNum = Number.parseFloat(border);
//   const totalWidth = contentNum + paddingNum * 2 + borderNum * 2;
//   return totalWidth;
// }

// getElementWidth();

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

///********************************** */ Завдання 4
// Оголоси функцію calculateTotalPrice, яка приймає два параметри:
// quantity — кількість товарів.
// pricePerItem — ціна за одиницю товару.
// Функція повинна повертати рядок: "Total price for <quantity> items is <totalPrice> credits!"

// function calculateTotalPrice(quantity, pricePerItem) {
//   const totalPrice = quantity * pricePerItem;
//   return `Total price for ${quantity} items is ${totalPrice} credits!`;
// }
// calculateTotalPrice();

// console.log(calculateTotalPrice(4, 250)); // "Total price for 4 items is 1000 credits!"
// console.log(calculateTotalPrice(2, 500)); // "Total price for 2 items is 1000 credits!"
// console.log(calculateTotalPrice(7, 150)); // "Total price for 7 items is 1050 credits!"

/////////////////////******************************Завдання 5 */
// Перевірка пароля
// Оголоси функцію checkPassword, яка приймає один параметр — password (рядок).
// Якщо password дорівнює "admin123", функція повинна повертати "Access granted!", інакше "Access denied!".
// function checkPassword(password) {
//   if (password === "admin123") {
//     return "Access granted!";
//   } else {
//     return "Access denied!";
//   }
// }

// /// або return === 'admin'? 'Access granted!' : 'Access denied!';

// checkPassword();
// console.log(checkPassword("admin123")); // "Access granted!"
// console.log(checkPassword("qwerty")); // "Access denied!"
// console.log(checkPassword("Admin123")); // "Access denied!"

////Конвертер температури
// Напиши функцію convertToFahrenheit, яка приймає один параметр — celsius (число, градуси за Цельсієм).
// // Функція повинна повертати значення температури у Фаренгейтах за формулою: F = (C * 9/5) + 32
// function convertToFahrenheit(celsium) {
//   const F = (celsium * 9) / 5 + 32;
//   return F;
// }

// convertToFahrenheit();
// console.log(convertToFahrenheit(0)); // 32
// console.log(convertToFahrenheit(25)); // 77
// console.log(convertToFahrenheit(-10)); // 14

/////********Форматування імені
// // Оголоси функцію formatName, яка приймає рядок name і повертає цей рядок з великої літери (перша літера велика, решта — малі). */
// function formatName(name) {
//   if (!name || typeof name !== "string") {
//     return "Invalid input";
//   }
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// // charAt(0).toUpperCase() — бере перший символ рядка і робить його великим.

// // slice(1).toLowerCase() — бере всі символи після першого і переводить їх у малі.

// formatName();
// console.log(formatName("john")); // "John"
// console.log(formatName("mArY")); // "Mary"
// console.log(formatName("JAMES")); // "James"
