/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn');
    oBtn.addEventListener('click',showType);
    
    
};
function showType(event) {
    alert(event.target);
}