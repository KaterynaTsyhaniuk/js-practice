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

const travelDestinations = [
  {
    id: 1,
    name: 'Ейфелева вежа',
    country: 'Франція',
    city: 'Париж',
    isWorldWonder: false,
    activities: ['Екскурсії', 'Фотографії', 'Вечеря з видом'],
    image:
      'https://www.budowle.pl/files/photos/building/wieza-eiffla-bb2a61327169f6114884bbf1f23442e9.jpg',
  },
  {
    id: 2,
    name: 'Мачу-Пікчу',
    country: 'Перу',
    city: 'Куско',
    isWorldWonder: true,
    activities: ['Піші походи', 'Археологія', 'Природа'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg',
  },
  {
    id: 3,
    name: 'Колізей',
    country: 'Італія',
    city: 'Рим',
    isWorldWonder: true,
    activities: ['Історичні тури', 'Фотографії', 'Культура'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg',
  },
  {
    id: 4,
    name: 'Гранд-Каньйон',
    country: 'США',
    city: 'Аризона',
    isWorldWonder: false,
    activities: ['Кемпінг', 'Походи', 'Польоти на гелікоптері'],
    image: 'https://www.facte.eu/images/735.jpg',
  },
  {
    id: 5,
    name: 'Велика Китайська стіна',
    country: 'Китай',
    city: 'Пекін',
    isWorldWonder: true,
    activities: ['Прогулянки', 'Історія', 'Пейзажі'],
    image:
      'https://discover.in.ua/uploads/illustrations/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0-%D0%9A%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0-%D1%81%D1%82%D1%96%D0%BD%D0%B0.jpg',
  },
];

const ulElemTravel = document.querySelector('.travel-list');
console.log(ulElemTravel);

function travelTemplate(travelDestination) {
  const myClass = travelDestination.isWorldWonder ? 'worldWonder' : '';
  return ` <li data-id="${travelDestination.id}" class="travel-item ${myClass}">
            <img src="${travelDestination.image}" alt="${travelDestination.name}">
            <h3>${travelDestination.name}</h3>
            <p>${travelDestination.country}</p>
            <p>${travelDestination.city}</p>
            </li>`;
}

function travelsTemplate(arr) {
  return arr.map(travelTemplate).join('');
}

const markup = travelsTemplate(travelDestinations);
ulElemTravel.innerHTML = markup;

ulElemTravel.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  console.log('Hello');
  const liElem = e.target.closest('li');
  console.log(liElem);
  const id = liElem.dataset.id;
  console.log(id);

  const travelDestination = travelDestinations.find(el => el.id == id);
  showModal(travelDestination);
});

function showModal(travelDestination) {
  const markup = `<li data-id="${travelDestination.id}" class="travel-item">
            <img src="${travelDestination.image}" alt="${travelDestination.name} width="300px" height="150px">
            <h3>${travelDestination.name}</h3>
            </li>`;

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      window.addEventListener('keydown', onModalClose);
    },
    onClose: instance => {
      window.addEventListener('keydown', onModalClose);
    },
  });
  instance.show();

  function onModalClose(e) {
    //тепер вікно буде закриватися esk
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
