
/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

/* конфигурация */
let width = 142.5; // ширина картинки
let count = 4; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 1; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length + (count - 2)));
    list.style.marginLeft = position + 'px';
};





/* этот код помечает картинки, для удобства разработки */
let j = 1;
for(let li of logoSlick.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${j}</span>`);
    j++;
}

/* конфигурация */
let onWidth = 180; // ширина картинки
let onCount = 5; // видимое количество изображений

let onList = logoSlick.querySelector('ul');
let onListElems = logoSlick.querySelectorAll('li');

let onPosition = 0; // положение ленты прокрутки

logoSlick.querySelector('.of_prev').onclick = function() {
    // сдвиг влево
    onPosition += onWidth * onCount;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    onPosition = Math.min(onPosition, 0)
    onList.style.marginLeft = onPosition + 'px';
};

logoSlick.querySelector('.on_next').onclick = function() {
    // сдвиг вправо
    onPosition -= onWidth * onCount;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    onPosition = Math.max(onPosition, -onWidth * (listElems.length - onCount));
    onList.style.marginLeft = onPosition + 'px';
};