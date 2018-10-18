document.addEventListener('DOMContentLoaded',function(){

    var buyNum = document.querySelector('.cont');
    var lessBtn = document.querySelector('.reduce');
    var addBtn = document.querySelector('.plus');

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
            // console.log(zoom)

            for(let i=0;i<goods.length;i++){
                if(showval==goods[i].id){
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
})