let library = document.getElementsByClassName('books');
let book = document.querySelectorAll('.book');
   
        // Порядок книг
library[0].appendChild(book[2]);
library[0].insertBefore(book[3], book[5]);
library[0].insertBefore(book[0], book[4]);
   
        // Фоновое изображение
let bodyElem = document.querySelector('body');
bodyElem.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

        // Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let book3 = document.querySelector('.book:nth-child(3) a');
book3.textContent = 'Книга 3. this и Прототипы Объектов';

        //  Удалить рекламу
let buyGoogle = document.querySelector('.adv');
bodyElem.removeChild(buyGoogle);

//  Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// Книга 2
let bookTwoUl = document.querySelector('.book:nth-child(2) ul')
let bookTwoLi = document.querySelectorAll('.book:nth-child(2) li');
bookTwoUl.insertBefore(bookTwoLi[2], bookTwoLi[10]);
bookTwoUl.insertBefore(bookTwoLi[4], bookTwoLi[9]);
bookTwoUl.insertBefore(bookTwoLi[5], bookTwoLi[9]);
bookTwoUl.insertBefore(bookTwoLi[7], bookTwoLi[9]);
console.log(bookTwoLi[5]);

//  Книга 5
let bookFiveUl = document.querySelector('.book:nth-child(5) ul')
let bookFiveLi = document.querySelectorAll('.book:nth-child(5) li');
bookFiveUl.insertBefore(bookFiveLi[2], bookFiveLi[5]);
bookFiveUl.insertBefore(bookFiveLi[5], bookFiveLi[8]);
bookFiveUl.insertBefore(bookFiveLi[9], bookFiveLi[3]);
console.log('book[5]: ', book[5]);


//  В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let bookSixLi = document.querySelectorAll('.book:last-child ul li');
let book6 = document.createElement('li');
book6.textContent = 'Глава 8: За пределами ES6';
bookSixLi[8].appendChild(book6);


