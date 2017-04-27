/**
 * Created by Administrator on 2017/3/30 0030.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn1');
    oBtn.addEventListener('click',goForword);
    
    
};
function goForword() {
    window.history.forward();
}