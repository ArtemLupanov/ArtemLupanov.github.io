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
   });
};

setTimeout(function () {
   var price = 0;
   var sumDay = 0;
   function typef() {
      var type = prompt("Тип сайта: 1 - Одностраничный, 2 - магазин");
      if (type === "1") {
         price = price + 1000;
         sumDay = sumDay + 1;
         $('#onPage').attr('selected', true);
      } else if (type === "2") {
         price = price + 10000;
         sumDay = sumDay + 7;
         $('#score').attr('selected', true);
      } else {
         alert("Введите 1 или 2");
         typef();
      }
   };
   function designf() {
      var design = prompt("Дизайн: 1 - Делаю я, 2 - Делаете вы");
      if (design === "1") {
         price = price + 2000;
         sumDay = sumDay + 1;
         $('#iDo').attr('selected', true);
      } else if (design === "2") {
         price = price + 0;
         sumDay = sumDay + 0;
         $('#youDo').attr('selected', true);
      } else {
         alert("Введите 1 или 2");
         designf();
      }
   };
   function adaptabilityf() {
      var adaptability = prompt("Адаптивность: 1 - Есть, 2 - Нет");
      if (adaptability === "1") {
         price = price + 5000;
         sumDay = sumDay + 2;
         $('#thereIs').attr('selected', true);
      } else if (adaptability === "2") {
         price = price + 1000;
         sumDay = sumDay + 1;
         $('#no').attr('selected', true);
      } else {
         confirm("Введите 1 или 2");
         adaptabilityf();
      }
   };
   typef();
   designf();
   adaptabilityf();

   //Вывод Калькулятора alert
   if (sumDay === 1) {
      document.getElementById("p1").innerHTML = sumDay + " день";
   } else if (sumDay <= 4) {
      document.getElementById("p1").innerHTML = sumDay + " дня";
   } else {
      document.getElementById("p1").innerHTML = sumDay + " дней";
   };
   document.getElementById("p2").innerHTML = price + "₽";
   alert(`Итоговая цена = ${price}₽. Дней будет затрачено = ${sumDay}`);
}, 2000);

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

//Бегущие цифры
var show = true;
const animPrice = document.querySelectorAll('.count');
$(window).on("scroll", function () {

   if (!show) return false

   var w_top = $(window).scrollTop() + 500;
   var e_top = $(".statistics").offset().top;

   if (w_top >= e_top) {

      let windowBottom = (window.innerHeight) + window.scrollY;
      animPrice.forEach(el => {
         let scrollOffset = el.offsetTop + (el.offsetHeight);
         if (windowBottom >= scrollOffset) {
            el.classList.add('_anim-items');
         }
      });
      $('.count').each(function () {
         $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
         }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
               $(this).text(Math.ceil(now));
            }
         });
      });
      show = false;
   }
});
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

//Слайдер
$('.cases__scrol').slick();
$('.reviews__scroll').slick({
   dots: true,
});

// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var img1 = document.getElementById('cases-img1');
img1.onclick = function () {
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
   document.body.style.overflow = 'hidden';
}
var img2 = document.getElementById('cases-img2');
img2.onclick = function () {
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
   document.body.style.overflow = 'hidden';
}
var img3 = document.getElementById('cases-img3');
img3.onclick = function () {
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
   document.body.style.overflow = 'hidden';
}
var img4 = document.getElementById('cases-img4');
img4.onclick = function () {
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
   document.body.style.overflow = 'hidden';
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
   document.body.style.overflow = '';
}

