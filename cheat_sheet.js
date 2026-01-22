// ========= NUMBERS ========

// Math.pow() / ** - возведение в степень
// Math.ceil() - к большему
// Math.floor() - к меньшему
// Math.round() - до ближашего целого
// Math.random() - рандом
// parseInt() - приведение к числу
// parseFloat() - приведение к числу со строкой на конце('100px')
// toFixed() - оставляет n знаков после запятой
// Number(), унарный + - строгое приведение к числу
// isNan(), isInteger() - для проверок
// toString() - приведение числа к строке

// возведение в степень
console.log(Math.pow(2, 3)) // 8
console.log(2 ** 3)               // 8

// округление
console.log(Math.ceil(1.01)) // 1
console.log(Math.floor(0.9)) // 0
console.log(Math.round(0.9)) // 1

// рандом
console.log(Math.random()) // random, от 0 (включительно) до 1 (не включая)

// приведение к числу
console.log(parseInt('10.5px'))    // 10.5, берет целое число из строки
console.log(parseFloat('10.5px'))  // 10.5, берет дробное число из строки

// toFixed(n) - оставляет n знаков после запятой
let num = 10.5678

console.log(num.toFixed(2))    // '10.57' (ВАЖНО: строка)
console.log(+num.toFixed(2) )  // 10.57  (число)

// Number() и унарный +
console.log(Number('123.5'))    // 123.5
console.log(+'123.5')                 // 123.5

// isNaN() — проверяет, является ли значение NaN
console.log(isNaN("abc"))      // true
console.log(isNaN(123))        // false

// Number.isInteger() — проверяет, целое ли число
console.log(Number.isInteger(10))    // true
console.log(Number.isInteger(10.5))  // false

// ---------------------- Полезно помнить ----------------------
// NaN — это тоже тип number
// Math.random() никогда не возвращает 1
// toFixed всегда возвращает СТРОКУ
// parseInt / parseFloat читают число слева направо





// ========= STRINGS ========

// toString() - приводит к строке
// length - отдает количество символов в строке
// toLowerCase(), toUpperCase() - приводит строку к нижнему/верхнему регистру
// split() - разбивает строку на заданные символы
// repeat() - повторяет строку желаемое количество раз
// charAt() - выдает указанный символ
// indexOf(), lastIndexOf() - находит и отдает позицию элемента
// includes() - проверяет содержимое строки
// startsWith(), endsWith() - проверяет строку начиная с начала/конца
// padStart / padEnd — добивка строки
// slice() - вырезает, slice([start], [end])
// replace(), replaceAll() - заменяет содержимое строки с чего-то на что-то
// trim(), trimEnd(), trimStart() - удаляет пустоты с боков строки

const str = 'stringLol';
console.log(str[0])    // 's'
console.log(str[100])  // undefined

// строки неизменяемы (immutable)
str[0] = 'S'
console.log(str) // 'stringLol' — не изменилось

// Конкатенация
const name = 'Sultan';
const age = 17;
console.log(`Hello, my name is ${name} and im ${age}`);

// toString() - приводит к строке
console.log(str.toString()) // stringLol

// length - отдает количество символов в строке
console.log(str.length) // 9

// toLowerCase(), toUpperCase() - приводит строку к нижнему/верхнему регистру
console.log(str.toLowerCase()) // stringlol
console.log(str.toUpperCase()) // STRINGLOL

// split() - разбивает строку на заданные символы
const splitExample = '[12, 41, 414, 554, 2, 46]';
console.log(splitExample.split(' ')); // ['[12,', '41,', '414,', '554,', '2,', '46]']

// repeat() - повторяет строку желаемое количество раз
const repeatExmaple = '*'.repeat(4);
console.log(repeatExmaple) // ****

// charAt() - выдает указанный символ
console.log(str.charAt(1)) // t

// indexOf(), lastIndexOf() - находит и отдает позицию элемента
console.log(str.indexOf('L'))       // 6 - находит и отдает позицию элемента, если не нашел - отдает 0
console.log(str.lastIndexOf('L'))   // 6 - то же самое, просто ищет с конца
// indexOf возвращает -1, а не 0
console.log('hello'.indexOf('z')) // -1

// includes() - проверяет содержимое строки
const url1 = 'https://learn.javascript.ru/';
console.log(url1.includes('https://')) // true

// startsWith(), endsWith() - проверяет строку начиная с начала/конца
console.log(url1.startsWith('https://111'))         // false
console.log(url1.endsWith('learn.javascript.ru/'))  // true

// padStart / padEnd — добивка строки
console.log('5'.padStart(3, '0')) // '005'
console.log('5'.padEnd(3, '0'))   // '500'
const minutes = 3
console.log(String(minutes).padStart(2, '0')) // '03'

// slice() - вырезает, slice([start], [end])
const sliceExample = '   exampleLol  '; // '   exampleLol  '
const sliceExample2 = ['discipline', 'coding', 'girls'];
console.log(sliceExample.slice(3, 13))          // 'exampleLol
console.log(sliceExample2.slice(0, -1))         // ['discipline', 'coding']

// replace(), replaceAll() - заменяет содержимое строки с чего-то на что-то
const title = 'Blabla <br> blablabla <br>';
console.log(title.replace('<br>', ''));     // Blabla  blablabla <br>
console.log(title.replaceAll('<br>', ''));  // Blabla  blablabla

// trim(), trimEnd(), trimStart() - удаляет пустоты с боков строки
console.log(sliceExample.trim())        // exampleLol
console.log(sliceExample.trimStart())   // 'exampleLol  '
console.log(sliceExample.trimEnd())     // '   exampleLol'

// ---------------------- Полезно помнить ----------------------
// строки неизменяемы
// indexOf → -1 если не найдено
// includes → читаемее, чем indexOf
// toFixed / toString → всегда строка





// ========= OBJECTS ========





// ========= ARRAYS ========






