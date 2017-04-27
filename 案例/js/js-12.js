/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload = function () {
    var oDiv = document.getElementById('box');
    var oBtn = document.getElementById('btn');
    // oBtn.addEventListener('click',buttonEvent);
    oDiv.addEventListener('click',function () {
        alert(222);
    });
    oBtn.addEventListener('click',buttonEvent1);
    oBtn.addEventListener('click',buttonEvent2);
    // oBtn.onclick = function () {
    //     alert(111);
    // };
    // oBtn.onclick = function () {
    //     oDiv.style.background = 'orange';
    // }
    var oA = document.getElementById('aa');
    oA.addEventListener('click',function (e) {
        e.stopPropagation();
        e.preventDefault();
    });

};
function buttonEvent1(e) {
    alert(111);
    e.stopPropagation();
}
function buttonEvent2() {
    var oDiv = document.getElementById('box');
    oDiv.style.background = 'orange';
}
