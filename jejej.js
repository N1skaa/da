// 1. Базовый срез
let str1 = "JavaScript";

console.log(str1.slice(4)); // берём часть строки с 4 индекса → "Script"


// 2. Проверка начала и конца
let str2 = "report.pdf";

console.log(str2.startsWith("rep") && str2.endsWith(".pdf")); // проверяем начало и конец строки


// 3. Замена в строке
let str3 = "I like cats";

console.log(str3.replace("cats", "dogs")); // заменяем слово cats на dogs


// 4. Подсчёт слов
let str4 = "apple,banana,orange,apple";

let arr4 = str4.split(","); // разбиваем строку по запятой
let count = 0;              // счётчик

for (let i = 0; i < arr4.length; i++) { // перебираем массив
  if (arr4[i] === "apple") {            // если элемент равен apple
    count++;                            // увеличиваем счётчик
  }
}

console.log(count); // вывод количества слов apple


// 5. Фильтр по слову
let str5 = "My phone number is 12345 and my code is 67890";

let arr5 = str5.split(" "); // разбиваем строку на слова
let numbers = [];           // массив для чисел

for (let i = 0; i < arr5.length; i++) { // перебираем слова
  if (!isNaN(arr5[i])) {                // если это число
    numbers.push(arr5[i]);              // добавляем в массив
  }
}

console.log(numbers); // выводим найденные числа


// 6. Первое слово в нижний регистр
let str6 = "Hello World From JS";

let arr6 = str6.split(" ");        // разбиваем строку
arr6[0] = arr6[0].toLowerCase();   // первое слово делаем маленькими буквами

console.log(arr6.join(" "));       // соединяем обратно


// 7. Цензура
let str7 = "JavaScript is a cool language";

console.log(str7.replace("cool", "****")); // заменяем слово cool


// 8. Проверка наличия подстроки
let str8 = "user@example.com";

if (str8.includes("@") && str8.includes(".")) { // если есть @ и .
  console.log("Email valid");
} else {                                        // иначе
  console.log("Invalid");
}


// 9. Аббревиатура
let str9 = "Java Script Object Notation";

let arr9 = str9.split(" "); // разбиваем на слова
let abbr = "";              // пустая строка

for (let i = 0; i < arr9.length; i++) { // перебираем слова
  abbr += arr9[i][0];                   // добавляем первую букву
}

console.log(abbr.toUpperCase()); // выводим в верхнем регистре


// 10. Самое длинное слово
let str10 = "I love learning JavaScript programming";

let arr10 = str10.split(" "); // разбиваем строку
let longest = "";             // самое длинное слово

for (let i = 0; i < arr10.length; i++) { // перебираем слова
  if (arr10[i].length > longest.length) { // если слово длиннее
    longest = arr10[i];                   // запоминаем его
  }
}

console.log(longest); // выводим результат


// 11. Достать домен из email
let str11 = "user@example.com";

let parts11 = str11.split("@"); // делим по @

console.log(parts11[1]); // берём часть после @


// 12. Достать имя файла без расширения 
let str12 = "archive.backup.zip";

let parts12 = str12.split("."); // разбиваем по точке
parts12.pop();                  // удаляем последнее расширение

console.log(parts12.join(".")); // соединяем обратно


// 13. Заменить ВСЕ пробелы на подчёркивания 
let str13 = "make this a slug line";

let arr13 = str13.split(" "); // разбиваем по пробелам

console.log(arr13.join("_")); // соединяем через _


// 14. Скрыть середину номера телефона
let str14 = "+7 (999) 123-45-67";

console.log("+7 (*** ) ***-45-67"); // выводим скрытый номер
