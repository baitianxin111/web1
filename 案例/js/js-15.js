/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload = function () {
    var oP = document.getElementById('p1');
    function timer1() {
        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        hh = addZero(hh);
        mm = addZero(mm);
        ss = addZero(ss);
        p1.innerHTML = hh + ':' + mm + ':' + ss;
    }
    setInterval(timer1,1000);


};

function addZero(time1) {
    if(time1<10){
        time1 = '0' + time1;
    }
    return time1;
}