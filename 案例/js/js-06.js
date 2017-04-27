/**
 * Created by Administrator on 2017/3/28 0028.
 */
// function alertBox() {
//     alert(111);
//     fun1();
// }
// function fun2() {
//     fun1();
// }
// function fun1() {
//     alert(222);
// }
// window.onload = function () {
//     var a,b;    //用来作为求两个数的和的参数
//     var k = 0;   //K是用来保存最终求和的结果
//     function sum(a,b) {     //声明了一个函数，并且带有两个参数
//         var s = a + b;    //对两个参数进行求和，并赋值给变量S
//         return s;    //return语句的功能，就是将return后面的内容返回给调用函数的地方；
//         alert(s);
//     }
//     var arr = [1,2,3,4,5,6,7,8,9,10];    //定义一个数组变量arr
//     for(var i=0;i<arr.length;i++){     //使用for循环结构来进行求和运算
//         k = sum(k,arr[i]);
//     }
//     alert(k);
//     // var arr = [];
//     // for(var i=0;i<10;i++){
//     //     arr.push(Math.floor(Math.random()*10));
//     // }
//     // alert(arr);
// };
var k = 0;
function fun1() {
    var k = "我是局部变量K";    //我重新声明了一个变量K（局部变量）
    alert(k);
}
function fun2() {
    alert(k);
}
fun2();
fun1();
fun2();


