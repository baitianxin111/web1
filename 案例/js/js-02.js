/**
 * Created by Administrator on 2017/3/27 0027.
 */
window.onload = function () {
    var k = 0;
    var oDiv = document.getElementById('box');
    oDiv.addEventListener('click',divClick);
    function divClick() {
        k%2==0?oDiv.style.background = 'orange':oDiv.style.background = 'skyblue';
        k++;
    }
    // alert('22'===22);
}


