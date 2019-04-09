const switcher = document.querySelector('#cbx'),
      more = document.querySelector('.more'),
      modal = document.querySelector('.modal'),
      videos = document.querySelectorAll('.vieos__item');
let player;

function bindSlideToggle(trigger, boxBody, content, openClass) {
   let button = {
         'element': document.querySelector(trigger),
         'active': false
   };
   const box = document.querySelector(boxBody),
         boxContent = document.querySelector(content);

   button.element.addEventListener('click', () => {
      if (button.active === false) { // Проверяем меню на неактивность
         button.active = true;    // Если она не активная - то мы делаем ее активной
         box.style.height = boxContent.clientHeight + 'px';
         box.classList.add(openClass); // Активный класс для меню
      } else {
         button.active = false;
         box.style.height = 0 + 'px';
         box.classList.remove(openClass);
      }
   });
}
// вроде та же строка, а не работает ???
// bindSlideToggle('.humburger', '[data-slide="nav"]', '.header__menu', 'slide-active');
bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');



function switchMode() {
   if (night === false){
      night = true;
      // document.body.style.backgroundColor = '#000';
      // Добавили черный цвет на задний план
      document.body.classList.add('night');
      // Перекрасили Humburger
      document.querySelectorAll('.hamburger > line').forEach(item => {
         item.style.stroke= '#fff';
      });
      // Перекрашиваем буквы
      document.querySelectorAll('.videos__item-descr').forEach(item => {
         item.style.color= '#fff';
      });
       // Перекрашиваем просмотры
       document.querySelectorAll('.videos__item-views').forEach(item => {
         item.style.color= '#fff';
      });
       // Перекрашиваем NightMode
      document.querySelector('.header__item-descr').style.color = '#fff';
      //  Перекрашиваем Logo
      document.querySelector('.logo > img').src = 'logo/youtube_night.svg';
   } else {
      night = false;
       // Добавили черный цвет на задний план
      document.body.classList.remove('night');
       // Перекрасили Humburger
      document.querySelectorAll('.hamburger > line').forEach(item => {
         item.style.stroke= '#000';
      });
      // Перекрашиваем буквы
      document.querySelectorAll('.videos__item-descr').forEach(item => {
         item.style.color= '#000';
      });
      // Перекрашиваем просмотры
      document.querySelectorAll('.videos__item-views').forEach(item => {
      item.style.color= '#000';
      });
      // Перекрашиваем NightMode
      document.querySelector('.header__item-descr').style.color = '#000';
      //  Перекрашиваем Logo
      document.querySelector('.logo > img').src = 'logo/youtube.svg';
   }
}

let night = false;
switcher.addEventListener('change', () => {
   switchMode();
});

// Скопированный код
const data = [
   ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
   ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
       '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки  Урок 2',
       '#1 Верстка реального заказа landing Page | Марафон вёрстки | Артём Исламов'],
   ['3,6 тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
   ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
];

more.addEventListener('click', () => {
   const videosWrapper = document.querySelector('.videos__wrapper');
   more.remove();

   for (let i = 0; i < data[0].length; i++) {
      let card = document.createElement('a');
      card.classList.add('videos__item', 'videos__item-active');
      // card.setAtrribute('data-url', data[3][i]);
      card.setAttribute('data-url', data[3][i]);
      card.innerHTML = `
         <img src="${data[0][i]}" alt="thumb">
         <div class="videos__item-descr">
            ${data[1][i]}
         </div>
         <div class="videos__item-views">
            ${data[2][i]}
         </div>
      `;
      //Помещаем карточку
      videosWrapper.appendChild(card);
      //запускаем скрипт с задержкой
      setTimeout(() => {
         card.classList.remove('videos__item-active');
      }, 10);
   }
});















