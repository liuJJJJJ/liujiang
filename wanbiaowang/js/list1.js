document.addEventListener('DOMContentLoaded',function(){

    var sort_price = document.querySelector('.sort_price');

    var xhr_list = new XMLHttpRequest();
    xhr_list.onload = function(){
        var status = [200,304];
        if(status.indexOf(xhr_list.status)>=0){
            var goods = JSON.parse(xhr_list.responseText);
            var goods_list = document.querySelector('.s_goods_list');
            
            biao(goods);
            function biao(goods){
                for(let i=0;i<goods.length;i++){
                    goods_list.innerHTML +=`
                    <li>
                        <a href="../html/detail.html?id=${goods[i].id}" class="s_goods_img" target="_blank">
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
            var live=true;
            sort_price.onclick=function(){
                goods_list.innerHTML='';
                if(live==true){
                    live=false;
                    var compare = function (prop) { 
                        return function (obj1, obj2) { 
                            var val1 = obj1[prop]; 
                            var val2 = obj2[prop]; 
                            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) 
                                { val1 = Number(val1); 
                                val2 = Number(val2); }
                                 if (val1 < val2) { return -1; } else if (val1 > val2) { return 1; } else { return 0; }
                        } 
                    }
                    res=goods.sort(compare("price"))
                         
                    for(let i=0;i<res.length;i++){
                        goods_list.innerHTML +=`
                        <li>
                            <a href="../html/detail.html?id=${res[i].id}" class="s_goods_img" target="_blank">
                                  <img src="${res[i].url}">
                            </a>
                            <div class="goods_txt">
                                <p class="tPrc">
                                    <span class="s_price">
                                        <em>￥${res[i].price}</em>
                                    </span>
                                    <del>￥${res[i].oldprice}</del>
                                </p>
                                <a class="s_goods_name elps2">${res[i].title}</a>
                                <div class="goods_sale">
                                    <em class="s_sale_num">销量${res[i].xiaoliang}</em>
                                </div>
                            </div>
                        </li>`     
                    }
                }else{
                    live=true;
                    var compare = function (prop) { 
                        return function (obj1, obj2) { 
                            var val1 = obj1[prop]; 
                            var val2 = obj2[prop]; 
                            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) 
                                { val1 = Number(val1); 
                                val2 = Number(val2); }
                                 if (val1 > val2) { return -1; } else if (val1 < val2) { return 1; } else { return 0; }
                        } 
                    }
                    res=goods.sort(compare("price"))
                         
                    for(let i=0;i<res.length;i++){
                        goods_list.innerHTML +=`
                        <li>
                            <a href="../html/detail.html?id=${res[i].id}" class="s_goods_img" target="_blank">
                                  <img src="${res[i].url}">
                            </a>
                            <div class="goods_txt">
                                <p class="tPrc">
                                    <span class="s_price">
                                        <em>￥${res[i].price}</em>
                                    </span>
                                    <del>￥${res[i].oldprice}</del>
                                </p>
                                <a class="s_goods_name elps2">${res[i].title}</a>
                                <div class="goods_sale">
                                    <em class="s_sale_num">销量${res[i].xiaoliang}</em>
                                </div>
                            </div>
                        </li>`     
                    }
                } 
            }
        }
    }
    xhr_list.open('get','http://localhost:1888/wanbiaowang/wanbiaowang/api/list1.php',true);
    xhr_list.send(null); 
})