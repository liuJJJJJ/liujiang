document.addEventListener('DOMContentLoaded',function(){

    var buyNum = document.querySelector('.cont');
    var lessBtn = document.querySelector('.reduce');
    var addBtn = document.querySelector('.plus');
    var addcart = document.querySelector('.addcart');

    var buynum=buyNum.value;
    addBtn.onclick=function(){
        if(buynum>=9){
            alert("购买数量最高为9")
            return;
        }else{
            ++buynum;
            buyNum.value=buynum;
        }
        
    }
    lessBtn.onclick=function(){
        if(buynum<=1){
            alert("购买数量最低为1")
            return;
        }else{buynum--;

        buyNum.value=buynum;
        } 
    }

    var thisURL = document.URL; 
    var getval =thisURL.split('?')[1]; 
    var showval= getval.split("=")[1];

    var xhr_list = new XMLHttpRequest();
    xhr_list.onload = function(){
        var status = [200,304];
        if(status.indexOf(xhr_list.status)>=0){
            var goods = JSON.parse(xhr_list.responseText);
            var zoom = document.querySelector('.content_img_wrap');
            var price = document.querySelector('.upper_price_jiage_right');
            var img = document.querySelector('.upper_style_right_img');
            var upper_title = document.querySelector('.upper_title');
            // console.log(zoom)

            for(let i=0;i<goods.length;i++){
                if(showval==goods[i].id){
                    upper_title.innerHTML +=
                    `<span>${goods[i].name}</span>`;

                    zoom.innerHTML +=
                    `<img src="../${goods[i].url}">`;

                    price.innerHTML +=
                    `
                    <span class="upper_price_jiage_a">￥</span>
                    <span class="upper_price_jiage_b js_price">${goods[i].price}</span>
                    <span class="upper_price_jiage_d">一口价</span>
                    <span class="upper_price_jiage_c">￥${goods[i].oldprice}</span>
                    `;

                    img.innerHTML +=
                    `<img src="../${goods[i].url}">`;
                }
            }
        }
    }
    xhr_list.open('get','http://localhost:1888/wanbiaowang/wanbiaowang/api/list.php',true);
    xhr_list.send(null);

    // var xhr_list = new XMLHttpRequest();
    // xhr_list.onload = function(){
    //     var status = [200,304];
    //     if(status.indexOf(xhr_list.status)>=0){
    //         var goods = JSON.parse(xhr_list.responseText);
    //         var zoom = document.querySelector('.content_img_wrap');
    //         var price = document.querySelector('.upper_price_jiage_right');
    //         var img = document.querySelector('.upper_style_right_img');
    //         var upper_title = document.querySelector('.upper_title');
    //         // console.log(zoom)

    //         for(let i=0;i<goods.length;i++){
    //             if(showval==goods[i].id){
    //                 upper_title.innerHTML +=
    //                 `<span>${goods[i].title}</span>`;

    //                 zoom.innerHTML +=
    //                 `<img src="../${goods[i].url}">`;

    //                 price.innerHTML +=
    //                 `
    //                 <span class="upper_price_jiage_a">￥</span>
    //                 <span class="upper_price_jiage_b js_price">${goods[i].price}</span>
    //                 <span class="upper_price_jiage_d">一口价</span>
    //                 <span class="upper_price_jiage_c">￥${goods[i].oldprice}</span>
    //                 `;

    //                 img.innerHTML +=
    //                 `<img src="../${goods[i].url}">`;
    //             }
    //         }
    //     }
    // }
    // xhr_list.open('get','http://localhost:1888/wanbiaowang/wanbiaowang/api/list1.php',true);
    // xhr_list.send(null);

    addcart.onclick = function(e){
        var xhr_list = new XMLHttpRequest();
        xhr_list.onload = function(){
            var status = [200,304];
            if(status.indexOf(xhr_list.status)>=0){
                var goods = JSON.parse(xhr_list.responseText);
                for(let i=0;i<goods.length;i++){
                    if(showval==goods[i].id){
                        var goodslist=Cookie.getCookie("goodslist") || [];
                        if(typeof goodslist == "string"){
                            goodslist = JSON.parse(goodslist);
                        }
                        
                        goodslist.push(JSON.stringify(goods[i]));

                        document.cookie="goodslist="+JSON.stringify(goodslist);
                        document.cookie="qty="+JSON.stringify(buynum);

                    }
                }
            }
        }
        xhr_list.open('get','http://localhost:1888/wanbiaowang/wanbiaowang/api/list.php',true);
        xhr_list.send(null);
    }
})