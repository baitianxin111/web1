/**
 * Created by Administrator on 2017/4/11.
 */
window.onload = function () {
    //logo的js
    var home_logoa_a = document.getElementById('home_logoa_a');
    function home_logomov() {
        home_logoa_a.style.opacity = '1'
    }
    function home_logoout() {
        home_logoa_a.style.opacity = '0'
    }
    home_logoa_a.addEventListener('mouseover', home_logomov);
    home_logoa_a.addEventListener('mouseout', home_logoout); 
    var oWrap=document.getElementById("wrapp");
    var bImg=document.getElementsByClassName("home_banner_bg");
    var iMax=4;
    //获取图片的初始位置
    for(var y=0;y<bImg.length;y++){
        bImg[y].startX=parseInt(getStyle(bImg[y],'left'))
    }
    wrapp.onmousemove=function(ev){
        ev=ev||window.event;
        //获取鼠标的位置与大盒子中心点位置的距离
        var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2);
        for(var y=0;y<bImg.length;y++){
            //获取每个img的z-index
            var iZindex=getStyle(bImg[y],'zIndex');
            //Zindex越大移动的相对距离越小
            var iDisL=-parseInt(iX/iMax*(iMax-iZindex)/5);
            //图片的距离等于原先的距离加上计算的距离
            bImg[y].style.left=bImg[y].startX+iDisL+'px'
        }
    }
    function getStyle(obj,attr)
    {
        if( obj.currentStyle){
            return obj.currentStyle[attr];
        }
        return getComputedStyle(obj)[attr];
    }
}