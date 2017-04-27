/**
 * Created by Administrator on 2017/3/30 0030.
 */
window.onload = function () {
    var oP = document.getElementById('pid');
    var oBtn = document.getElementById('btn');
    oBtn.addEventListener('click',judgeLogin);
    // alert(window.flag);
    if(flag == true){
        oP.innerHTML = window.username;
    }
    // alert(window.flag);
    // alert(window.location.port);
    // alert(window.screen.availHeight);
    // alert(document.documentElement.offsetHeight||document.body.offsetHeight);



};
function judgeLogin() {
    var oP = document.getElementById('pid');
    var uname = oP.innerHTML;
    if(uname == window.username){
        window.open('js-22-03.html','_self');
    }else{
        window.open('js-22-02.html','_self');
    }
}
