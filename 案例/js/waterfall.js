/**
 * Created by Administrator on 2017/3/31 0031.
 */
window.onload = function () {

    imgLocation('container','box');
    //先解决整个container居中的问题

    function imgLocation(parent,content) {
        var cparent = document.getElementById(parent);
        var ccontent = document.getElementsByClassName(content);
        // alert(ccontent.length);
        var imgWidth = ccontent[0].offsetWidth;
        var numBox = Math.floor(document.documentElement.clientWidth/imgWidth);

        cparent.style.cssText = 'width:' + imgWidth * numBox + 'px;margin:0 auto;';

        // cparent.style.width = imgWidth * numBox + 'px';
        //
        // cparent.style.margin = '0 auto';

        var imgHeightArr = [];

        for(var i = 0; i<ccontent.length; i++){
            if(i < numBox){
                imgHeightArr.push(ccontent[i].offsetHeight);
            }else{
                var minHeight = Math.min.apply('null',imgHeightArr);
                var minHeightIndex = getMinIndex(imgHeightArr,minHeight);
                ccontent[i].style.position = 'absolute';
                ccontent[i].style.top = minHeight + 'px';
                ccontent[i].style.left = ccontent[minHeightIndex].offsetLeft + 'px';
                imgHeightArr[minHeightIndex] = imgHeightArr[minHeightIndex] + ccontent[i].offsetHeight;
            }
        }




    }




    // var container = document.getElementById('container');
    //
    //
    //
    //
    // container.style.margin = '0 auto';




};
function getMinIndex(arr,min) {
    for(j in arr){
        if(arr[j] == min){
            return j;
        }
    }
}