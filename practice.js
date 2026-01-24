// =============== Практика для объектов ========================
// ======== Задачки из 20 урока =========
// const userInformation = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 15,
//     family: {
//         dad: {
//             name: 'Maksat',
//             surname: 'Blablba',
//             age: undefined
//         },
//         mom: {
//             name: 'Gulzar',
//             surname: 'Blablba',
//         },
//         brother: {
//             name: 'Turar',
//             surname: 'Blablba',
//             age: '10'
//         },
//     }
// }
//
// const listOfFamily = {
//     dad: 'Отец',
//     mom: 'Мать',
//     brother: 'Брат',
// }
//
// function getInfo(info) {
//     let str = `У ${info.name} ${info.surname}`;
//     let family =  '';
//     let sizeOfFamily = 0;
//
//     // str += ` ${familyKeys.length} член(-а/ов) семьи.`
//
//     for (let familyMember in info.family) {
//         const data = info.family[familyMember]
//
//         const member = listOfFamily[familyMember]
//
//         if (!member) {
//             console.error(`Добавьте ${familyMember} в ${listOfFamily}`)
//             continue
//         }
//
//         sizeOfFamily++;
//
//         family += ` ${member}`
//
//         family += ` - ${data.name} ${data.surname}`;
//
//         if (typeof data.age === 'number' || typeof data.age === 'string') {
//             family += ` ${data.age} лет.`
//         } else {
//             family += ` (возраст неизвестен).`
//         }
//     }
//
//     str += ` ${sizeOfFamily} член(-а/ов) семьи.`
//     str += family
//
//     return str
// }
//
// const data = getInfo(userInformation)
// console.log(data)


// =================== Практика для массивов =====================

// ======== Задачки из 21 урока =========
// const from = 'lesson,lessons,Для новичков,Для начинающих,Создать сайт,css,css3,Курсы по css';
// // '#lesson #lessons #для_новичков #для_начинающих #создать_сайт #css #css3 #курсы_по_css';
//
// const final = []
//
// const splitted = from.split(',');
//
// splitted.forEach((element) => {
//     const data = element.split(' ').join('_').toLowerCase();
//     const tag = '#' + data
//
//     final.push(tag)
// })

// console.log(final.join(' '))

// ======== Задачки из 22 урока =========

// const arr = [1, 2, 3, 4, 5] // 15
// let sum = 0
//
// arr.forEach((element) => {
//     sum += element
// })
//
// console.log(sum)

// const arr = ['my', 'name', 'is', 'Alex'] // 'my name is Alex'
// let str = ''
// arr.forEach(element => {
//     str += ` ${element}`
// })
//
// console.log(str)

// const badAge = 20
// const arr = [10, 15, 20, 30] // true/false
//
// const final = arr.some((element) => {
//     return element === badAge;
// })
//
// console.log(final)

// const arr = [
// //     {
// //         name: 'John',
// //         age: 20,
// //     },
// //     {
// //         name: 'Anna',
// //         age: 30,
// //     },
// //     {
// //         name: 'Alex',
// //         age: 10,
// //     },
// // ] // age > 18 => вывести имена ['John', 'Anna']
// //
// // const filtered = arr.filter((element) => {
// //     return element.age > 18
// // })
// //
// // const final = filtered.map((element) => {
// //     return element.name
// // })
// //
// // console.log(final)

// ======== Задачки из 23 урока =========

// const arr = [['Orange'], ['Banana'], ['Apple']]
//
// const result = arr.reduce((acc, element) => {
//     acc += ' ' + element
//     return acc
// }, '')
// console.log(result)

// const goodProducts = ['Салат', 'Вода', 'Шоколад', 'Булка'];
//
// const test = [{
//     title: 'Сникерс',
//     composition: ['Шоколад', 'Сахар', 'Нуга', 'Что-то еще'],
// }, {
//     title: 'Бургер',
//     composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи'],
// }, {
//     title: 'Липтон',
//     composition: ['Вода', 'Сахар', 'Сок лимона', 'Щепотка магии'],
// }];
//
// const result = test.reduce((acc, element) => {
//     const composition = element.composition.reduce((acc, element) => {
//         acc.push({
//             name: element,
//             good: goodProducts.includes(element),
//         })
//         return acc
//     }, [])
//
//     acc.push({
//         title: element.title,
//         composition,
//     })
//     return acc
// }, [])
//
// console.log(result)

// const countries = [{
//     country: "Гана",
//     weather: 19,
//     warm: true,
//     cities: ["Аккра", "Тамале", "Кумаси"],
// }, {
//     country: "Гренландия",
//     weather: 20,
//     warm: false,
//     cities: ["Нуук", "Какорток"],
// }, {
//     country: "Мали",
//     weather: 25,
//     warm: true,
//     cities: ["Мопти", "Бамако", "Джене"],
// }, {
//     country: "Дания",
//     weather: 5,
//     warm: false,
//     cities: ["Копенгаген"],
// }];
// // Во всех заданиях можно использовать только reduce!
//
// // Задание 1 - получить информацию про страны
// // [
// //     "В стране Гана +19 градусов. В составе такие города: Аккра, Тамале, Кумаси",
// //     "В стране Гренландия -20 градусов. В составе такие города: Нуук, Какорток",
// //     "В стране Мали +25 градусов. В составе такие города: Мопти, Бамако, Джене",
// //     "В стране Дания -5 градусов. В составе такие города: Копенгаген",
// // ]
//
// const result = countries.reduce((acc, data) => {
//     const cities = `В составе такие города: ${data.cities.join(', ')}`
//     const coldOrHot = data.warm ? '+' : '-';
//     const weather = `${coldOrHot}${data.weather} градусов`
//     const string = `В стране ${data.country} ${weather}. ${cities}.`
//
//     acc.push(string)
//     return acc
// }, [])
// // console.log(result)
//
// // Задание 2 - найти самую жаркую и холодную страну
// // Вывод: "Самая холодная страна - Гренландия"
// // Вывод: "Самая жаркая страна - Мали"
//
// const hotCountry = countries.reduce((acc, data) => {
//     if (data.warm && data.weather > acc.temp) {
//         acc = {
//             temp: data.weather,
//             result: `Самая жаркая страна в мире - ${data.country}`
//         }
//     }
//     return acc
// }, {temp: 0, result: ''})
// // console.log(hotCountry.result)
//
// const coldCountry = countries.reduce((acc, data) => {
//     if (!data.warm && data.weather > acc.temp) {
//         acc = {
//             temp: data.weather,
//             result: `Самая холодная страна в мире - ${data.country}`
//         }
//     }
//     return acc
// }, {temp: 0, result: ''})
// // console.log(coldCountry.result)








































