// 1. Базовый срез
let str1 = "JavaScript";
console.log(str1.slice(4)); // "Script"


// 2. Проверка начала и конца
let str2 = "report.pdf";
console.log(str2.startsWith("rep") && str2.endsWith(".pdf"));


// 3. Замена в строке
let str3 = "I like cats";
console.log(str3.replace("cats", "dogs"));


// 4. Подсчёт слов
let str4 = "apple,banana,orange,apple";
let arr4 = str4.split(",");
let count = 0;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] === "apple") {
    count++;
  }
}

console.log(count);


// 5. Найти числа
let str5 = "My phone number is 12345 and my code is 67890";
let arr5 = str5.split(" ");
let numbers = [];

for (let i = 0; i < arr5.length; i++) {
  if (!isNaN(arr5[i])) {
    numbers.push(arr5[i]);
  }
}

console.log(numbers);


// 6. Первое слово в lower case
let str6 = "Hello World From JS";
let arr6 = str6.split(" ");
arr6[0] = arr6[0].toLowerCase();
console.log(arr6.join(" "));


// 7. Цензура
let str7 = "JavaScript is a cool language";
console.log(str7.replace("cool", "****"));


// 8. Проверка email
let str8 = "user@example.com";

if (str8.includes("@") && str8.includes(".")) {
  console.log("Email valid");
} else {
  console.log("Invalid");
}


// 9. Аббревиатура
let str9 = "Java Script Object Notation";
let arr9 = str9.split(" ");
let abbr = "";

for (let i = 0; i < arr9.length; i++) {
  abbr += arr9[i][0];
}

console.log(abbr.toUpperCase());


// 10. Самое длинное слово
let str10 = "I love learning JavaScript programming";
let arr10 = str10.split(" ");
let longest = "";

for (let i = 0; i < arr10.length; i++) {
  if (arr10[i].length > longest.length) {
    longest = arr10[i];
  }
}

console.log(longest);


// 11. Домен из email
let str11 = "user@example.com";
let parts11 = str11.split("@");
console.log(parts11[1]);


// 12. Имя файла без расширения
let str12 = "archive.backup.zip";
let parts12 = str12.split(".");
parts12.pop();
console.log(parts12.join("."));


// 13. Пробелы на _
let str13 = "make this a slug line";
let arr13 = str13.split(" ");
console.log(arr13.join("_"));


// 14. Скрыть номер (простой вариант)
let str14 = "+7 (999) 123-45-67";
console.log("+7 (*** ) ***-45-67");
