document.body.onload = function () {
   setTimeout(function () {
      var preloader = document.getElementById('page-preloader');
      if (!preloader.classList.contains('done')) {
         preloader.classList.add('done');
      }
   }, 1000);
}

//Меню Бургер
const iconMenu = document.querySelector('.header__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.header__nav-menu');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
   })

}

setTimeout(function () {
   let type = prompt("Тип сайта: 1 - Одностраничный, 2 - магазин");
   let dayType;
   if (type === "1") {
      type = 2000;
      dayType = 1;
   } else {
      type = 10000;
      dayType = 7;
   };

   let design = prompt("Дизайн: 1 - Делаю я, 2 - Делаете вы");
   let dayDesign;
   if (design === "1") {
      design = 2000;
      dayDesign = 2;
   } else {
      design = 0;
      dayDesign = 0;
   };

   let adaptability = prompt("Адаптивность: 1 - Есть, 2 - Нет");
   let dayAdaptability;
   if (adaptability === "1") {
      adaptability = 5000;
      dayAdaptability = 2;
   } else {
      adaptability = 1000;
      dayAdaptability = 1;
   };

   let price = type + design + adaptability;
   let sumDay = dayType + dayDesign + dayAdaptability;

   alert(`Итоговая цена = ${price}₽. Дней будет затрачено = ${sumDay}`);
}, 2000);