// const cars = [
//   {
//     id: 1,
//     brand: 'Tesla',
//     model: 'Model S',
//     year: 2022,
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCthzd0go9YF814SdRCAMJB1xf0bxCZ8MIg&s',
//   },
//   {
//     id: 2,
//     brand: 'BMW',
//     model: 'i8',
//     year: 2020,
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrze1hApB2yENZCvjdCKY3MvPbVSZHrCzrQ&s',
//   },
//   {
//     id: 3,
//     brand: 'Audi',
//     model: 'R8',
//     year: 2021,
//     image:
//       'https://img.tsn.ua/cached/778/tsn-9eec32dc4989e3515edf3aa709da07a2/thumbs/1200x630/41/16/3c833490ef15f21b8c4103ef5abe1641.jpeg',
//   },
//   {
//     id: 4,
//     brand: 'Ford',
//     model: 'F-150 Raptor',
//     year: 2023,
//     image: 'https://i.infocar.ua/i/2/6789/126335/1920x.jpg',
//   },
//   {
//     id: 5,
//     brand: 'Chevrolet',
//     model: 'Corvette Stingray',
//     year: 2022,
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yL377nyyZCYkToIW05xq5kEyY3pmwy7YiQ&s',
//   },
//   {
//     id: 6,
//     brand: 'Lamborghini',
//     model: 'Aventador',
//     year: 2021,
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTE_ssGxDQQ-GgW-F-5mjV8aDoiR4Ge4f_Q&s',
//   },
//   {
//     id: 7,
//     brand: 'Ferrari',
//     model: 'SF90 Stradale',
//     year: 2022,
//     image:
//       'https://baza-gai.com.ua/catalog-images/ferrari/f8-tributo/model.jpg',
//   },
//   {
//     id: 8,
//     brand: 'Porsche',
//     model: 'Taycan',
//     year: 2023,
//     image: 'https://nextcar.ua/images/detailed/572/1_ptsr-4p.jpg',
//   },
//   {
//     id: 9,
//     brand: 'Toyota',
//     model: 'Supra',
//     year: 2020,
//     image: 'https://i.infocar.ua/i/2/5944/113698/1920x.jpg',
//   },
//   {
//     id: 10,
//     brand: 'Nissan',
//     model: 'GT-R',
//     year: 2021,
//     image: 'https://baza-gai.com.ua/catalog-images/nissan/gt-r/model.jpg',
//   },
//   {
//     id: 11,
//     brand: 'McLaren',
//     model: '720S',
//     year: 2022,
//     image:
//       'https://baza-gai.com.ua/catalog-images/mclaren/720s/2017%20%E2%80%93%20%D0%BD.%D0%B2./image.jpg',
//   },
//   {
//     id: 12,
//     brand: 'Bugatti',
//     model: 'Chiron',
//     year: 2021,
//     image:
//       'https://cdn.riastatic.com/photosnewr/auto/newauto_photos/bugatti-chiron__1008437-620x415x70.jpg',
//   },
// ];

// //////////Створимо розмітку карток автомобілів з модальним вікном

// const ulElemCars = document.querySelector('.cars');
// console.log(ulElemCars);

// /// Потрібно відрендерити масив авто:

// function carTemplate(car) {
//   return `  <li data-id="${car.id}" class="car-item"><img src=${car.image} alt="car">
//             <h3>${car.brand}</h3>
//             <p>${car.model}</p>
//             <p>${car.year}</p>
//         </li>`;
// }

// function carsTemplate(arr) {
//   return arr.map(carTemplate).join('');
// }

// const markup = carsTemplate(cars);

// ulElemCars.innerHTML = markup;

// //Розмітка машин створена!!!!!!
// ///// Тепер зробимо щоб при кліку на картку відкривалося наше модальне вікно

// /// потрібен прослуховувач події

