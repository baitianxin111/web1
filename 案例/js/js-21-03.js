/**
 * Created by Administrator on 2017/3/30 0030.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn3');
    oBtn.addEventListener('click',gogo);
};
function gogo() {
    window.history.go(-1);
}