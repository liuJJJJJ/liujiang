document.addEventListener('DOMContentLoaded',function(){
    var a_hover = document.querySelector('.a_hover');
    var dropdown = document.querySelector('.dropdown');
    console.log(dropdown)
         
    a_hover.mouseover = function(){console.log(6)
         
      dropdown.style.display = 'block';
    }

    var mySwiper2 = new Swiper('#swiper2',{
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        loopFillGroupWithBlank: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        autoplay: true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })
    var mySwiper1 = new Swiper('#swiper1',{
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        effect: 'fade',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable : true,
          renderBullet:function(index,className){
            return '<span class="' + className + '">' + (index+1) + '</span>';
          },
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })
    var mySwiper3 = new Swiper('#swiper3',{
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        effect: 'fade',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable : true,
          renderBullet:function(index,className){
            return '<span class="' + className + '">' + (index+1) + '</span>';
          },
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })

})
