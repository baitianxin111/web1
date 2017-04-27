/**
 * Created by Administrator on 2017/3/30 0030.
 */
window.onload = function () {
    var oBtn = document.getElementById('btn');

    oBtn.addEventListener('click',openWindow);
    var oBtn1 = document.getElementById('btn1');

    oBtn1.addEventListener('click',closeWindow);
    // alert(window.innerHeight);

    var timer = setInterval(getTime,1000);

    clearInterval(timer);

    // var oDiv = document.getElementById('box');
    // var oP = document.getElementById('pid');
    // oP.innerHTML = '我是被创建到div中的一个P元素！';
    // oDiv.appendChild(oP);
    // oDiv.removeChild(oP);
    // alert(oDiv.offsetHeight);
    // window.addEventListener('scroll',showScrollHeight);
};
function showScrollHeight() {
    // alert(111);
    console.log(document.body.scrollTop);
}
function openWindow() {
    window.open('http://www.baidu.com','baidu','width=300,height=300');
}
function closeWindow() {
    window.close();
}
function getTime() {
    var thisTime = new Date();
    var currentTime = thisTime.toLocaleTimeString();
    document.body.innerHTML = currentTime;
}