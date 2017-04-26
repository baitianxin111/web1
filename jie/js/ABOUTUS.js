/**
 * Created by Administrator on 2017/4/6.
 */
window.onload = function() {
    //    底部
    function getScrollTop() {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }
//文档的总高度
    function getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }
//浏览器视口的高度
    function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }
    window.onscroll = function () {
        if (getScrollHeight() - getWindowHeight() - getScrollTop() <= 280) {
            var oFooter = document.getElementById('footer');
            oFooter.style.bottom = 0;
        }
        if (getScrollHeight() - getWindowHeight() - getScrollTop() >= 250) {
            var oFooter = document.getElementById('footer');
            oFooter.style.bottom = -278 + 'px';
        }
    };
    //移动
    function DivFlying() {
        var div = document.getElementsByClassName('bg')[0];
        var intX = (window.event.clientX) / 5;
        if (intX > 0) {
            intX = -intX;
            div.style.backgroundPositionX = intX + "px";
        }
    }
    document.onmousemove = DivFlying;

    //    移动
    //var oLo = document.getElementById("home_logoa");
    //oLo.onmouseover = function(){
    //    this.style.backgroundPositionY = -38+"px";
    //    this.style.height = 35+"px";
    //}



    //首页部分
    var oA3 = document.getElementsByClassName("aboutus_pire3");
    for(var i=0; i<=oA3.length; i++){
        oA3[i].onmouseover = function(){
            for(var k=0; k<oA3.length; k++){
                oA3[k].style.backgroundPositionY =  0;
                oA3[k].style.height = "65px";
            }
            this.style.backgroundPositionY = "-100px";
            this.style.height = "90px";
        };
        oA3[i].onmouseout = function(){
            this.style.backgroundPositionY = 0;
            this.style.height = "65px";
        };
    };




}


