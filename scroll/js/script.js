//Меню Бургер
const iconMenu = document.querySelector('.header__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.header__nav-menu');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
   });
};
//Плавная прокрутка
$('a[href^="#"]').click(function () {
   let valHref = $(this).attr("href");
   $('html, body').animate({ scrollTop: $(valHref).offset().top + "px" })
});
//Анимация при скроле
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }

         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   };
   animOnScroll();
}
//Калькулятор
sumSiteType();
sumDesign();
sumAdaptability();
sum();
$('#siteType, #design, #adaptability').on('change', function () {
   sumSiteType();
   sumDesign();
   sumAdaptability();
   sum();
})
var siteTypePrice;
var siteTypeSumDay;
var designPrice;
var designSumDay;
var adaptabilityPrice;
var adaptabilitySumDay;
var price = 0;
var day = 0;
//Option
function sumSiteType() {
   var siteType = $('#siteType').val();
   if (siteType == 1) {
      var el = document.getElementById('onPage');
      siteTypePrice = el.dataset.price;
      siteTypeSumDay = el.dataset.day;
   } else {
      var el = document.getElementById('score');
      siteTypePrice = el.dataset.price;
      siteTypeSumDay = el.dataset.day;
   };
};
function sumDesign() {
   var design = $('#design').val();
   if (design == 1) {
      var el = document.getElementById('iDo');
      designPrice = el.dataset.price;
      designSumDay = el.dataset.day;
   } else {
      var el = document.getElementById('youDo');
      designPrice = el.dataset.price;
      designSumDay = el.dataset.day;
   };
};
function sumAdaptability() {
   var adaptability = $('#adaptability').val();
   if (adaptability == 1) {
      var el = document.getElementById('thereIs');
      adaptabilityPrice = el.dataset.price;
      adaptabilitySumDay = el.dataset.day;
   } else {
      var el = document.getElementById('no');
      adaptabilityPrice = el.dataset.price;
      adaptabilitySumDay = el.dataset.day;
   };
};
function sum() {
   //Подсчет стоимости
   siteTypePrice = Number(siteTypePrice);
   designPrice = Number(designPrice);
   adaptabilityPrice = Number(adaptabilityPrice);

   price = siteTypePrice + designPrice + adaptabilityPrice;

   console.log(price);

   siteTypeSumDay = Number(siteTypeSumDay);
   designSumDay = Number(designSumDay);
   adaptabilitySumDay = Number(adaptabilitySumDay);

   day = siteTypeSumDay + designSumDay + adaptabilitySumDay;

   //Вывод Калькулятора
   console.log(day);
   if (day === 1) {
      document.getElementById("p1").innerHTML = day + " день";
   } else if (day <= 4) {
      document.getElementById("p1").innerHTML = day + " дня";
   } else {
      document.getElementById("p1").innerHTML = day + " дней";
   };
   document.getElementById("p2").innerHTML = price + "₽";
}

$(window).scroll(() => {
   let scrollDistance = $(window).scrollTop();
   $(".section").each((i, el) => {
      if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
         $("nav a").each((i, el) => {
            if ($(el).hasClass("active")) {
               $(el).removeClass("active");
            }
         });
         $('nav li:eq(' + i + ')').find('a').addClass('active');
      }
   })
});