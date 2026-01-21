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
console.log(Number('123.5'))  // 123.5
console.log(+'123.5')               // 123.5

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





// ========= OBJECTS ========





// ========= ARRAYS ========