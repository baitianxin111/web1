/**
 * Created by Administrator on 2017/3/30 0030.
 */
var flag = false;
window.onload = function () {

    var oBtn = document.getElementById('btn');
    oBtn.addEventListener('click',login);

};
function login() {
    var oInput = document.getElementById('user').value;
    if(oInput == window.username){
        window.open('js-22-03.html','_self');
        window.flag1 = true;
        // alert(window.flag1);
        window.flag2 = window.flag1;
        flag = true;
    }else{
        alert('您输入的用户名错误，请重新输入！');
        document.getElementById('user').value = '';
        document.getElementById('user').focus();
    }
}