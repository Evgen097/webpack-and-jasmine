'use strict';
// ## Коллекции
//
// 9. Реализуйте телефонную книгу на массиве объектов.
// - Объявите массив объектов с двумя полями: `name` и `phone` для хранения
// телефонной книги. Пример объекта:
//   `{ name: 'Marcus Aurelius', phone: '+380445554433' }` и добавьте несколько
// объектов в массив, чтоб было на чем проверять.
// - Реализуйте функцию `findPhoneByName` с сигнатурой
//   `findPhoneByName(name: string): string`. При вызове функция должна находить
// объект, где поле `name` равно аргументу `name` и возвращать номер телефона из
// объекта.

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Petro', phone: '+38097123567' },
  { name: 'Ivan', phone: '+380503216547' },
  { name: 'Leonid', phone: '+380637894512' }
];

const findPhoneByName = name => {
  for (const value of phonebook) {
    if (value.name === name) return value.phone;
  }
};


module.exports = { phonebook, findPhoneByName };
