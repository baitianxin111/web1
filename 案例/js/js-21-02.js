/**
 * Created by Administrator on 2017/3/30 0030.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn2');
    oBtn.addEventListener('click',goBack);
    
    
};
function goBack() {
    window.history.forward();
}