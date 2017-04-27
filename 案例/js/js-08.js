/**
 * Created by Administrator on 2017/3/28 0028.
 */
// window.onload = function () {
    var oBtn = document.getElementById('btn');
    var oBox = document.getElementsByClassName('box')[0];
    var k = 0;
    oBtn.onclick = function () {
        k++;
        oBox.style.left = -k*300 + 'px';
        if(k == 3){
            k = 0;
            oBox.style.left = 0;
        }
    }
// }