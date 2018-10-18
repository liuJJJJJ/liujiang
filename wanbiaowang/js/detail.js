document.addEventListener('DOMContentLoaded',function(){
    var thisURL = document.URL; 
    var getval =thisURL.split('?')[1]; 
    var showval= getval.split("=")[1];

    var xhr_list = new XMLHttpRequest();
    xhr_list.onload = function(){
        var status = [200,304];
        if(status.indexOf(xhr_list.status)>=0){
            var goods = JSON.parse(xhr_list.responseText);
            var zoom = document.querySelector('.content_img_wrap');
            // console.log(zoom)
                 
            for(let i=0;i<goods.length;i++){
                if(showval==goods[i].id){
                    zoom.innerHTML +=
                    `<img src="../${goods[i].url}">`;
                }
            }
        }
    }
    xhr_list.open('get','http://localhost:1888/wanbiaowang/wanbiaowang/api/list.php',true);
    xhr_list.send(null);
})