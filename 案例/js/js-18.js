/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload = function () {
    var oLi = document.getElementsByTagName('li');
    var oDiv = document.getElementsByClassName('content');
    oDiv[0].style.display = 'block';
    for(var i in oLi){
        oLi[i].index = i;
        oLi[i].onmouseover = function () {
            this.style.background = '#ccc';
            this.style.color = 'white';
            this.style.fontWeight = '400';
            oDiv[this.index].style.display = 'block';
        };
        oLi[i].onmouseout = function () {
            this.style.background = 'white';
            this.style.color = 'black';
            this.style.fontWeight = 'normal';
            oDiv[this.index].style.display = 'none';
        }
    }

    
}