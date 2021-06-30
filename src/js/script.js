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