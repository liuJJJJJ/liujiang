document.addEventListener('DOMContentLoaded',function(){

    var xhr_list = new XMLHttpRequest();
    xhr_list.onload = function(){
        var status = [200,304];
        if(status.indexOf(xhr_list.status)>=0){
            var goods = JSON.parse(xhr_list.responseText);
            var swiper_wrapper = document.querySelector('.buy_list_slider .swiper-wrapper');
                 
            for(let i=0;i<goods.length;i++){
                biao(goods);
                function biao(goods){

                    swiper_wrapper.innerHTML +=`
                    <div class="swiper-slide">
                        <a href="html/detail.html" class="slider_a" target="_blank">
                            <p class="s_img">
                                <img src="${goods[i].url}">
                            </p>
                            <div class="s_txt">
                                <p class="p1 elps1">${goods[i].name}</p>
                                <p class="p2 clearfix">
                                    <span class="sp_01 fl">
                                        <em>${goods[i].zhekou}折</em>
                                        <i class="icon-d-sg-bg"></i>
                                    </span>
                                    <span class="sp_02 fl">￥${goods[i].price}</span>
                                </p>
                                <del>￥${goods[i].oldprice}</del>
                            </div>
                        </a>
                    </div>`
                         
                }
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
        }
    }
    xhr_list.open('get','http://localhost:1888/wanbiaowang/api/list.php',true);
    xhr_list.send(null);


    
})