/**
 * Created by Administrator on 2017/3/30 0030.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn');
    var oP = document.getElementById('pid');
    oBtn.addEventListener('click',goBackTwo);
    oP.innerHTML = window.username;
};
function goBackTwo() {
    
    window.history.go(-2);
    // window.flag = true;
}