/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload = function () {
    var oSpan = document.getElementById('number1');
    var timer1 = setInterval(function () {
        oSpan.innerHTML = Math.floor(Math.random()*3) + 5;
    },1000);
    var timer2;
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    oBtn1.addEventListener('click',stopInterval);
    oBtn2.addEventListener('click',restart);
    function stopInterval() {
        var oSpan = document.getElementById('number1');
        clearInterval(timer1);
        var val = parseInt(oSpan.innerText);
        if(val == 6){
            alert('恭喜，您中奖了！');
        }else{
            alert('就差一点点了，要不再来一次！？');
        }
    }
    function restart() {
        timer1 = null;
        clearInterval(timer2);
        timer2 = setInterval(function () {
            oSpan.innerHTML = Math.floor(Math.random()*3) + 5;
        },1000);
    }
};
