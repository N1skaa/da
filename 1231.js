// 1. Проверка числа
let n = -8;

if (n > 0) {                  // если число больше 0
  console.log("positive");
} else if (n < 0) {           // если число меньше 0
  console.log("negative");
} else {                      // если число равно 0
  console.log("zero");
}


// 2. Минимум из двух
let a = 3;
let b = 11;

console.log(a < b ? a : b);   //выводим меньшее число


// 3. Делится ли на 3
n = 17;

if (n % 3 === 0) {            //остаток от деления, если 0 делится
  console.log("yes");
} else {
  console.log("no");
}


// 4. Сумма чисел от 1 до N
let N = 192;
let sum = 0;                 // переменная для хранения суммы

for (let i = 1; i <= N; i++) { // цикл от 1 до N
  sum += i;                  // добавляем текущее число к сумме
}
console.log(sum);


// 5. Все нечётные числа от 1 до 15
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {          // если остаток от деления на 2 не равен 0 число нечётное
    console.log(i);
  }
}


// 6. Количество чётных чисел от 1 до 20
let count = 0;               // счётчик чётных чисел

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {          // проверяем, чётное ли число
    count++;
  }
}
console.log(count);


// 7. Найти букву в строке
let str = "bananchiki";
let letterCount = 0;         // счётчик буквы "a"

for (let i = 0; i < str.length; i++) { // перебираем строку посимвольно
  if (str[i] === "a") {       // сравниваем текущий символ
    letterCount++;
  }
}
console.log(letterCount);


// 8. Переворот строки
let text = "hello";
let reversed = "";           // сюда будем добавлять символы в обратном порядке

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];       // добавляем символы с конца строки
}
console.log(reversed);


// 9. Таблица умножения на число
let num = 4;

for (let i = 1; i <= 10; i++) {   // цикл от 1 до 10
  console.log(num + " * " + i + " = " + num * i);
}


// 10. Простая пирамидка
let stars = "";

for (let i = 1; i <= 4; i++) {
  stars += "*";              // на каждом шаге добавляем одну звёздочку
  console.log(stars);
}


// 11. Сумма чисел, кратных 3 или 5
N = 30;
sum = 0;

for (let i = 1; i <= N; i++) {
  if (i % 3 === 0 || i % 5 === 0) { // число делится на 3 ИЛИ на 5
    sum += i;
  }
}
console.log(sum);


// 12. Второе максимальное из трёх
let x = 9;
let y = 17;
let z = 17;

// проверяем, какое число находится между двумя другими
if ((x <= y && x >= z) || (x >= y && x <= z)) {
  console.log(x);
} else if ((y <= x && y >= z) || (y >= x && y <= z)) {
  console.log(y);
} else {
  console.log(z);
}


// 13. Количество гласных в строке
let word = "education";
let vowels = "aeiou";        // строка с гласными
count = 0;

for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) { // проверяем, есть ли буква среди гласных
    count++;
  }
}
console.log(count);