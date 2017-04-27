/**
 * Created by Administrator on 2017/3/28 0028.
 */

window.onload = function () {
    var oBtn = document.getElementById('btn');
    var oP = document.getElementById('p1');
    oBtn.addEventListener('click',function () {
        oP.style.background = 'orange';
    });
    oBtn.addEventListener('click',function () {
        oP.style.color = 'white';
    });
    
};
// function changeBg(obj) {
//     obj.style.background = 'orange';
// }
// function changeColor(obj) {
//     obj.style.color = 'white';
// }