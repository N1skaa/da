// 1. Базовый вызов 
function sayHello() {
  console.log("Салам, JS!");
}
sayHello() // Ответ: выводит "Салам, JS!"

//  2. Параметры
function greet(name) {
    console.log("Здравствуй, " + name);
}
greet("Дмитрий"); //выводит 'Здравствуй, Дмитрий' 
greet("Кирилл");  //выводит 'Здравствуй, Кирилл' 

// 3. Приветствие с проверкой 
function greetCheck(name) {
    if (name) {
        return "Хэллоу, " + name + "!";
    } else {
        return "Хэллоу, стренжир!";
    }
}
console.log(greetCheck("Дмитрий")); //выводит 'Хэллоу, Дмитрий!'
console.log(greetCheck(""));        //выводит 'Хэллоу, стренжир!'
// 4. Возведение в квадрат 
function square(x) {
    return x * x; // x * x - умножение числа само на себя
}
console.log("5 = " + square(5));   // 5 в квадрате = 25
console.log("11 = " + square(11)); // 11 в квадрате = 121
// 5. Сумма массива 
function sumArray(arr) {
    let total = 0;                                             //это  переменная для суммы
    for (let i = 0; i < arr.length; i++) {                     //это количество элементов в массиве
        total += arr[i];                                       //это элемент массива по индексу i
    }
    return total;
}
console.log("Сумма [14, 11, 44] = " + sumArray([14, 11, 44])); //выводит 'Сумма [14, 11, 44] = 69'
console.log("Сумма [] = " + sumArray([]));                     //выводит 'Сумма [] = 0'\
// 6. Минимум из двух 
function min(a, b) {
    if (a < b) {             // Сравнение a и b с помощью '<'
        return a;            // если a меньше b, возвращаем a
    } else {
        return b;            // Иначе возвращаем b (если b меньше a или b = a)
    }
}
console.log(min(67, 69));    //выводит '67'
console.log(min(-12, 12));   //выводит '-12'
console.log(min(4, 4));      //выводит '4'
// 7. Стрелочные функции 
const double = function(x) {   // Функция создается и присваивается переменной double
    return x * 2;              // Умножает число на 2
}; 
console.log("double(22) = " + double(22));      //выводит '44'
console.log("double(1.11) = " + double(1.11));  //выводит '2.22'
console.log("double(0) = " + double(0));        //выводит '0'
// 8. Колбэк 
function apply(fn, x) {
    return fn(x);                                     //вызывает переданную функцию с аргументом x
}
function quadro(n) {                                  // quadro умножает на 4
    return n * 4;
}
function toText(n) {
    return "Число - " + n;
}
console.log("apply(quadro, 7) = " + apply(quadro, 7)); //выводит 'apply(quadro, 7) = 28'
// 9. Фильтр по длине слова 
function filterByLength(words, minLen) {
    let longWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > minLen) {               // words[i].length - длина строки (количество символов), words[i].length > minLen проверяем длину слова
            longWords.push(words[i]);                 //longWords.push() - добавляет элемент в конец массива
        }
    }
    return longWords;
}
console.log("Слова длиннее 5: " + filterByLength(["лук", "морковь", "ямс", "капуста"], 5));   //выводит 'Слова длиннее 5: морковь,капуста'
console.log("Слова длиннее 7: " + filterByLength(["арбуз", "малина", "клубника"], 7));        //выводит 'Слова длиннее 7: клубника'
// 10. Верхний регистр 
function toUpperArray(arr) {
    let upperArr = [];
    for (let i = 0; i < arr.length; i++) {
        upperArr.push(arr[i].toUpperCase());                              // toUpperCase() делает все буквы заглавными
    }
    return upperArr;
}
console.log("Заглавные: " + toUpperArray(["java", "pyton", "pascal"]));   //выводит 'Заглавные: JAVA,PYTON,PASCAL'
console.log("Заглавные: " + toUpperArray(["снег", "слякоть", "лужа"]));   //выводит 'Заглавные: СНЕГ,СЛЯКОТЬ,ЛУЖА'
// 11. Значение по умолчанию
function power(base, exp) {
    if (exp === undefined) {                     //проверяем, передан ли второй аргумент
        exp = 2;                                 //Если не передан, устанавливаем exp = 2
    }              
    let result = 1;                              //начальное значение для умножения
    for (let i = 0; i < exp; i++) {              //Цикл for повторяется exp раз
        result *= base;                          //умножает result на base
    }
    return result;
}
console.log("3 во 2 степени = " + power(3));     //выводит '3 во 2 степени = 9'
console.log("10 в 3 степени = " + power(10, 3)); //выводит '10 в 3 степени = 1000'
// 12. Проверка на чётность     
function isEven(n) {
    return n % 2 === 0;            // % - оператор остатка от деления, если остаток 0, число чётное
}
console.log(isEven(55));           //выводит 'false'
console.log(isEven(68));           //выводит 'true
console.log(isEven(-2));           //выводит 'true'
// 13. Округление вниз 
function floorNumber(n) {
    return Math.floor(n);          //встроенная функция округления вниз
}
console.log(floorNumber(5.51));    //выводит '5'
console.log(floorNumber(-1.49));   //выводит '-2'
// 14. Диапазон 
function inRange(x, a, b) {
    if (x >= a && x <= b) {     // x >= a - проверяем, что x больше или равно a, x <= b - проверяем, что x меньше или равно b, && - логическое И (оба условия должны быть true)
        return true;
    } else {
        return false;
    }
}
console.log(inRange(26, 25, 69));   //выводит 'true'
console.log(inRange(11, 16, 28));   //выводит 'false'
console.log(inRange(-3, -7, 22));   //выводит 'true'
// 15. Повтор строки    
function repeatText(text, times) {
    let repeated = "";                     // "" - начинаем с пустой строки
    for (let i = 0; i < times; i++) {      //Цикл for повторяется 'n' раз
        repeated += text;                  //добавляет text к строке repeated
    }
    return repeated;
}
console.log(repeatText("ja", 7));   //выводит 'jajajajajajaja'
console.log(repeatText("yap", 0));  //выводит ' '
