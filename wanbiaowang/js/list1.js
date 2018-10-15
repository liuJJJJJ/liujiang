document.addEventListener('DOMContentLoaded',function(){

    var xhr_list = new XMLHttpRequest();
    xhr_list.onload = function(){
        var status = [200,304];
        if(status.indexOf(xhr_list.status)>=0){
            var goods = JSON.parse(xhr_list.responseText);
            var goods_list = document.querySelector('.s_goods_list');
                 
            for(let i=0;i<goods.length;i++){
                biao(goods);
                function biao(goods){

                    goods_list.innerHTML +=`
                    <li>
                        <a href="detail.html" class="s_goods_img" target="_blank">
                            <img src="${goods[i].url}">
                        </a>
                        <div class="goods_txt">
                            <p class="tPrc">
                                <span class="s_price">
                                    <em>￥${goods[i].price}</em>
                                </span>
                                <del>￥${goods[i].oldprice}</del>
                            </p>
                            <a class="s_goods_name elps2">${goods[i].title}</a>
                            <div class="goods_sale">
                                <em class="s_sale_num">销量${goods[i].xiaoliang}</em>
                            </div>
                        </div>
                    </li>`     
                }
            }
        }
    }
    xhr_list.open('get','http://localhost:1888/wanbiaowang/api/list1.php',true);
    xhr_list.send(null);


    
})