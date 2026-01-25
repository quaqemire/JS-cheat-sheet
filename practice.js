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

// ======== Задачки из 24 урока =========

// Number
// parseInt, Math.ceil, toFixed, Number.isInteger, Math.round, toString, Number, Math.random, Math.floor
// Math.pow, parseFloat, Number.isNaN

// String
// endsWith, padStart, concat, экранирование, length, indexOf, toString, Number, toUpperCase, toLowerCase
// includes, trim, repeat, replaceAll, startsWith, trimStart, конкатенация, charAt, replace, padEnd, trimEnd, split

// Object
// Object.values, Object.entries, for in, toString, JSON.parse, JSON.stringify, Object.keys

// Array
// flat, forEach, concat, map, some, unshift, length, indexOf, toString, push, pop,
// includes, reduce, find, Array.isArray, filter, shift, reverse, join

// --------------------------------------------------

const discounts = [
    [5, { value: 100, cond: 150 }],
    [10, 200],
    [15, 300],
    [20, 500],
];

const games = [
    {
        id: 1,
        name: ' death stranging   ',
        price: '1000rub',
        description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
        link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
        discountType: null,
        hashTags: ['Шутер', '', ['Приключения,Доставка еды']],
    },
    {
        id: 2,
        name: 'the last of us   ',
        price: 300,
        description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
        link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
        discountType: 20,
        hashTags: ['Стелс', 'Экшен', 'Приключения'],
    },
    {
        id: 3,
        name: 'death stranging',
        price: null,
        description: null,
        discountType: null,
        hashTags: [],
    },
    {
        id: 4,
        name: 'SHREK 2: THE GAME',
        price: '321',
        description: 'Игра про зеленого мужика, который всем нравится',
        discountType: 5,
        hashTags: [['Шутер,Приключения'], 'Хоррор', 'Криминал'],
    },
    {
        id: 5,
        name: 'GTA 3',
        price: 20.512830102,
        description: 'Игра про безумного мужика, который всем нравится',
        discountType: 5,
        hashTags: undefined,
    },
];

// Итог
// 1. Форматируем данные до нормального вида
// 1.1. Цена должна быть числом
// 1.2. Формируем финальную цену, учитывая скидку
// 1.3. hashTags должен быть всегда плоским массивом
// 1.4. Имя игры не должно содержать пробелов по бокам
// const formattedGames = [
//     {
//         id: 1,
//         name: 'death stranging',
//         finalPrice: 1000,
//         description: 'Компьютерная игра в жанре action с открытым миром, разработанная...',
//         link: 'https://ru.wikipedia.org/wiki/Death_Stranding',
//         hashTags: ['Шутер', 'Приключения', 'Доставка еды'],
//     },
//     {
//         id: 4,
//         name: 'SHREK 2: THE GAME',
//         finalPrice: 221, // Тут изменилась цена из-за скидки
//         description: 'Игра про зеленого мужика, который всем нравится',
//         hashTags: ['Шутер', 'Приключения', 'Хоррор', 'Криминал'],
//     },
//     {
//         id: 5,
//         name: 'GTA 3',
//         finalPrice: 20.51, // Цена не изменилась, так как условие скидки не проходит
//         description: 'Игра про безумного мужика, который всем нравится',
//         hashTags: [],
//     },
// ];

// 2. Формируем массив с проблемными играми
// const problemGames = [
//     {
//         id: 2,
//         reasons: ['Цена уходит в минус'],
//         name: 'the last of us   ',
//         price: 300,
//         description: 'Компьютерная игра в жанре action-adventure с элементами survival horror...',
//         link: 'https://ru.wikipedia.org/wiki/The_Last_of_Us',
//         discountType: 20,
//         hashTags: ['Стелс', 'Экшен', 'Приключения'],
//     },
//     {
//         id: 3,
//         reasons: ['Дубликат'],
//         name: 'death stranging',
//         price: null,
//         description: null,
//         discountType: null,
//         hashTags: [],
//     },
// ];
// 2.1. Выводим в консоль данные, про эти проблемные игры в виде:
// 'Игра "the last of us" имеет проблемы с данными: Цена уходит в минус.'
// 'Игра "death stranging" имеет проблемы с данными: Дубликат, Отсутствие данных.'

// 3. Формируем список жанров (Ключ - название жанра. Значение - id игры)
// 3.1. Название жанров мы должны вытащить из массива игр. А не формировать руками.
// const genres = {
//     'Шутер': [1, 4],
//     'Приключения': [1, 4],
//     'Доставка еды': [1],
//     'Хоррор': [4],
//     'Криминал': [4],
// };

const formattedGames = []
const problemGames = [];

games.forEach((game) => {
    const price = !game.price ? 0 : parseFloat(game.price);

    const discountData = discounts.find((discount) => {
        if (discount[1] !== 'number' && discount[1].cond > price) {
            return false
        }

        if (discount[0] === game.discountType) {
            return true
        }
    })

    const discountValue = Array.isArray(discountData) ? discountData[1] : 0

    const numericDiscount = typeof discountValue === 'number' ? discountValue : discountValue.value

    const newGame = {
        id: game.id,
        description: game.description,
        name: game.name.trim(),
        finalPrice: parseFloat(price.toFixed(2)) - numericDiscount,
    }

    if ('link' in game) {
        newGame.link = game.link
    }

    if (Array.isArray(game.hashTags)) {
        newGame.hashTags = game.hashTags
            .flat(Infinity)
            .reduce((acc, tags) => {
                if (tags.length === 0) {
                    return acc
                }
                const split = tags.split(',')

                split.forEach((value) => {
                    acc.push(value)
                })

                return acc
            }, [])
    }
    else {
        newGame.hashTags = []
    }

    if (newGame.finalPrice < 0) {
        const reasons = ['Цена уходит в минус']
        problemGames.push({
            ...game,
            reasons
        })
        return
    }

    const isDuplicate = formattedGames.some((formattedGame) => {
        if (newGame.name.toLowerCase() === formattedGame.name.toLowerCase()) {
            return true
        }
    })

    if (isDuplicate) {
        const reasons = ['Дубликат']
        problemGames.push({
            ...game,
            reasons
        })
    }
    else {
        formattedGames.push(newGame);
    }
})

// problemGames.forEach((game) => {
//     const name = `Игра ${game.name.trim()}`;
//     const promblems = game.reasons.join(', ');
//     console.error(`${name} имеет проблемы с данными: ${promblems}.`);
// });

const genres = formattedGames.reduce((acc, game) => {
    game.hashTags.forEach((tag) => {
        if (tag in acc) {
            acc[tag].push(game.id);
        }
        else {
            acc[tag] = [game.id];
        }
    });

    return acc;
}, {});

// console.log(genres)
// console.log('problemGames', problemGames);
console.log('formattedGames', formattedGames);

































// Доп. задание.
// 4. Визуально отобразить это. Как угодно :)





































