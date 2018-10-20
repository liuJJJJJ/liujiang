document.addEventListener('DOMContentLoaded',function(){
    var goods_img = document.querySelector('.goods_img');
    var goods_a = document.querySelector('.goods_a');
    var price = document.querySelector('.goods_right ul');
    var W_store_floor = document.querySelector('.W_store_floor');
    var settle_price = document.querySelector('.settle_price');
    var choose_num = document.querySelector('.choose_num');
    var total = 0;
    var nums = 0;

    var goodslist = Cookie.getCookie("goodslist") || [];
        if(typeof goodslist == 'string'){
            goodslist = JSON.parse(goodslist);
            for(var i=0;i<goodslist.length;i++){
                var good = JSON.parse(goodslist[i]);
                var qty=Cookie.getCookie("qty");
                var qtys = JSON.parse(qty);
                
                nums += qtys;
                total += good.price * qtys;
                     
                W_store_floor.innerHTML +=`
                    <div class="store_top clearfix">
                        <span class="select_tik fl">
                            <i class="icon-a-c-check01-1"></i>
                            <i class="icon-a-c-check01-2"></i>
                        </span>
                        <a href="javascript:void(0);" class="store_name fl">法国赫柏林官方旗舰店</a>
                    </div>
                    <div class="goods_floor clearfix" data-goods-code="64487" data-cart-id="410422">
                        <div class="goods_info fl clearfix">
                            <div class="goods_right clearfix">
                                <span class="select_tik">
                                    <i class="icon-a-c-check01-1"></i>
                                    <i class="icon-a-c-check01-2"></i>
                                </span> 
                                <a href="/goods/64487" target="_blank">
                                    <div class="goods_img fl"> 
                                        <img src="../${good.url}">
                                    </div>
                                    <div class="goods_txt fl">
                                        <div class="goods_a">
                                            <p class="p1">${good.name}</p>
                                        </div>
                                    </div>
                                </a>
                                <ul class="fr">
                                    <li class="unit_price"> ¥<em>${good.price}</em></li>
                                    <li class="goods_num"> 
                                        <span class="reduce calc-btns">-</span> 
                                        <input type="text" class="num" value="${qtys}" data-stock="1" readonly=""> 
                                        <span class="add calc-btns">+</span>
                                    </li>
                                    <li class="total_price">¥<em class="subTotal">${good.price*qtys}</em></li>
                                    <li class="others"> 
                                        <a href="javascript:void(0);" class="delete_goods">删除</a> 
                                        <a href="javascript:void(0);" class="to_collection">移入收藏</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `     
            }
            choose_num.innerHTML =
            `已选商品<em id="selectedQuantity">${nums}</em>件`
            settle_price.innerHTML =`
                        <p class="p1">合计<span>¥<i id="payableAmount">${total}</i></span></p>
                        <p class="p2">总额&nbsp;¥<em id="goodsAmount">${total}</em><span class="h">活动优惠¥<i id="totalDiscount">0</i></span></p>
                `
        }

    var buyNum = document.querySelector('.num');
    var lessBtn = document.querySelector('.reduce');
    var addBtn = document.querySelector('.add');
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
        }else{
            buynum--;
            buyNum.value=buynum;
        } 
    }
})