// ulElemCars.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return; // тобто ми зробили так що коли ми натиснемо не у полі зору лішки, нічого невідбудеться, а коли саме натиснемо на неї то спрацює hello
//   //   console.log('hello');
//   const liElem = e.target.closest('li'); ////тепер нам потрібно дістати id!!!
//   //   console.log(liElem);
//   const idCars = liElem.dataset.id;
//   //   console.log(idCars);
//   const car = cars.find(el => el.id == idCars);
//   console.log(car);

//   /// тепер створимо розмітку для нашого модального

//   const markup = `  <li data-id="${car.id}" class="car-item"><img src=${car.image} alt="car">
//             <h3>${car.brand}</h3>
//             <p>${car.model}</p>
//             <p>${car.year}</p>
//         </li>`;

//   /// створюємо розмітку за допомогою basicLightbox модального вікна

//   const instance = basicLightbox.create(markup, {
//     onShow: instance => {
//       window.addEventListener('keydown', onModalClose);
//     },
//     onClose: instance => {
//       window.addEventListener('keydown', onModalClose);
//     },
//   });
//   instance.show(); // щоб показати вікно

//   function onModalClose(e) {
//     //тепер вікно буде закриватися esk
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }
// });

///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// const travelDestinations = [
//   {
//     id: 1,
//     name: 'Ейфелева вежа',
//     country: 'Франція',
//     city: 'Париж',
//     isWorldWonder: false,
//     activities: ['Екскурсії', 'Фотографії', 'Вечеря з видом'],
//     image:
//       'https://www.budowle.pl/files/photos/building/wieza-eiffla-bb2a61327169f6114884bbf1f23442e9.jpg',
//   },
//   {
//     id: 2,
//     name: 'Мачу-Пікчу',
//     country: 'Перу',
//     city: 'Куско',
//     isWorldWonder: true,
//     activities: ['Піші походи', 'Археологія', 'Природа'],
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg',
//   },
//   {
//     id: 3,
//     name: 'Колізей',
//     country: 'Італія',
//     city: 'Рим',
//     isWorldWonder: true,
//     activities: ['Історичні тури', 'Фотографії', 'Культура'],
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg',
//   },
//   {
//     id: 4,
//     name: 'Гранд-Каньйон',
//     country: 'США',
//     city: 'Аризона',
//     isWorldWonder: false,
//     activities: ['Кемпінг', 'Походи', 'Польоти на гелікоптері'],
//     image: 'https://www.facte.eu/images/735.jpg',
//   },
//   {
//     id: 5,
//     name: 'Велика Китайська стіна',
//     country: 'Китай',
//     city: 'Пекін',
//     isWorldWonder: true,
//     activities: ['Прогулянки', 'Історія', 'Пейзажі'],
//     image:
//       'https://discover.in.ua/uploads/illustrations/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0-%D0%9A%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0-%D1%81%D1%82%D1%96%D0%BD%D0%B0.jpg',
//   },
// ];

// const ulElemTravel = document.querySelector('.travel-list');
// console.log(ulElemTravel);

// function travelTemplate(travelDestination) {
//   const myClass = travelDestination.isWorldWonder ? 'worldWonder' : '';
//   return ` <li data-id="${travelDestination.id}" class="travel-item ${myClass}">
//             <img src="${travelDestination.image}" alt="${travelDestination.name}">
//             <h3>${travelDestination.name}</h3>
//             <p>${travelDestination.country}</p>
//             <p>${travelDestination.city}</p>
//             </li>`;
// }

// function travelsTemplate(arr) {
//   return arr.map(travelTemplate).join('');
// }

// const markup = travelsTemplate(travelDestinations);
// ulElemTravel.innerHTML = markup;

// ulElemTravel.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;
//   console.log('Hello');
//   const liElem = e.target.closest('li');
//   console.log(liElem);
//   const id = liElem.dataset.id;
//   console.log(id);

//   const travelDestination = travelDestinations.find(el => el.id == id);
//   showModal(travelDestination);
// });

// function showModal(travelDestination) {
//   const markup = `<li data-id="${travelDestination.id}" class="travel-item">
//             <img src="${travelDestination.image}" alt="${travelDestination.name} width="300px" height="150px">
//             <h3>${travelDestination.name}</h3>
//             </li>`;

