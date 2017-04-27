// /**
//  * Created by Administrator on 2017/3/28 0028.
//  */
// function fun1() {
//     var e = document.getElementById('txt').value;
//     try{
//         if(e == ''){
//             throw '用户输入为空的异常情况';
//         }
//     }catch(err){
//         alert(err);
//     }
//
// }
// window.onload = function () {
//     var oInput = document.getElementById('txt');
//     oInput.onfocus = null;
//     oInput.onfocus = function () {
//         txtFocus();
//     }
//
//    
// }
// function txtChange() {
//     alert('文本内容发生了改变');
// }
// function txtSelect() {
//     alert('您选择了文本');
// }
// function txtFocus() {
//     alert('文本框获取了焦点');
// }
function draw() {
    var canvas = document.getElementById('myCanvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        // ctx.moveTo(25,25);
        ctx.arc(65,65,50,0,Math.PI*2,true);
        ctx.stroke();
    }
}
