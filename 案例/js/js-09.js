/**
 * Created by Administrator on 2017/3/28 0028.
 */
window.onload = function () {
    // var oBtn = document.getElementsByTagName('button');
    // var oP = document.getElementById('p1');
    // oBtn[0].onclick = function () {
    //     oP.innerHTML = '<h1>World</h1>';
    // }
    // var oP = document.getElementById('p1');
    // var oImg = document.getElementById('img1');
    // oImg.onmouseover = function () {
    //     this.src = '7.jpg';
    // }
    // oImg.onmouseout = function () {
    //     this.src = '5.jpg';
    // }
    // oP.onmouseover = function () {
    //     this.style.color = '#f00';
    //     this.style.fontWeight = 'bold';
    // }
    // oP.onmouseout = function () {
    //     this.style.color = '';
    //     this.style.fontWeight = 'normal';
    // }
    // alert(111);
    // var i;
    // var k;
    var oLi = document.getElementsByTagName('li');
    var arr = ['green','orange','purple'];
    // for(var i in oLi){
    //     oLi[i].index = i;
    //     oLi[i].onmouseover = function () {
    //         this.style.background = arr[this.index];
    //     }
    // }
    // var k;
    for(var i in oLi){
        // k = i;
        oLi[i].index = i;
        oLi[i].onmouseover = function () {
            this.style.background = arr[this.index];
        }
    }

    // var oBtn = document.getElementById('btn');
    // oBtn.addEventListener();


    // for(var i=0;i<oLi.length;i++){
    //     oLi[i].index = i;
    //     // k = i;
    //     oLi[i].onmouseover = function () {
    //         this.style.color = arr[k];
    //     };
    //     oLi[i].onmouseout = function () {
    //         this.style.color = 'black';
    //     }
    // }



    // for(i in oLi){
    //     oLi[i].onmouseover = function () {
    //
    //     }
    // }



    // for(var i = 0;i<oLi.length;i++){
    //     oLi[i].onmouseover = function (i) {
    //         // alert(arr[i]);
    //         this.style.color = arr[i];
    //     }
    // }
}