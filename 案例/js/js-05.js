/**
 * Created by Administrator on 2017/3/27 0027.
 */
window.onload = function () {
    for(var i=0;i<10;i++){
        if(i%3 == 1){
            continue;
        }
        alert(i);
    }
}