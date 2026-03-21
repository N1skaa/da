// 1. Создание объекта и вывод полей
// создаём объект book
let book = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869
};
// выводим поля через точку
console.log(book.title);
console.log(book.author);
console.log(book.year);

// 2. Добавление нового свойства
// добавляем свойство pages
book.pages = 1225;
// выводим новое свойство
console.log(book.pages);
// проверяем объект
console.log(book);

// 3. Удаление свойства
// удаляем свойство year
delete book.year;
// проверяем объект
console.log(book);

// 4. Объект с полем через пробел
// создаём объект student
let student = {
  "full name": "Иван Петров"
};
// выводим через скобочную нотацию
console.log(student["full name"]);

// 5. Увеличение возраста
// создаём объект person
let person = {name: "Ivan", age: 30};
// увеличиваем возраст на 1
person.age = person.age + 1;
// выводим результат
console.log(person);

// 6. Вложенный объект
// создаём объект car с вложенным engine
let car = {
  brand: "BMW",
  engine: {
    power: 150,
    type: "diesel"
  }
};
// выводим тип двигателя
console.log(car.engine.type);

// 7. Безопасная проверка через ?.
// проверяем существование owner.name
let ownerName = car?.owner?.name;
// выводим результат (undefined, если не существует)
console.log(ownerName);

// 8. Перебор свойств объекта
// создаём объект user
let user = {id: 1, login: "root", isAdmin: true};
// перебираем все ключи и значения
for (let key in user) {
  console.log(key + ": " + user[key]);
}

// 9. Доступ к вложенным данным
// создаём объект orders
let orders = {
  id1: { product: "Phone", price: 500 },
  id2: { product: "Laptop", price: 1500 }
};
// выводим цену ноутбука
console.log(orders.id2.price);

// 10. Функция для получения значения по ключу
// создаём функцию, которая принимает объект и строку ключа
function getValue(obj, key) {
  // возвращаем значение через скобочную нотацию
  return obj[key];
}
// проверяем работу функции
let userForFunc = {name: "Alex", age: 25};
console.log(getValue(userForFunc, "name")); // Alex
console.log(getValue(userForFunc, "age"));  // 25

// 11. Проверка наличия ключа
// создаём функцию, которая проверяет наличие ключа "age"
function hasAge(obj) {
  // используем оператор in
  return "age" in obj;
}
// создаём объект user
const userForCheck = { name: "Ann", age: 20 };
// проверяем наличие ключа age
console.log(hasAge(userForCheck)); // true
// проверяем на объекте без age
console.log(hasAge({ name: "Bob" })); // false