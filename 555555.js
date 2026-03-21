// 1. Добавить элемент
// создаём массив
let arr1 = [1, 2];
// добавляем в конец 3
arr1.push(3);
// выводим результат
console.log(arr1);

// 2. Удалить элемент
// создаём массив
let arr2 = ["a", "b", "c"];
// удаляем последний элемент
let removed = arr2.pop();
// выводим удалённый элемент
console.log(removed);
// выводим массив после удаления
console.log(arr2);

// 3. Проверка наличия
// создаём массив
let arr3 = [10, 20, 30, 40];
// проверяем наличие числа 100
let hasHundred = arr3.includes(100);
// выводим результат
console.log(hasHundred);

// 4. Получить подмассив
// создаём массив
let arr4 = [5, 10, 15, 20, 25];
// вырезаем элементы с 1 по 3 индекс
let subArr = arr4.slice(1, 4);
// выводим результат
console.log(subArr);

// 5. Замена через splice
// создаём массив
let arr5 = [1, 2, 3, 4];
// заменяем элементы с индекса 1 на X и Y
arr5.splice(1, 2, "X", "Y");
// выводим результат
console.log(arr5);

// 6. Умножение элементов
// создаём массив
let arr6 = [2, 4, 6];
// умножаем каждый элемент на 10
let multiplied = arr6.map(num => num * 10);
// выводим результат
console.log(multiplied);

// 7. Фильтрация чётных чисел
// создаём массив
let arr7 = [1, 2, 3, 4, 5, 6];
// оставляем только чётные числа
let evenNumbers = arr7.filter(num => num % 2 === 0);
// выводим результат
console.log(evenNumbers);

// 8. Сумма элементов
// создаём массив
let arr8 = [10, 20, 30, 40];
// суммируем все элементы
let sum = arr8.reduce((acc, curr) => acc + curr, 0);
// выводим результат
console.log(sum);

// 9. Найти объект
// создаём массив пользователей
let users9 = [
  {id: 1, name: "Anna"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Olga"}
];
// ищем пользователя с именем Ivan
let foundUser = users9.find(user => user.name === "Ivan");
// выводим результат
console.log(foundUser);

// 10. Сортировка
// создаём массив
let arr10 = [100, 5, 20, 15];
// сортируем по возрастанию
arr10.sort((a, b) => a - b);
// выводим результат
console.log(arr10);

// 11. Анализ данных пользователей
// исходные данные
const users11 = [
  {id: 1, name: "Anna", age: 25, city: "Moscow", salary: 80000},
  {id: 2, name: "Ivan", age: 30, city: "SPb", salary: 120000},
  {id: 3, name: "Olga", age: 22, city: "Moscow", salary: 60000},
  {id: 4, name: "Alex", age: 35, city: "SPb", salary: 150000}
];
// фильтруем: Москва, возраст > 23
let filtered = users11.filter(user => user.city === "Moscow" && user.age > 23);
// сортируем по зарплате по убыванию
let sorted = filtered.sort((a, b) => b.salary - a.salary);
// берём только имена
let names = sorted.map(user => user.name);
// выводим результат
console.log(names);