//   const instance = basicLightbox.create(markup, {
//     onShow: instance => {
//       window.addEventListener('keydown', onModalClose);
//     },
//     onClose: instance => {
//       window.addEventListener('keydown', onModalClose);
//     },
//   });
//   instance.show();

//   function onModalClose(e) {
//     //тепер вікно буде закриватися esk
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }
// }

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// const images = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

// const ulGallery = document.querySelector('.gallery');

// function imageTemplate(image) {
//   return `<li class="gallery-item">
//   <a class="gallery-link" href="${image.original}">
//     <img
//       class="gallery-image"
//       src="${image.preview}"
//       data-source="${image.original}"
//       alt="${image.description}"
//     />
//   </a>
// </li>
// `;
// }

// function imagesTemplate(arr) {
//   return arr.map(imageTemplate).join('');
// }

// const markup = imagesTemplate(images);

// ulGallery.innerHTML = markup;

// ulGallery.addEventListener('click', e => {
//   e.preventDefault();

//   if (e.target.nodeName !== 'IMG') return; //Якщо клікнутий елемент не є зображенням (<img>), то нічого не робити — одразу вийти з функції.

//   const dataImage = e.target.dataset.source;

//   const imageGalery = images.find(el => el.original === dataImage);
//   showModal(imageGalery);
// });

// function showModal(image) {
//   const markup = `  <img
//       src="${image.original}"
//       alt="${image.description}"
//       style="max-width: 100vw; max-height: 100vh"
//     />
// `;

//   const instance = basicLightbox.create(markup, {
//     onShow: instance => {
//       window.addEventListener('keydown', onModalClose);
//     },
//     onClose: instance => {
//       window.removeEventListener('keydown', onModalClose);
//     },
//   });
//   instance.show(); ////Незабуваємо вставити

//   function onModalClose(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }
// }

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// const books = [
//   {
//     id: 1,
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
//     description:
//       'A novel about the serious issues of rape and racial inequality.',
//   },
//   {
//     id: 2,
//     title: '1984',
//     author: 'George Orwell',
//     cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
//     description:
//       'A dystopian novel set in a totalitarian society under constant surveillance.',
//   },
//   {
//     id: 3,
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     cover: 'https://covers.openlibrary.org/b/id/7352161-L.jpg',
//     description: 'A critique of the American Dream set in the Jazz Age.',
//   },
// ];

// const ulElemBooks = document.querySelector('.books-list');
// console.log(ulElemBooks); // <ul class="books-list"></ul>

// function bookTemplate(book) {
//   return `  <li class="book-item" data-id="${book.id}">
//             <h3>${book.title}</h3>
//             <p>${book.author}</p>
//             <img src="${book.cover}" alt="${book.title}">
//             <p>${book.description}</p>

//         </li>`;
// }

// function booksTemplate(arr) {
//   return arr.map(bookTemplate).join('');
// }

// const markup = booksTemplate(books);
// // console.log(markup);
// ulElemBooks.innerHTML = markup;

// ///// тепер нам потрібно поставити прослуховувача події

// ulElemBooks.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;
//   const liElem = e.target.closest('li');
//   console.log(liElem); // при натисканні на лішку вона відображ у консолі
//   const id = liElem.dataset.id;
//   console.log(id);

//   const book = books.find(el => el.id == id);
//   console.log(book);
//   //{id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg', description: 'A novel about the serious issues of rape and racial inequality.'}

//   showModal(book);
// });

// function showModal(book) {
//   const markup = `  <li class="book-item" data-id="${book.id}">
//             <h3>${book.title}</h3>
//              <img src="${book.cover}" alt="${book.title}">
//             </li>`;

//   const instance = basicLightbox.create(markup, {
//     onShow: instance => {
//       window.addEventListener('keydown', onModalClose);
//     },
//     onClose: instance => {
//       window.removeEventListener('keydown', onModalClose);
//     },
//   });
//   instance.show();

//   function onModalClose(e) {
//     if (e.code === 'Escape') {
//       return instance.close();
//     }
//   }
// }
